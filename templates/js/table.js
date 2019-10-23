var genderdata = [{
    Gender: "Female",
    subscribers: 81,
    PC: 10,
    Revenue: 361.94,
},
{
    Gender: "Male",
    subscribers: 484,
    PC: 62,
    Revenue: 1967.64,
},

];
d3.select("tbody")
    .selectAll("tr") //virtual selection
    .data(genderdata)
    .enter()
    .append("tr")
    .html(function (d) {
        return `<td>${d.Gender}</td><td>${d.subscribers}</td><td>${d.PC}</td><td>${d.Revenue}</td>`;
    });

// d3.csv("../Resources/gender.csv", function (error, GData) {

//     // Log an error if one exists
//     if (error) return console.warn(error);

//     // Print the tvData
//     console.log(GData);
//     GData.forEach(function (d) {
//         d.Gender = +d.Gender;
//         d.subscribers = +d.subscribers;
//         d.PC = +d.PC;
//         d.revenue = +d.revenue;

//     });







