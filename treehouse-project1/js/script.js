/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [{
  quote: `Don't worry about being successful 
  but work toward being significant and the success will
  naturally follow.`,
  source: `Opray Winfrey`,
},

{
  quote: `Nothing is impossible, the word itself says I'm possible.`,
  source: `Audrey Hepburn`,
},

{
  quote: `The only way to get started is to quit talking and begin doing.`,
  source: `Walt Disney`,
},

{
  quote: `If life were predictable 
  it would cease to be life, and be without flavor.`,
  source: `Eleanor Roosevelt`,
},

{
  quote:'Life is 10% what happens to you and 90% how you react to it.',
  source:'Charles R. Swindoll',
},
{
  quote: `I learned that courage was not the absence of fear, but the triumph over it. 
  The brave man is not he who does not feel afraid, but he who conquers that fear.`,
  source: `Nelson Mandela`,
  citation: `Mandela's autobiogrophy, Long walk to freedom.`,
  year: `1995`
}

]; 


/***
 * `getRandomQuote` function
***/
function getRandomQuote(array) {
  var quoteIndex = Math.floor(Math.random() * (quotes.length));
  for (var i = 0; i < array.length; i++) {
      var randomQuote = array[quoteIndex];
  }
  return randomQuote;
}


/***
 * `printQuote` function
***/
function printQuote() {
  var message = "";     
  var result = getRandomQuote(quotes);
  message = "<p class='quote'>" + result.quote + "</p>";
  message += "<p class='source'>" + result.source;
  message += "<span class='citation'>" + result.citation + "</span>";
  message += "<span class='year'>" + result.year + "</span>"
  message += "</p>";

  document.getElementById('quote-box').innerHTML = message;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
