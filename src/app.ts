import { FireBase } from "./lib/Firebase";
import { BothPage } from "./lib/Bothpage";
import { LoginPage } from "./lib/LoginPage";
import { SignupPage } from "./lib/SignupPage";
import { HomePage } from "./lib/HomePage";
import { AddProject } from "./lib/AddProject";
import { DetailPageProject } from "./lib/DetailPageProject";
import TodoList from "./Components/TodoList";
import { root } from "./lib";
// import localstorage from "./Lib/localStorage";
// -------------main------------

export class MyApp {
  public firebase: FireBase;
  public bothPage: BothPage;
  public loginPage: LoginPage;
  public signupPage: SignupPage;
  public homePage: HomePage;
  public addProject: AddProject;
  public detailPageProject: DetailPageProject;

  constructor() {
    this.firebase = new FireBase();
    this.loginPage = new LoginPage(this);
    this.signupPage = new SignupPage(this);
    this.bothPage = new BothPage(this);
    this.homePage = new HomePage(this);
    this.addProject = new AddProject(this);
    this.detailPageProject = new DetailPageProject(this);

    this.bothPage.init();
    this.loginPage.init();
    this.signupPage.init();
    this.homePage.init();
    this.addProject.init();
    this.detailPageProject.init();
  }
}

const addTodoListInput = document.getElementById(
  "addTodoListInput"
) as HTMLInputElement;
const addTodoListButton = document.getElementById(
  "addTodoListButton"
) as HTMLElement;

addTodoListButton.addEventListener("click", () => {
  if (addTodoListInput.value.trim() !== "") {
    new TodoList(
      document.getElementById("app") as HTMLElement,
      addTodoListInput.value,
      new FireBase(),
      new DetailPageProject(new MyApp())
    );
    addTodoListInput.value = "";
  }
});

const app = () => {
  new MyApp();
};

app();
