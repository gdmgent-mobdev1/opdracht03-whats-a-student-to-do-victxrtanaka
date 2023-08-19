import { MyApp } from "../app";

export class Page {

    protected page: HTMLElement;
    protected app: MyApp;

    constructor(id: string, app: MyApp) {
        this.app = app;
        this.page = document.getElementById(id) as HTMLElement;
    }

    public show(){
        this.page.classList.remove("hidden");
    }

    public hide(){
        this.page.classList.add("hidden");
    }

}