import { MyApp } from "../app";
import { Page } from "./Page";

export class AddProject extends Page{
  private goBack : HTMLImageElement;
  private btnNewProject : HTMLButtonElement;

  constructor(app: MyApp){
    super("addProject", app);
    this.goBack = document.getElementById("goBack") as HTMLImageElement;
    this.btnNewProject = document.getElementById("btnNewProject") as HTMLButtonElement;
 }

public init(){
  this.goBack.onclick = () => {
    this.hide();
    this.app.homePage.show();
  }

  this.btnNewProject.onclick = () => {
    this.hide();
    this.app.homePage.show();
  }
}

}