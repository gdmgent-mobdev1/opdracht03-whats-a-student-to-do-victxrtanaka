import { MyApp } from "../app";
import FireBase from "./Firebase";
import { Page } from "./Page";

export class AccountPage extends Page {
  private backBtn: HTMLElement;
  private logoutBtn: HTMLButtonElement;

  constructor(app: MyApp) {
    super("account", app);
    this.backBtn = document.getElementById("backBtn") as HTMLImageElement;
    this.logoutBtn = document.getElementById("logoutBtn") as HTMLButtonElement;
  }

  public init() {
    this.backBtn.onclick = () => {
      this.hide();
      this.app.homePage.show();
    };

    this.logoutBtn.onclick = () => {
      FireBase.get().signOut(() => {
        this.hide();
        this.app.bothPage.show();
      });
    };
  }

  public show() {
    const user = FireBase.get().user?.displayName;
    const us = document.getElementById("logged-in-user-name");
    if (us) us.innerText = user || "";
    super.show();
  }
}
