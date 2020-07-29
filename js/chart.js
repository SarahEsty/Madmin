window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      text: "Daily Visitors",
    },
    axisX: {
      labelFontSize: 14,
    },
    axisY: {
      labelFontSize: 14,
    },
    data: [
      {
        type: "line", //change it to line, area, bar, pie, etc
        dataPoints: [
          { y: 450 },
          { y: 414 },
          {
            y: 520,
            indexLabel: "highest",
            markColor: "red",
            markerType: "triangle",
          },
          { y: 460 },
          { y: 450 },
          { y: 500 },
          { y: 480 },
          { y: 480 },
          {
            y: 410,
            indexLabel: "lowest",
            markColor: "DarkSlateGrey",
            markerType: "cross",
          },
          { y: 500 },
          { y: 480 },
          { y: 510 },
        ],
      },
    ],
  });
  setTimeout(() => {
    chart.render();
  }, 1000);
};
