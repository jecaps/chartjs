const ctx = document.getElementById("myChart").getContext("2d");

// Gradient fill
let gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgba(15, 163, 177,1");
gradient.addColorStop(1, "rgba(249, 0, 147,0.3)");

const dataObj = [
  {
    name: "Andreas Kanz",
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
    name: "Jerika Kanz",
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

// legends of the graph
const legend = (arr) => {
  return arr.map((employee) => employee.name);
};

// labels
const dates = (obj) => {
  let newObj = { ...obj };
  delete newObj.name;
  return Object.keys(newObj).reverse();
};

// points in the graph
const hoursWorked = (emp) => {
  let newEmployee = { ...emp };
  delete newEmployee.name;
  return Object.values(newEmployee).reverse();
};

const data = {
  labels: dates(dataObj[0]),
  datasets: [
    {
      label: legend(dataObj)[0],
      data: hoursWorked(dataObj[0]),
      borderColor: "rgba(249, 0, 147, 0.7)",
      // backgroundColor: "rgba(249, 0, 147, 0.5)",
      backgroundColor: gradient,
      borderWidth: 1,
      hoverBorderWidth: 2,
      fill: false,
    },
    {
      label: legend(dataObj)[1],
      data: hoursWorked(dataObj[1]),
      borderColor: "rgba(15, 163, 177, 0.7)",
      // backgroundColor: "rgba(15, 163, 177, 0.5)",
      backgroundColor: gradient,
      borderWidth: 1,
      hoverBorderWidth: 2,
      fill: "-1",
    },
  ],
};
// console.log(legend(dataObj)[0]);
// console.log(dates(dataObj[0]));
// console.log(hoursWorked(dataObj)[0][0]);

const config = {
  type: "line",
  data: data,
  options: {
    responsive: true,
    scales: {
      y: {
        ticks: {
          callback: (value) => {
            return value + " h";
          },
        },
      },
    },
  },
};

let myChart = new Chart(document.getElementById("myChart"), config);
