import { ProjectSection } from "./projectSection.js";

var self;
var projectDetails = ["name", "Desciption", "date"];
var checkList = ["helllo", "heldslo", "hi"];
export class ProjectDetails {
	public mainDiv: any;
	public data: any;
	public projectDetailDiv: any;
	public projectNameDiv: any;
	public projectDescriptionDiv: any;
	public projectDeadlineDiv: any;
	public checkListDiv: any;
	public addNewTask: any;
	public addNewTaskButton: any;
	public listDiv: any;
	public task: any;
	public deleteTaskButton: any;
	public closeButton: any;
	public saveChangesButton: any;

  constructor(mainDiv, data) {
    self = this;
    this.mainDiv = mainDiv;
    this.data = data;
    this.projectDetailDiv = document.createElement("div");
    this.projectDetailDiv.id = "projectDetailsDivId";
    this.mainDiv.appendChild(this.projectDetailDiv);
    this.createDetails();
  }
  createDetails() {
    console.log("<<<<<<<<<<<<");
    console.log(this.data);
    this.projectNameDiv = document.createElement("div");
    this.projectNameDiv.innerHTML = this.data.projectName;
    this.projectNameDiv.id = "projectNameDivId";
    this.projectDetailDiv.appendChild(this.projectNameDiv);
    this.projectDescriptionDiv = document.createElement("div");
    this.projectDescriptionDiv.innerHTML = this.data.projectDescription;
    this.projectDescriptionDiv.id = "projectDescriptionDivId";
    this.projectDetailDiv.appendChild(this.projectDescriptionDiv);
    this.projectDeadlineDiv = document.createElement("div");
    this.projectDeadlineDiv.innerHTML = this.data.projectDeadLine;
    this.projectDeadlineDiv.id = "projectDeadlineDivId";
    this.projectDetailDiv.appendChild(this.projectDeadlineDiv);
    this.createCheckListSection();
    this.createCloseButton();
    this.createSaveChangesButon();
  }
  createCheckListSection() {
    var position = checkList.length * 10 + 10;
    this.checkListDiv = document.createElement("div");
    this.checkListDiv.id = "checkListDivId1";
    this.projectDetailDiv.appendChild(this.checkListDiv);
    this.addNewTask = document.createElement("input");
    this.addNewTask.id = "addNewTaskId";
    this.addNewTask.placeholder = "Add New Task";
    this.checkListDiv.appendChild(this.addNewTask);
    this.addNewTaskButton = document.createElement("button");
    this.addNewTaskButton.innerHTML = "Add Task";
    this.addNewTaskButton.id = "addNewTaskButtonId";
    this.addNewTaskButton.onclick = function () {
      if (self.addNewTask.value.length != 0) {
        position = checkList.length * 12 + 10;
        checkList.push(self.addNewTask.value);
        self.createTask(self.addNewTask.value, checkList.length, position);
        self.addNewTask.value = "";
      }
    };
    this.checkListDiv.appendChild(this.addNewTaskButton);

    this.listDiv = document.createElement("div");
    this.listDiv.style.height = "" + position + "vh";
    this.listDiv.id = "listDivId";
    this.checkListDiv.appendChild(this.listDiv);
    for (let i = 1; i <= this.data.checkList.length; i++) {
      this.createTask(this.data.checkList[i - 1], i, position);
    }
  }
  createTask(task, i, position) {
    this.task = document.createElement("div");
    this.task.innerHTML = task;
    this.task.id = "task" + i;
    this.task.className = "taskClass";
    this.task.className = "taskClass";
    this.deleteTaskButton = document.createElement("button");
    this.deleteTaskButton.id = i;
    this.deleteTaskButton.className = "deleteTaskButtonClass";
    this.deleteTaskButton.innerHTML = "🚮";
    this.deleteTaskButton.addEventListener("click", self.deleteTask);
    this.task.appendChild(this.deleteTaskButton);
    this.listDiv.appendChild(this.task);
    this.listDiv.style.height = "" + position + "vh";
  }
  deleteTask(e) {
    var id = "task" + e.target.id;
    document.getElementById(id).remove();
  }
  createCloseButton() {
    this.closeButton = document.createElement("button");
    this.closeButton.id = "closeButtonId3";
    this.closeButton.innerHTML = "X";
    this.closeButton.onclick = function () {
      self.projectDetailDiv.remove();
      new ProjectSection(self.mainDiv);
    };
    this.projectDetailDiv.appendChild(this.closeButton);
  }
  createSaveChangesButon() {
    this.saveChangesButton = document.createElement("button");
    this.saveChangesButton.innerHTML = "Save Changes";
    this.saveChangesButton.id = "saveChangesButtonID";
    this.projectDetailDiv.appendChild(this.saveChangesButton);
  }
}