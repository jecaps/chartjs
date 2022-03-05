const dataObj = {
  "2022-02": [
    {
      project_name: "Project 1",
      "A. Kanz": 11.0,
      "J. Kanz": 0.0,
      "R. Kanz": 8.0,
      Summe: 19.0,
    },
    {
      project_name: "Project 2",
      "A. Kanz": 0.0,
      "J. Kanz": 14.0,
      "R. Kanz": 7.0,
      Summe: 21.0,
    },
    {
      project_name: "Project 5",
      "A. Kanz": 5.0,
      "J. Kanz": 8.0,
      "R. Kanz": 3.0,
      Summe: 16.0,
    },
  ],
  "2022-01": [
    {
      project_name: "Project 1",
      "A. Kanz": 9.0,
      "J. Kanz": 0.0,
      "R. Kanz": 10.0,
      Summe: 21.0,
    },
    {
      project_name: "Project 2",
      "A. Kanz": 0.0,
      "J. Kanz": 14.0,
      "R. Kanz": 7.0,
      Summe: 17.0,
    },
    {
      project_name: "Project 3",
      "A. Kanz": 5.0,
      "J. Kanz": 8.0,
      "R. Kanz": 3.0,
      Summe: 20.0,
    },
  ],
  "2021-12": [
    {
      project_name: "Project 1",
      "A. Kanz": 9.0,
      "J. Kanz": 0.0,
      "R. Kanz": 10.0,
      Summe: 17.0,
    },
    {
      project_name: "Project 2",
      "A. Kanz": 0.0,
      "J. Kanz": 14.0,
      "R. Kanz": 7.0,
      Summe: 15.0,
    },
    {
      project_name: "Project 4",
      "A. Kanz": 5.0,
      "J. Kanz": 8.0,
      "R. Kanz": 3.0,
      Summe: 18.0,
    },
  ],
};

// Legends of the Graph
const createLegend = (data) => {
  let projectsList = [];
  for (let project of data) {
    projectsList.push(project.project_name);
  }
  return projectsList;
};

// y-axis labels
const createYaxisLabels = (data) => {
  let sumList = [];
  for (let project of data) {
    sumList.push(project.Summe);
  }
  return sumList;
};

// x-axis labels
const createXaxisLabels = (data) => {
  return Object.keys(data).reverse();
};

console.log(createLegend(dataObj["2021-12"]));
console.log(createXaxisLabels(dataObj));
console.log(createYaxisLabels(dataObj["2021-12"]));
