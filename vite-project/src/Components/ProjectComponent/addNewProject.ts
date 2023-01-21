import { StartScene } from "../scenes/startScene.js";
import { ProjectSection } from "../sections/projectSection.js";
import { ProfileData, setDataToStorage } from "./profileData.js";

var self;
var position = 60;
var taskId = 1;
var checkList = [];
export class AddNewProject {
  public mainDiv: any;
  public addNewProjectDiv: any;
  public addNewProjectHeading: any;
  public projectName: any;
  public projectDescription: any;
  public projectDeadline: any;
  public checkListDiv: any;
  public checkListForm: any;
  public task: any;
  public addTaskButton: any;
  public unOrderList: any;
  public todoList: any;
  public listTask: any;
  public deleteTaskButton: any;
  public closeButton: any;
  public submitButton: any;

  constructor(mainDiv) {
    self = this;
    this.mainDiv = mainDiv;
    this.createForm();
  }
  createForm() {
    this.addNewProjectDiv = document.createElement("div");
    this.addNewProjectDiv.id = "addNewProjectDivId";
    this.mainDiv.appendChild(this.addNewProjectDiv);
    this.addNewProjectHeading = document.createElement("h1");
    this.addNewProjectHeading.innerHTML = "Add New Project";
    this.addNewProjectHeading.id = "addNewProjectHeadingID";
    this.addNewProjectDiv.appendChild(this.addNewProjectHeading);
    this.projectName = document.createElement("input");
    this.projectName.placeholder = "Enter Project Name";
    this.projectName.id = "newProjectNameID";
    this.addNewProjectDiv.appendChild(this.projectName);
    this.projectDescription = document.createElement("textarea");
    this.projectDescription.placeholder = "Enter Description";
    this.projectDescription.id = "newProjectDescriptionId";
    this.addNewProjectDiv.appendChild(this.projectDescription);
    this.projectDeadline = document.createElement("input");
    this.projectDeadline.placeholder = "Enter Deadline";
    this.projectDeadline.id = "newProjectDeadlineId";
    this.projectDeadline.type = "Date";
    this.addNewProjectDiv.appendChild(this.projectDeadline);
    this.createCheckList();
    this.createCloseButton();
    this.createSubmitButton();
  }
  createCheckList() {
    this.checkListDiv = document.createElement("div");
    this.checkListDiv.id = "checkListDivId";
    this.addNewProjectDiv.appendChild(this.checkListDiv);
    // <form>
    this.checkListForm = document.createElement("div");
    this.checkListDiv.appendChild(this.checkListForm);
    // <input class="todo-input" type="text" placeholder="Add a task."></input>
    this.task = document.createElement("input");
    this.checkListForm.appendChild(this.task);
    this.task.id = "newTaskId";
    this.task.placeholder = "Add Task";
    // <button class="todo-btn" type="submit">I Got This!</button>
    this.addTaskButton = document.createElement("button");
    this.addTaskButton.id = "addTaskButtonId";
    this.addTaskButton.innerText = "Add Task";
    this.addTaskButton.onclick = function () {
      // console.log(self.task.value);
      position = position + taskId * 3.5;
      checkList.push(self.task.value);
      self.createTaskList(self.task.value);
      self.task.value = "";
    };
    this.checkListForm.appendChild(this.addTaskButton);
    // <div id="myUnOrdList"></div>
    this.unOrderList = document.createElement("div");
    this.unOrderList.id = "unOrderListId";
    console.log(">>>>>>>>>>.");
    console.log(position);
    this.unOrderList.style.height = "" + position + "vh";
    this.checkListDiv.appendChild(this.unOrderList);
    // <ul class="todo-list">
    this.todoList = document.createElement("ul");
    this.todoList.style.height = "" + position + "vh";
    this.todoList.className = "todoListClass";
    this.unOrderList.appendChild(this.todoList);
  }
  createTaskList(task) {
    if (task.length != 0) {
      taskId++;
      console.log(task);
      this.unOrderList.style.height = "" + position + "vh";
      this.todoList.style.height = "" + position + "vh";
      this.listTask = document.createElement("div");
      this.listTask.id = "listTask" + taskId;
      this.listTask.className = "listTaskClass";
      this.listTask.innerText = task;
      this.todoList.appendChild(this.listTask);
      // this.checkTaskButton = document.createElement("button");
      // this.checkTaskButton.id = "checkedTaskButtonId";
      // this.checkTaskButton.addEventListener("click", self.taskDone);
      // this.checkTaskButton.innerHTML = "✓";
      // this.listTask.appendChild(this.checkTaskButton);
      this.deleteTaskButton = document.createElement("button");
      this.deleteTaskButton.className = "deleteTaskButtonId";
      this.deleteTaskButton.id = taskId;
      this.deleteTaskButton.innerText = "🚮";
      this.deleteTaskButton.addEventListener("click", self.deleteTask);
      this.listTask.appendChild(this.deleteTaskButton);
    } else {
    }
  }
  // taskDone() {
  //   console.log("task done");
  // }
  deleteTask(e) {
    console.log(self.unOrderList.style.height);
    var id = "listTask" + e.target.id;
    console.log(id);
    document.getElementById(id).remove();
  }
  createCloseButton() {
    this.closeButton = document.createElement("button");
    this.closeButton.id = "closeButton1ID";
    this.closeButton.innerHTML = "X";
    this.closeButton.onclick = function () {
      self.addNewProjectDiv.remove();
      new ProjectSection(self.mainDiv);
    };
    this.addNewProjectDiv.appendChild(this.closeButton);
  }
  createSubmitButton() {
    this.submitButton = document.createElement("button");
    this.submitButton.id = "submitButton1ID";
    this.submitButton.innerHTML = "Save";
    this.addNewProjectDiv.appendChild(this.submitButton);
    this.submitButton.onclick = function () {
      setDataToStorage(
        new ProfileData(
          self.projectName.value,
          self.projectDescription.value,
          self.projectDeadline.value,
          checkList
        )
      );
      self.addNewProjectDiv.remove();
      new ProjectSection(self.mainDiv);
    };
  }
}
