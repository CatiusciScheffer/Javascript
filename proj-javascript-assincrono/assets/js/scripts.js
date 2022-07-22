BASE_URL = fetch('https://api.thecatapi.com/v1/images?api_key=aac3cc47-4fde-47e8-a55b-98ae2405d207')
    .then(response => response.json()) 
    .then(json => console.log(json)); 

console.log(BASE_URL);
