// creates variable for url we want to fetch
const url = 'http://localhost:3000/api/data';

// fetch call to our /api/data page
fetch(url)

  // creates promise to work with response from /api/data
  .then(res => {

    // throws error if there is a problem fetching page
    if (!res.ok) {

      // returns error with response text of error

      throw new Error(res.statusText);

    }

    // returns data from /api/data page in json format to next promise

    return res.json();

  })

  // creates promise with returned data from previous promise
  .then(data => {

    // creates employees variable to store JSON data form /api/data
    let orders = data;

    // creates empty employeeInfo array
    let orderInfo = [];

    // loops through data from employee variable
    orders.forEach(order => {

      // pushes values from employees variable to empty employeeInfo array
        orderInfo.push([employee.name, parseInt(employee.age)]);

    });

    // creates chart const with employeeInfo array
    const chart = {
      type: 'bar',
      series: [
        {
          values: employeeInfo
        }
      ]
    };

    // renders zingchart to the page
    zingchart.render({
      id: 'chart',
      data: chart,
      height: '100%',
      width: '100%'
    });

  // catches errors in promise chain
  }).catch(error => console.log("fetch error"));