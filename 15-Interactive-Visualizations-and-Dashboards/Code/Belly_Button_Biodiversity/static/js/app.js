

function buildMetadata(sample) {

  var url = '/metadata/' + sample;

   console.log("sample", sample)

   d3.json(url).then(function (data) {
     var selector = d3.select("#sample-metadata");

     selector.html("");

     Object.entries(data).forEach(([key, value]) => {

      selector.append("h4").text(`${key}: ${value}`);
     });

   });
     
}

function buildCharts(sample) {

  var url = '/samples/' + sample;
  console.log("Url", url);

  d3.json(url).then(function(data) {
    console.log("data", data);


    var pie_layout = {
      title: "Pie Chart"
    };


    var bac = [{
      values: data.sample_values.slice(0, 11),
      labels: data.otu_ids.slice(0, 11),
      type: "pie"
    }];

    Plotly.newPlot("pie", bac , pie_layout);

    var trace = [{
      x: data.otu_ids,
      y: data.sample_values,
      text: data.otu_labes,
      mode: 'markers',
      marker: {
        size: data.sample_values,
        color: data.otu_ids
      }
    }];

    var bubble_layout = {
      title: " Bacterial Bubble Chart",
      showlegend: false

    };
    Plotly.newPlot("bubble", trace, bubble_layout);

  })

    

 
}    
    

  
  


function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
