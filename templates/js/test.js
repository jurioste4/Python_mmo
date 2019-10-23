d3.csv("hours-of-tv-watched.csv", function(error, tvData) {

    // Log an error if one exists
    if (error) return console.warn(error);
  
    // Print the tvData
    console.log(tvData);
  
    // Cast the hours value to a number for each piece of tvData
    tvData.forEach(function(data) {
      data.hours = +data.hours;
    });
  
    var barSpacing = 10; // desired space between each bar
    var scaleY = 10; // 10x scale on rect height
  
    // @TODO
    // Create a 'barWidth' variable so that the bar chart spans the entire chartWidth.
    var barWidth = (chartWidth - (barSpacing * (tvData.length - 1))) / tvData.length;
  
    // Create code to build the bar chart using the tvData.
    chartGroup.selectAll(".bar")
      .data(tvData)
      .enter()
      .append("rect")
      .classed("bar", true)
      .attr("width", d => barWidth)
      .attr("height", d => d.hours * scaleY)
      .attr("x", (d, i) => i * (barWidth + barSpacing))
      .attr("y", d => chartHeight - d.hours * scaleY);
  });
  