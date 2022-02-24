const labels = [
  "Boston",
  "Worcester",
  "Springfield",
  "Lowell",
  "Cambridge",
  "New Bedford",
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Population",
      data: [617594, 181045, 153060, 106519, 105162, 95072],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132,0.7)",
        "rgba(54, 162, 235, 0.7)",
        "rgba(255, 206, 86, 0.7)",
        "rgba(75, 192, 192, 0.7)",
        "rgba(153, 102, 255, 0.7)",
        "rgba(255, 159, 64, 0.7)",
      ],
      borderWidth: 1,
      borderRadius: 2,
      hoverBorderWidth: 2,
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    indexAxis: "y",
  },
};

let myChart = new Chart(document.getElementById("myChart"), config);
