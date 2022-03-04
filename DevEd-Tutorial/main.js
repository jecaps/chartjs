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
      backgroundColor: "rgba(249, 0, 147, 0.5)",
      fill: false,
      // backgroundColor: gradient,
      borderWidth: 2,
      pointBackgroundColor: "rgb(249, 0, 147)",
      radius: 3,
      hitRadius: 30,
      hoverRadius: 8,
      tension: 0.4,
    },
    {
      label: legend(dataObj)[1],
      data: hoursWorked(dataObj[1]),
      borderColor: "rgba(15, 163, 177, 0.7)",
      backgroundColor: "rgba(15, 163, 177, 0.2)",
      fill: "-1",
      // backgroundColor: gradient,
      borderWidth: 2,
      pointBackgroundColor: "rgb(15, 163, 177)",
      radius: 3,
      hitRadius: 30,
      hoverRadius: 8,
      tension: 0.4,
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
    plugins: {
      title: {
        display: true,
        text: "Monthly Working Hours per Employee",
        font: {
          size: 30,
          family: "'Karla', sans-serif",
        },
        color: "#19323C",
      },
      legend: {
        position: "right",
      },
      tooltip: {
        backgroundColor: "rgba(128, 141, 142, 0.8)",
        titleFont: {
          weight: "normal",
        },
        bodyFont: {
          weight: "normal",
        },
      },
    },
    responsive: true,
    scales: {
      y: {
        ticks: {
          callback: (value) => {
            return value + "h";
          },
        },
      },
    },
    // pointStyle: "cross",
  },
};

Chart.defaults.font.size = 16;
Chart.defaults.font.family = "'Roboto', sans-serif";
Chart.defaults.font.weight = "bold";
Chart.defaults.color = "#4D5061";

let myChart = new Chart(document.getElementById("myChart"), config);
