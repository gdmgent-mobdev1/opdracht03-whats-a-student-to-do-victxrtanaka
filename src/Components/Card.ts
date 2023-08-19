/* eslint-disable import/no-cycle */
import { root, State } from "../lib";
// import { dragstartHandler } from '../Lib/dragAndDrop';
// import Comment from './Comment';
import EditableText from "./EditebleText";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

export default class Card {
  place: HTMLElement;
  todoList: TodoList;
  state: State;
  menuContainer?: HTMLElement;
  card?: HTMLDivElement;
  deleteButton?: HTMLButtonElement;
  p?: HTMLParagraphElement;
  menu?: HTMLDivElement;
  menuTitle?: HTMLDivElement;
  menuDescription?: HTMLDivElement;
  commentsInput?: HTMLInputElement;
  commentsButton?: HTMLButtonElement;
  menuComments?: HTMLDivElement;
  editableDescription?: EditableText;
  editableTitle?: EditableText;
  id: string;

  constructor(text: string, place: HTMLElement, todoList: TodoList) {
    this.id = uuidv4();
    this.place = place;
    this.todoList = todoList;
    this.state = {
      text,
      description: "Click to write a description...",
      comments: [],
    };
    this.render();
  }

  render(): void {
    this.card = document.createElement("div");
    this.card.classList.add("card");
    // this.card.setAttribute("draggable", "true");
    this.card.id = this.id;
    this.card.addEventListener("click", (e) => {
      if (e.target !== this.deleteButton) {
        this.showMenu.call(this);
      }
    });
    // this.card.addEventListener('dragstart', dragstartHandler);

    this.p = document.createElement("p");
    this.p.innerText = this.state.text;

    this.deleteButton = document.createElement("button");
    this.deleteButton.classList.add("deleteCard");
    this.deleteButton.innerText = "X";
    this.deleteButton.addEventListener("click", () => {
      this.deleteCard.call(this);
    });

    this.card.append(this.p);
    this.card.append(this.deleteButton);

    this.place.append(this.card);
  }

  deleteCard(): void {
    this.card?.remove();
    const i = this.todoList.cardArray.indexOf(this);
    this.todoList.cardArray.splice(i, 1);
  }

  showMenu(): void {
    // Create elements
    const menu = document.createElement("div");
    const menuContainer = document.createElement("div");
    const menuTitle = document.createElement("div");
    const menuDescription = document.createElement("div");
    const commentsInput = document.createElement("input");
    const commentsButton = document.createElement("button");
    const menuComments = document.createElement("div");

    // Add class names
    menu.className = "menu";
    menuContainer.className = "menuContainer";
    menuTitle.className = "menuTitle";
    menuDescription.className = "menuDescription";
    menuComments.className = "menuComments";
    commentsInput.className = "commentsInput comment";
    commentsButton.className = "commentsButton btn-save";

    // Add inner Text
    commentsButton.innerText = "Add";
    commentsInput.placeholder = "Write a comment...";

    // Event listeners
    menuContainer.addEventListener("click", (e: MouseEvent) => {
      if (
        (e.target as HTMLElement).classList.contains("menuContainer") &&
        menuContainer != null
      ) {
        menuContainer.remove();
      }
    });

    commentsButton.addEventListener("click", () => {
      if (commentsInput?.value !== "" && commentsInput != null) {
        this.state.comments?.push(commentsInput.value);
        // this.renderComments();
        commentsInput.value = "";
      }
    });

    // Append
    menu.append(menuTitle);
    menu.append(menuDescription);
    menu.append(commentsInput);
    menu.append(commentsButton);
    menu.append(menuComments);
    menuContainer.append(menu);
    root.append(menuContainer);

    this.editableDescription = new EditableText(
      this.state.description,
      menuDescription,
      this,
      "description",
      "textarea"
    );
    this.editableTitle = new EditableText(
      this.state.text,
      menuTitle,
      this,
      "text",
      "input"
    );

    // this.renderComments();
  }

  // renderComments(): void {
  //   if (this.menuComments instanceof HTMLElement && this.menuComments != null) {
  //     const currentCommentsDOM = Array.from(this.menuComments.childNodes);
  //     currentCommentsDOM.forEach((commentDOM) => {
  //       commentDOM.remove();
  //     });

  //     this.state.comments?.forEach((comment) => {
  //       if (this.menuComments instanceof HTMLElement) {
  //         // eslint-disable-next-line no-new
  //         new Comment(comment, this.menuComments, this);
  //       }
  //     });
  //   }
  // }
}
