const data = fetch('/api/data')
  .then(response => response.json())
  .then(data => {
    console.log('Data received from backend:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });