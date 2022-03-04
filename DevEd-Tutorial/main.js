const dataObj = [
  {
    name: "Employee 1",
    "2021-12": 192.8,
    "2021-11": 204.0,
    "2021-10": 185.0,
    "2021-09": 176.0,
    "2021-08": 176.5,
    "2021-07": 178.0,
    "2021-06": 166.5,
    "2021-05": 149.8,
    "2021-04": 160.0,
    "2021-03": 163.0,
    "2021-02": 94.0,
    "2021-01": 34.0,
  },
  {
    name: "Employee 2",
    "2021-12": 186.0,
    "2021-11": 196.0,
    "2021-10": 170.0,
    "2021-09": 176.0,
    "2021-08": 176.0,
    "2021-07": 176.0,
    "2021-06": 180.0,
    "2021-05": 148.0,
    "2021-04": 160.0,
    "2021-03": 156.0,
    "2021-02": 56.0,
    "2021-01": 32.0,
  },
];

const legend = dataObj.map((employee) => employee.name);
const dates = (obj) => {
  delete obj.name;
  let datesList = [];
  datesList.push(Object.keys(obj));
  return datesList.shift();
};

const hoursWorked = [];

console.log(legend);
console.log(dates(dataObj[0]));

const data = {
  labels: dates(dataObj[0]),
  datasets: [
    {
      label: legend[0],
      data: hoursWorked[0],
      borderColor: "red",
    },
    {
      label: legend[1],
      data: hoursWorked[1],
      borderColor: "blue",
    },
  ],
};

const config = {
  type: "line",
  data: data,
};

let myChart = new Chart(document.getElementById("myChart"), config);
