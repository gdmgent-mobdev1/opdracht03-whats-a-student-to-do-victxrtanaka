import { MyApp } from "../app";
import { Page } from "./Page";

const projects = [
  { name: 'Project mob dev', description: 'Examen taak' },

]

export class HomePage extends Page {
  private addTodoListInput : HTMLInputElement;
  private addTodoListButton : HTMLButtonElement;
  private accountImg : HTMLImageElement;
  private projectCard : HTMLElement;
  private add : HTMLImageElement;
  private projects : HTMLElement;

  constructor(app: MyApp) {
    super("homePage", app);
    this.addTodoListInput = document.getElementById("addTodoListInput") as HTMLInputElement;
    this.addTodoListButton = document.getElementById("addTodoListButton") as HTMLButtonElement;
    this.accountImg = document.getElementById("accountImg") as HTMLImageElement;
    this.projectCard = document.getElementById("projectCard") as HTMLElement;
    this.add = document.getElementById("add") as HTMLImageElement;
    this.projects = document.getElementById("projects") as HTMLElement;
  }

  private createProject(data: any) : HTMLElement {

    const projectMain = document.createElement('div');
    projectMain.setAttribute('id', 'projectCard');

    const img = document.createElement('img');
    // img.src = "./src/img/project.jpg";

    const textCardDiv = document.createElement('div');
    textCardDiv.setAttribute('id', 'textCardDiv');
    const title = document.createElement('h3');
    const description = document.createElement('p');
    title.innerHTML = data.name;
    description.innerHTML = data.description;

    textCardDiv.append(title, description);
    projectMain.append(img, textCardDiv);
    projectMain.onclick = () => {
      this.hide();
      this.app.detailPageProject.open(data);
    }
    return projectMain;
  }

  public init(){

    this.add.onclick = () => {
      this.hide();
      this.app.addProject.show();

    }
    
    // this.accountImg.onclick = () => {
    //   this.hide();
    //   this.app.accountScherm.show();
    // }

    projects.forEach(project => {
      const element = this.createProject(project);
      this.projects.append(element);
    })
  }
}