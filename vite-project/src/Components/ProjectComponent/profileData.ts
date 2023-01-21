export class ProfileData {
  public projectName: any;
  public projectDescription: any;
  public projectDeadLine: any;
  public checkList: any;

  constructor(projectName, projectDescription, projectDeadLine, checkList) {
    (this.projectName = projectName),
      (this.projectDescription = projectDescription),
      (this.projectDeadLine = projectDeadLine),
      (this.checkList = checkList);
  }
}

export function setDataToStorage(profileData) {
  const existingData = getDatafromStorage()
    ? jsonToArray(getDatafromStorage())
    : [];
  profileData ? dataPushToArray(existingData, profileData) : null;
  //   existingData.sort((a, b) => {
  //     if (a.levelNumber > b.levelNumber) {
  //       return 1;
  //     } else {
  //       return -1;
  //     }
  //   });
  const data = JSON.stringify(existingData);
  if (data) {
    localStorage.setItem("Profile", data);
  }
}
function jsonToArray(json) {
  var data = [];
  for (var i in json) {
    data.push(json[i]);
  }

  return data;
}
function dataPushToArray(jsonData, profileData) {
  var dataNotExist = true;
  jsonData.forEach((data) => {
    console.log(parseInt(data.levelNumber));
    if (parseInt(data.levelNumber) == parseInt(profileData.levelNumber)) {
      dataNotExist = false;
      data.levelScore < profileData.levelScore
        ? (data.levelScore = profileData.levelScore)
        : null;
      data.levelStar < profileData.levelStar
        ? (data.levelStar = profileData.levelStar)
        : null;
    }
  });
  dataNotExist ? jsonData.push(profileData) : null;
  return jsonData;
}
export function getDatafromStorage() {
  const data = JSON.parse(localStorage.getItem("Profile"));
  return data;
}
