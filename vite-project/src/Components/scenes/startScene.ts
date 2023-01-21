
import { ProjectSection } from "../sections/projectSection.ts";

var divId = "startSceneDiv";
export class StartScene {
  public mainDiv: any;
  public scene: any;

  constructor(mainDiv) {
    console.log("start");
    this.mainDiv = mainDiv;
    this.scene = new ProjectSection(mainDiv);

  }
}
