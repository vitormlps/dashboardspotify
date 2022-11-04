anychart.onDocumentReady(function() {

    // set the data
    var data = [
        {x: "Rock", value: 223553265},
        {x: "Rap", value: 38929319},
        {x: "Pagodão", value: 2932248}
    ];
  
    // create the chart
    var chart = anychart.pie();
  
    // set the chart title
    chart.title("Gêneros mais ouvidos:");
  
    // add the data
    chart.data(data);
  
    chart.background().fill("#99e599");

    // display the chart in the container
    chart.container('generos');
    chart.draw();
  
  });
