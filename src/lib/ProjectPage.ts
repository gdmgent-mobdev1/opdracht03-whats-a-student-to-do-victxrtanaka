import { Card, TodoList } from "../Components";
import { MyApp } from "../app";
import { State, root } from ".";
import { Page } from "./Page";
import FireBase from "./Firebase";
import { HomePage } from "./HomePage";
import { collection, getDocs, onSnapshot, addDoc } from "firebase/firestore";

export class ProjectPage extends Page {
  private firebaseInstance: any;
  private addTodoListInput: HTMLInputElement;
  private addTodoListButton: HTMLElement;
  private backBtn: HTMLElement;
  private colLists: any;
  private snapshotUnsubscribe: any | null = null;

  constructor(app: MyApp) {
    super("projectPage", app);

    this.firebaseInstance = FireBase.get();
    this.backBtn = document.getElementById("backProjectBtn") as HTMLElement;
    this.addTodoListInput = document.getElementById(
      "addTodoListInput"
    ) as HTMLInputElement;
    this.addTodoListButton = document.getElementById(
      "addTodoListButton"
    ) as HTMLElement;
    this.colLists = collection(this.firebaseInstance.fireStoreDb, "lists");
    this.addTodoListButton.addEventListener(
      "click",
      this.onAddTodoListButtonClick.bind(this)
      
    )
    this.backBtn.addEventListener("click", this.gobackonClick.bind(this));;

    // onSnapshot(this.colLists, this.onCollectionSnapshot.bind(this));
    // console.log("onSnapshot is checking to the List collection");
  }
  show(): void {
    super.show();
    if (this.snapshotUnsubscribe === null) {
      this.snapshotUnsubscribe = onSnapshot(
        this.colLists,
        this.onCollectionSnapshot.bind(this)
      );
      console.log("onSnapshot is now listening to the List collection");
    }
  }

  hide(): void {
    super.hide();
    if (this.snapshotUnsubscribe !== null) {
      this.snapshotUnsubscribe(); // Unsubscribe the snapshot listener
      this.snapshotUnsubscribe = null;
      console.log("onSnapshot is now stopped");
    }
  }

  // onclick function

  gobackonClick(): void {
    const todoListItems = document.querySelectorAll(".todoList");
    todoListItems.forEach((item) => {
      item.remove();
    });
    this.app.homePage.show();
    this.hide();
  }

  async addTodoListFirebase(title: string): Promise<string> {
    const docRef = await addDoc(this.colLists, {
      title: title,
    });
    console.log(
      "New List doc made in the List collection with ID: ",
      docRef.id
    );
    return docRef.id;
  }

  async onAddTodoListButtonClick(): Promise<void> {
    console.log("addTodoListButton clicked");
    if (this.addTodoListInput.value.trim() !== "") {
      await this.addTodoListFirebase(this.addTodoListInput.value);
      this.addTodoListInput.value = "";
    }
  }

  // live on snapchot functions

  async onCollectionSnapshot(snapshot: any): Promise<void> {
    snapshot.docChanges().forEach(async (change: any) => {
      if (change.type === "added") {
        const cards = await this.getCards(change.doc.id);
        console.log(
          "maps all cards docs to the state object and puts it in array"
        );
        console.log(cards);
        const id = change.doc.id;
        const title = change.doc.data().title;
        await this.createTodoList(id, cards, title);
        console.log(
          "creates the List with in it all the objects of cards of the array"
        );
      }
      if (change.type === "modified") {
        // rerendering
      }
      if (change.type === "removed") {
        const itemId = change.doc.id;
        const elementToRemove = document.getElementById(itemId); // Use getElementById
        if (elementToRemove) {
          elementToRemove.remove();
        }
      }
    });
  }

  async getCards(id: string): Promise<State[]> {
    const subColCards = collection(
      this.firebaseInstance.fireStoreDb,
      `lists/${id}/cards`
    );
    console.log("gets cards collection of the specific list");
    const allCards = await getDocs(subColCards);
    console.log("gets all cards docs");
    console.log(allCards);
    return allCards.docs.map((d) => ({
      id: d.id,
      title: d.data().title,
      description: d.data().description,
      comments: d.data().comments,
      parentId: d.data().parentId,
    }));
  }

  async createTodoList(
    id: string,
    cards: State[],
    title: string
  ): Promise<void> {
    let newList: TodoList = new TodoList(root, title, id);

    cards.forEach((card: State) => {
      new Card(card.title, newList.div as HTMLElement, newList, card.id, id);
      console.log("make for each card in the array detected a card div");
    });
  }
}
