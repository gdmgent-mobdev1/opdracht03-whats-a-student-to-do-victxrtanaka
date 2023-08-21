import  FireBase  from "./lib/Firebase";
import { BothPage } from "./lib/Bothpage";
import { LoginPage } from "./lib/LoginPage";
import { SignupPage } from "./lib/SignupPage";
import { ProjectPage } from "./lib/ProjectPage";
import { HomePage } from "./lib/HomePage";
import { AccountPage } from "./lib/AccountPage";
import { root } from "./lib";
// import localstorage from "./Lib/localStorage";
// -------------main------------

export class MyApp {
  public firebase: FireBase;
  public bothPage: BothPage;
  public loginPage: LoginPage;
  public signupPage: SignupPage;
  public projectPage: ProjectPage;
  public homePage: HomePage;
  public accountPage: AccountPage;

  constructor() {
    this.firebase = new FireBase();
    this.loginPage = new LoginPage(this);
    this.signupPage = new SignupPage(this);
    this.bothPage = new BothPage(this);
    this.projectPage = new ProjectPage(this);
    this.homePage = new HomePage(this);
    this.accountPage = new AccountPage(this);
    

    this.homePage.init();
    this.bothPage.init();
    this.accountPage.init();
    this.loginPage.init();
    this.signupPage.init();  
  }}


const app = () => {
  new MyApp();
};

app();
