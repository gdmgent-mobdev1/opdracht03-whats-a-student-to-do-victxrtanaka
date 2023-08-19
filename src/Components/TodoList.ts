// import { dragoverHandler, dropHandler } from '../Lib/dragAndDrop';
import { FireBase } from '../lib/Firebase';
import { DetailPageProject } from '../lib/DetailPageProject';
// eslint-disable-next-line import/no-cycle
import Card from './Card';

export default class TodoList {
  place: HTMLElement;
  title: string;
  cardArray: Card[];
  input?: HTMLInputElement ;
  div?: HTMLDivElement ;
  h2?: HTMLHeadingElement ;
  button?: HTMLButtonElement ;
  todoListElement?: string | HTMLElement ;
  public list : HTMLElement;

  constructor(place: HTMLElement, title = 'to-do list', private  firebase: FireBase, private project: DetailPageProject) {
    this.cardArray = [];
    this.list = document.getElementById("list") as HTMLElement;
    this.place = place;
    this.title = title;
    this.render();
  }

  async addToDo(): Promise<void> {
    if (this.input instanceof HTMLInputElement && this.list instanceof HTMLElement) {
      const text = this.input.value;
      const projectId = this.firebase.addProject(text, this.project.name, this.title);
      this.cardArray.push(new Card(text, this.list, this));
    }
  }

  render(): void {
    this.createToDoListElement();
    if (this.todoListElement instanceof HTMLElement) {
      // this.todoListElement.addEventListener('drop', dropHandler);
      // this.todoListElement.addEventListener('dragover', dragoverHandler);
      this.place.append(this.todoListElement);
    }
  }

  // todoListElement(todoListElement: any) {
  //   throw new Error("Method not implemented.");
  // }

  createToDoListElement(): void {
    // Create elements
    this.h2 = document.createElement('h2');
    this.h2.innerText = this.title;
    this.input = document.createElement('input');
    this.input.classList.add('comment');
    this.button = document.createElement('button');
    this.button.innerText = 'Add';
    this.button.classList.add('btn-save');
    this.button.id = 'to-do-list-button';
    this.div = document.createElement('div');
    this.todoListElement = document.createElement('div');
    
    // Add Event listener
    this.button.addEventListener('click', () => {
      if ((this.input !== null) && this.input?.value !== '') {
        this.addToDo.call(this);
        this.input!.value = '';
      }
    });

    // Append elements to the to-do list element
    this.todoListElement.append(this.h2);
    this.todoListElement.append(this.input);
    this.todoListElement.append(this.button);
    this.todoListElement.append(this.div);
    this.todoListElement.classList.add('todoList');
    this.list.append(this.todoListElement);

  }
}