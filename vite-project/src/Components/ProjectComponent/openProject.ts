import { CreateForm } from "../Elements/createForm.js";
import { ProjectSection } from "../sections/projectSection.js";
import { ViewProjects } from "./viewProjects.js";

var projectDetails = ["Name", "description", "DeadLine", "CheckList"];
var checkList = ["helo", "hi", "huu"];
var position;
var self;
export class OpenProject {
  public mainDiv: any;
  public projectDiv: any;
  public projectHeading: any;
  public projectDetailDiv: any;
  public descriptionHeading: any;
  public descriptionDiv: any;
  public deadlineHeading: any;
  public deadLineDiv: any;
  public checklistHeading: any;
  public checkListSectionDiv: any;
  public addNewTask: any;
  public addNewTaskButton: any;
  public taskDiv: any;
  public newtaskDiv: any;
  public closeButton: any;

  constructor(id, mainDiv) {
    self = this;
    this.mainDiv = mainDiv;
    this.projectDiv = document.createElement("div");
    this.projectDiv.style.zIndex = "1";
    this.projectDiv.style.backgroundColor = "Orange";
    this.projectDiv.style.height = "100vh";
    this.projectDiv.style.width = "100vw";
    this.projectDiv.id = "projectDivId";
    this.mainDiv.appendChild(this.projectDiv);
    this.createProjectHeading();
    this.createProjectDetails();
    this.createCloseButton();
  }
  createProjectHeading() {
    this.projectHeading = document.createElement("h1");
    this.projectHeading.style.position = "absolute";
    this.projectHeading.style.top = "4vh";
    this.projectHeading.style.left = "45vw";
    this.projectHeading.innerText = projectDetails[0];
    this.projectDiv.appendChild(this.projectHeading);
  }
  createProjectDetails() {
    this.projectDetailDiv = document.createElement("div");
    this.projectDetailDiv.style.position = "absolute";
    this.projectDetailDiv.style.height = "90vh";
    this.projectDetailDiv.style.top = "10vh";
    this.projectDetailDiv.style.left = "6vw";
    this.projectDetailDiv.style.overflowY = "scroll";
    this.projectDetailDiv.style.backgroundColor = "aliceblue";
    this.projectDetailDiv.style.width = "90vw";
    this.projectDiv.appendChild(this.projectDetailDiv);
    this.createDescriptionSection();
    this.createDeadlineSection();
    this.createChecklistSection();
  }
  createDescriptionSection() {
    this.descriptionHeading = document.createElement("h2");
    this.descriptionHeading.innerText = "Description =>";
    this.descriptionHeading.style.position = "absolute";
    this.descriptionHeading.style.top = "10vh";
    this.descriptionHeading.style.left = "4vw";
    this.projectDetailDiv.appendChild(this.descriptionHeading);
    this.descriptionDiv = document.createElement("div");
    this.descriptionDiv.style.position = "absolute";
    this.descriptionDiv.style.backgroundColor = "green";
    this.descriptionDiv.style.top = "4vh";
    this.descriptionDiv.style.left = "25vw";
    this.descriptionDiv.style.width = "60vw";
    this.descriptionDiv.style.height = "20vh";
    this.descriptionDiv.innerText = projectDetails[1];
    this.projectDetailDiv.appendChild(this.descriptionDiv);
  }
  createDeadlineSection() {
    this.deadlineHeading = document.createElement("h2");
    this.deadlineHeading.innerText = "Project DeadLine =>";
    this.deadlineHeading.style.position = "absolute";
    this.deadlineHeading.style.top = "31vh";
    this.deadlineHeading.style.left = "4vw";
    this.projectDetailDiv.appendChild(this.deadlineHeading);
    this.deadLineDiv = document.createElement("div");
    this.deadLineDiv.style.position = "absolute";
    this.deadLineDiv.style.backgroundColor = "green";
    this.deadLineDiv.style.top = "30vh";
    this.deadLineDiv.style.left = "25vw";
    this.deadLineDiv.style.width = "60vw";
    this.deadLineDiv.style.height = "6vh";
    this.deadLineDiv.innerText = projectDetails[1];
    this.projectDetailDiv.appendChild(this.deadLineDiv);
  }
  createChecklistSection() {
    this.checklistHeading = document.createElement("h2");
    this.checklistHeading.innerText = "CheckList";
    this.checklistHeading.style.position = "absolute";
    // this.checklistHeading.style.backgroundColor = "green";
    this.checklistHeading.style.top = "40vh";
    this.checklistHeading.style.left = "40vw";
    this.checklistHeading.style.width = "10vw";
    this.checklistHeading.style.height = "6vh";
    this.projectDetailDiv.appendChild(this.checklistHeading);
    this.checkListSectionDiv = document.createElement("div");
    this.checkListSectionDiv.style.position = "absolute";
    this.checkListSectionDiv.style.top = "50vh";
    this.checkListSectionDiv.style.left = "6vw";
    this.checkListSectionDiv.style.width = "80vw";
    this.checkListSectionDiv.style.height = "20vh";
    this.checkListSectionDiv.style.backgroundColor = "purple";
    this.projectDetailDiv.appendChild(this.checkListSectionDiv);
    this.listTasks();
  }
  listTasks() {
    this.addNewTask = document.createElement("input");
    this.addNewTask.style.position = "absolute";
    this.addNewTask.placeholder = "Add New Tasks";
    this.addNewTask.id = "addNewTaskId";
    this.addNewTask.style.height = "12vh";
    this.addNewTask.style.width = "35vw";
    this.addNewTask.style.top = "4vh";
    this.addNewTask.style.left = "8vw";
    this.checkListSectionDiv.appendChild(this.addNewTask);
    this.addNewTaskButton = document.createElement("button");
    this.addNewTaskButton.style.position = "absolute";
    this.addNewTaskButton.innerText = "Add Task";
    this.addNewTaskButton.style.height = "12vh";
    this.addNewTaskButton.style.width = "10vw";
    this.addNewTaskButton.style.top = "4vh";
    this.addNewTaskButton.style.left = "55vw";
    this.addNewTaskButton.onclick = function () {
      self.addTask(self.addNewTask.value);
      self.addNewTask.value = "";
    };
    this.checkListSectionDiv.appendChild(this.addNewTaskButton);
    this.listTodo();
  }
  listTodo() {
    for (let i = 0; i < checkList.length; i++) {
      position = i * 15 + 20;
      this.taskDiv = document.createElement("div");
      this.taskDiv.style.position = "absolute";
      this.taskDiv.style.height = "10vh";
      this.taskDiv.style.width = "70vw";
      this.taskDiv.style.backgroundColor = "yellow";
      this.taskDiv.style.top = "" + position + "vh";
      position = position + 20;
      this.checkListSectionDiv.style.height = "" + position + "vh";
      this.taskDiv.style.left = "4vw";
      this.taskDiv.innerText = checkList[i];
      this.checkListSectionDiv.appendChild(this.taskDiv);
    }
  }
  addTask(task) {
    if (task.length != 0) {
      position = checkList.length * 15 + 20;
      checkList.push(task);

      this.newtaskDiv = document.createElement("div");
      this.newtaskDiv.style.position = "absolute";
      this.newtaskDiv.style.height = "10vh";
      this.newtaskDiv.style.width = "70vw";
      this.newtaskDiv.style.backgroundColor = "yellow";
      this.newtaskDiv.style.top = "" + position + "vh";
      position = position + 20;
      this.checkListSectionDiv.style.height = "" + position + "vh";
      this.newtaskDiv.style.left = "4vw";
      this.newtaskDiv.innerText = checkList[checkList.length - 1];
      this.checkListSectionDiv.appendChild(this.newtaskDiv);
    }
  }
  createCloseButton() {
    this.closeButton = document.createElement("button");
    this.closeButton.style.position = "sticky";
    this.closeButton.style.top = "4vh";
    this.closeButton.style.left = "91vw";
    this.closeButton.style.height = "4vh";
    this.closeButton.style.width = "4vw";
    this.closeButton.style.borderRadius = "4vw";
    this.closeButton.innerText = "X";
    this.closeButton.onclick = function () {
      self.projectDiv.remove();
      console.log("heelo");
      new ProjectSection(self.mainDiv);
    };
    this.projectDiv.appendChild(this.closeButton);
  }
}
