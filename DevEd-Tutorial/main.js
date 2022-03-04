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

const legend = (arr) => {
  return arr.map((employee) => employee.name);
};
const dates = (obj) => {
  let newObj = { ...obj };
  delete newObj.name;
  let datesList = [];
  datesList.push(Object.keys(newObj));
  return datesList.shift();
};
const hoursWorked = (arr) => {
  let hoursWorkedList = [];
  for (let employee of arr) {
    let newEmployee = { ...employee };
    delete newEmployee.name;
    let employeeHoursWorkedList = [];
    employeeHoursWorkedList.push(Object.values(newEmployee));
    hoursWorkedList.push(employeeHoursWorkedList);
  }
  return hoursWorkedList;
};

const data = {
  labels: dates(dataObj[0]),
  datasets: [
    {
      label: legend(dataObj)[0],
      data: hoursWorked(dataObj)[0],
      borderColor: "red",
    },
    {
      label: legend(dataObj)[1],
      data: hoursWorked(dataObj)[1],
      borderColor: "blue",
    },
  ],
};
console.log(legend(dataObj));
console.log(dates(dataObj[0]));
console.log(hoursWorked(dataObj));
