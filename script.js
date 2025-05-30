setMode("darkmode"); // or "lightmode" or "automode"

//add event btn

document.getElementById('add-event-btn').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.card').classList.remove('d-none')
  } );


        
  const quotes = [
    "You don’t have to see the whole staircase, just take the first step.<br/> — Martin Luther King Jr.",
    "Success is the sum of small efforts, repeated day in and day out.<br/> — Robert Collier",
    "The secret of getting ahead is getting started.<br/> — Mark Twain",
    "Action is the foundational key to all success.<br/> — Pablo Picasso",
    "Don’t watch the clock; do what it does. Keep going.<br/> — Sam Levenson"
  ];

  const quoteElement = document.getElementById("inspirational-quote");

  function rotateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.innerHTML = quotes[randomIndex];
  }

  // Rotate immediately and then every 10 seconds
  rotateQuote();
  setInterval(rotateQuote, 1000 * 60 * 2);



// 

function setMode(mode) {
    const body = document.body;
    body.classList.remove("darkmode", "lightmode", "automode");
    body.classList.add(mode);

    //target 
    document.querySelector('#mode').innerText = mode;
    // the tag and change text with inner html

  }
  
  // Hook up buttons
  document.getElementById("sun").addEventListener("click", () => setMode("lightmode"));
  document.getElementById("moon").addEventListener("click", () => setMode("darkmode"));
  
document.querySelector('#datepicker').addEventListener('change', (e) => {
    console.log(e.target.value)

})
  


  




  
  
