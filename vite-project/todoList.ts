
import { StartScene } from "./src/Components/scenes/startScene.js";
declare const window: any;
declare const app: any;
declare global {
  var aboutCompany: string;
  var descriptionText: string;
}

window.addEventListener("load", async function () {
  this.mainDiv = document.getElementById("main");
  {
    this.scene= new StartScene(this.mainDiv);
  }
});
