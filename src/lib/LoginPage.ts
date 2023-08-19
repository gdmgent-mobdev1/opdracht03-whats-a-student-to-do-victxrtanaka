import { MyApp } from "../app";
import { FireBase } from "./Firebase";
import { Page } from "./Page";
import { HomePage } from "./HomePage";

export class LoginPage extends Page {
    private loginChatBtn: HTMLButtonElement;
    private accountSignup: HTMLButtonElement;
    private googleLogin: HTMLButtonElement;
    private emailLogin: HTMLInputElement;
    private passwordLogin: HTMLInputElement;

    constructor(app: MyApp) {
        super("login", app);
        this.loginChatBtn = document.getElementById("loginChatBtn") as HTMLButtonElement;
        this.accountSignup = document.getElementById("accountSignup") as HTMLButtonElement;
        this.googleLogin = document.getElementById("googleLogin") as HTMLButtonElement;
        this.emailLogin = document.getElementById("emailLogin") as HTMLInputElement;
        this.passwordLogin = document.getElementById("passwordLogin") as HTMLInputElement;
    }

    public init(){
        this.emailLogin.value = "";
        this.passwordLogin.value = "";
        this.loginChatBtn.onclick = () => {
            const email = this.emailLogin.value;
            const pswd = this.passwordLogin.value;
            FireBase.get().signinEmailPasswoord(email, pswd, () => {
                this.hide();
                this.app.homePage.show()
                console.log("homepage show ");
            });
        }

        this.accountSignup.onclick = () => {
            this.hide();
            this.app.signupPage.show();
        }

        this.googleLogin.onclick = () => {
            FireBase.get().signInGoogle(() => {

                this.hide();
                this.app.homePage.show();
                console.log("homepage show ");

            });
        }  
    }
}