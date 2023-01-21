import { ProjectDetails } from "../sections/projectDetails.js";
import { ProjectSection } from "../sections/projectSection.js";
import { getDatafromStorage } from "./profileData.js";

var self;
var projectList = ["heello", "hlo", "how", "when"];
var data;
export class ViewProject {
  public mainDiv: any;
  public projectListDiv: any;
  public listDiv: any;
  public listProjectDiv: any;
  public deleteProjectButton: any;
  public closeButton: any;

  constructor(mainDiv) {
    this.mainDiv = mainDiv;
    self = this;
    this.createProjectList();
  }
  createProjectList() {
    data = getDatafromStorage();
    console.log(data.length);
    var position = projectList.length * 12 + 10;
    this.projectListDiv = document.createElement("div");
    this.projectListDiv.id = "projectListDivId";
    this.projectListDiv.style.height = "" + position + "vh";
    this.mainDiv.appendChild(this.projectListDiv);
    this.createList();
  }
  createList() {
    for (let i = 1; i <= data.length; i++) {
      this.listDiv = document.createElement("div");
      this.listDiv.id = "listDiv1" + i;
      this.listDiv.className = "listDiv1ID";
      this.projectListDiv.appendChild(this.listDiv);
      this.listProjectDiv = document.createElement("div");
      this.listProjectDiv.id = i;
      this.listProjectDiv.className = "listDivClass";
      this.listProjectDiv.innerHTML = data[i - 1].projectName;
      this.listDiv.appendChild(this.listProjectDiv);
      this.listProjectDiv.addEventListener("click", self.projectDetails);
      this.deleteProjectButton = document.createElement("button");
      this.deleteProjectButton.id = i;
      this.deleteProjectButton.className = "deleteProjectButtonClass";
      this.deleteProjectButton.innerHTML = "🚮";
      this.deleteProjectButton.addEventListener("click", self.deleteProject);
      this.listDiv.appendChild(this.deleteProjectButton);
    }
    this.createCloseButton();
  }
  projectDetails(e) {
    console.log(e.target.id - 1);
    self.projectListDiv.remove();
    new ProjectDetails(self.mainDiv, data[e.target.id - 1]);
  }
  createCloseButton() {
    this.closeButton = document.createElement("button");
    this.closeButton.id = "closeButton2";
    this.closeButton.innerHTML = "X";
    this.projectListDiv.appendChild(this.closeButton);
    this.closeButton.onclick = function () {
      self.deleteProjectListDiv();
    };
  }
  deleteProjectListDiv() {
    self.projectListDiv.remove();
    new ProjectSection(self.mainDiv);
  }
  deleteProject(e) {
    var id = "listDiv1" + e.target.id;
    document.getElementById(id).remove();
  }
}
