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
        "rgba(255, 99, 132, 0.7)",
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
  type: "pie",
  data: data,
  options: {
    // indexAxis: "y",
    plugins: {
      title: {
        display: true,
        text: "Largest Cities in Massachusetts",
        font: {
          size: 25,
        },
        color: "red",
      },
      legend: {
        position: "right",
        // align: "start",
        // labels: {
        //   color: "#F02D3A",
        // },
        display: true,
      },
      // layout: {
      //   padding: {
      //     left: 50,
      //     top: 50,
      //     bottom: 50,
      //     right: 0,
      //   },
      // },
      tooltip: {
        // enabled: false,
      },
    },
  },
};

Chart.defaults.font.size = 18;
// Chart.defaults.font.weight = "italic";
Chart.defaults.font.family = "'Anonymous Pro', monospace";
Chart.defaults.color = "#031927";

let myChart = new Chart(document.getElementById("myChart"), config);
