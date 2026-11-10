// exercise 29 JS

async function fetchData () {
  
  console.log("Starting fetching data");

  const response = await fetch ('data.json');

  const data = await response.json();

  console.log(data);
}

fetchData();