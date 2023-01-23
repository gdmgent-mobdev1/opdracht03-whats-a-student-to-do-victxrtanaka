

import { ProjectSection } from "./projectSection.ts";


var self;
export class LoginSignup {
  public mainDiv: any;
  public loginDiv: any;
  public loginHeading: any;
  public formDiv: any;
  public form: any;
  public userName: any;
  public password: any;
  public loginButton: any;
  public signupButton: any;
  public signupDiv: any;
  public signupHeading: any;
  public profileImage: any;
  public fullName: any;
  public emailAddress: any;
  public newUserName: any;
  public newPassword: any;
  public newSignupButton: any;

  constructor(mainDiv) {
    self = this;
    this.mainDiv = mainDiv;
    this.createLoginForm();
  }
  createLoginForm() {
    this.loginDiv = document.createElement("div");
    this.loginDiv.className = "loginDivClass";
    this.mainDiv.appendChild(this.loginDiv);
    this.loginHeading = document.createElement("h1");
    this.loginHeading.innerText = "Login";
    this.loginHeading.style.position = "absolute";
    this.loginHeading.style.left = "16vw";
    this.loginHeading.style.top = "2vh";
    this.loginDiv.appendChild(this.loginHeading);
    this.formDiv = document.createElement("div");
    this.loginDiv.appendChild(this.formDiv);
    this.form = document.createElement("form");
    this.form.className = "formClass";
    this.formDiv.appendChild(this.form);
    this.userName = document.createElement("input");
    this.userName.type = "text";
    this.userName.placeholder = "useremail";
    this.form.appendChild(this.userName);
    this.password = document.createElement("input");
    this.password.type = "password";
    this.password.placeholder = "password";
    this.form.appendChild(this.password);
    this.loginButton = document.createElement("button");
    this.loginButton.id = "loginButtonId";
    this.loginButton.onclick = function () {
      self.login();
      self.loginDiv.remove();
    };
    this.loginButton.innerText = "login";
    this.form.appendChild(this.loginButton);
    this.signupButton = document.createElement("button");
    this.signupButton.id = "signupButtonId";
    this.signupButton.innerText = "signUp";
    this.form.appendChild(this.signupButton);
    this.signupButton.onclick = function () {
      self.loginDiv.remove();
      self.createSignupForm();
    };
  }
  createSignupForm() {
    this.signupDiv = document.createElement("div");
    this.signupDiv.className = "signupDivClass";
    this.signupHeading = document.createElement("h1");
    this.signupHeading.style.position = "relative";
    this.signupHeading.style.left = "15vw";
    this.signupHeading.innerText = "Signup";
    this.signupDiv.appendChild(this.signupHeading);
    this.mainDiv.appendChild(this.signupDiv);
    this.formDiv = document.createElement("div");
    this.signupDiv.appendChild(this.formDiv);
    this.form = document.createElement("form");
    this.form.className = "signupForm";
    this.formDiv.appendChild(this.form);
    this.profileImage = document.createElement("img");
    this.form.appendChild(this.profileImage);
    this.fullName = document.createElement("input");
    this.fullName.type = "text";
    this.fullName.placeholder = "full name";
    this.form.appendChild(this.fullName);
    // <input type="text" placeholder="email address" />;
    this.emailAddress = document.createElement("input");
    this.emailAddress.type = "text";
    this.emailAddress.placeholder = "email address";
    this.form.appendChild(this.emailAddress);
    this.form.appendChild(this.fullName);
    // <input type="text" placeholder="pick a username" />;
    this.newUserName = document.createElement("input");
    this.newUserName.type = "text";
    this.newUserName.placeholder = "pick a user name";
    this.form.appendChild(this.newUserName);
    // <input type="password" id="password" placeholder="set a password" />
    this.newPassword = document.createElement("input");
    this.newPassword.type = "password";
    this.newPassword.id = "newPassword";
    this.newPassword.placeholder = "set a password";
    this.form.appendChild(this.newPassword);
    // <button type="button" onclick="window.location.href='login.html'">
    //   SIGN UP
    // </button>;
    this.newSignupButton = document.createElement("button");
    this.newSignupButton.type = "button";
    this.newSignupButton.id = "newSignupButtonId";
    this.newSignupButton.innerText = "signup";
    this.newSignupButton.onclick = function () {
      self.signupDiv.remove();
      //   self.signInWithGoogle();

      //   console.log(auth);
      console.log("Successfully made an account.");
      self.login();

      //   signInWithRedirect(auth, provider);
      //   console.log(auth);
      //   auth.signInWithPopup(provider);
      // self.signInWithGoogle();

    };
    this.form.appendChild(this.newSignupButton);
  }

  login() {
        console.log("Successfully signed in!");
        new ProjectSection(self.mainDiv);
  }
}
