


let apiUrl = 'https://api.adviceslip.com/advice';

function generateRandomAdvice(){
    
  axios.get(apiUrl).then(response => {
    let adviceNumber = document.querySelector("#number");
    let adviceQuote = document.querySelector("#advice");

    adviceQuote.innerHTML = `"${response.data.slip.advice}"`;
    adviceNumber.innerHTML = `#${response.data.slip.id}`;
  })
  .catch(error => console.error(error));
}
    
   


generateRandomAdvice();


let button = document.querySelector("button");
button.addEventListener("click", generateRandomAdvice);
   






























