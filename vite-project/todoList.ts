
import { StartScene } from "./src/Components/scenes/startScene.ts";
declare const window: any;
declare const app: any;


window.addEventListener("load", async function () {
  this.mainDiv = document.getElementById("main");
  {
    this.scene= new StartScene(this.mainDiv);
  }
});
