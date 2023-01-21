
import { ProjectSection } from "../sections/projectSection.js";

var divId = "startSceneDiv";
export class StartScene {
  public mainDiv: any;
  public scene: any;

  constructor(mainDiv) {
    console.log("<<<<<<<<<<<<<<<<<<<<<<<");
    this.mainDiv = mainDiv;
    this.scene = new ProjectSection(mainDiv);

  }
}
