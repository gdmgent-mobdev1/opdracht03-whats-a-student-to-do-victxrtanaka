import { MyApp } from "../app";
import { Page } from "./Page";

export class BothPage extends Page {
    private login: HTMLButtonElement;
    private signup: HTMLButtonElement;

    constructor(app: MyApp) {
        super("welkomPage", app);
        this.login = document.getElementById("loginBtn") as HTMLButtonElement;
        this.signup = document.getElementById("signupBtn") as HTMLButtonElement;
    }

    public init(){
        this.login.onclick = () => {
            this.hide();
            this.app.loginPage.show();
        }

        
        this.signup.onclick = () => {
            this.hide();
            this.app.signupPage.show();
        }
    }
    
}