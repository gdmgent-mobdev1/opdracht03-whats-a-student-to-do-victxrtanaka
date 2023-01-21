

import { LoginSignup } from "../sections/login-signup.ts";

var divId = "startSceneDiv";
export class StartScene {
  public mainDiv: any;
  public scene: any;

  constructor(mainDiv) {
    console.log("<<<<<<<<<<<<<<<<<<<<<<<");
    this.mainDiv = mainDiv;
    this.scene = new LoginSignup(mainDiv);
  }
}