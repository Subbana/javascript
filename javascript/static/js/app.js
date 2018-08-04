// Assign the data from `data.js` to a descriptive variable
var ufos = data;

// enter the data to web page
var tbody = d3.select("tbody");
function printTable(data){

    data.forEach(function (dataEntry) {
        var row = tbody.append("tr");
        Object.entries(dataEntry).forEach(function([key,value]){
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
}

printTable(ufos);


// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

    tbody.html(" ")

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = data.filter( data => data.datetime === inputValue);

  console.log(filteredData);

  if (!inputValue) {
        printTable(ufos);
    }
    else if (filteredData.length === 0) {
        alert(`${inputValue} not found.`);
        // d3.select("#example-form-input").text("Hey, I changed this!");
        printTable(ufos);

    }
    else {

        console.log(filteredData);
        printTable(filteredData);
  }
});
