import { MyApp } from "../app";
import { Page } from "./Page";

export class HomePage extends Page {
    private project: HTMLButtonElement;
    private account: HTMLButtonElement;

    constructor(app: MyApp) {
        super("homePage", app);
        this.project = document.getElementById("projectBtn") as HTMLButtonElement;
        this.account = document.getElementById("accountBtn") as HTMLButtonElement;
    }

    public init(){
        this.project.onclick = () => {
            this.hide();
            this.app.projectPage.show();
            
        }

        
        this.account.onclick = () => {
            this.hide();
            this.app.accountPage.show();
        }
    }
    
}