/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * All quotes took from 
 * 1994-2018 QuotationsPage.com and Michael Moncur.
***/
const quotes = [{
  quote: 'To want to be what one can be is purpose in life',
  source: 'Cynthia Ozick',
  citation: 'O Magazine',
  year: 2002,
  tag: 'Dreams'
},
{
  quote: 'If we had no winter, the spring would not be so pleasant: if we did not sometimes taste of adversity, prosperity would not be so welcome.',
  source: 'Anne Bradstreet',
  citation: 'Meditations Divine and Moral,',
  year: 1965,
  tag: 'Adversity'
},
{
  quote: 'Everything that is really great and inspiring is created by the individual who can labor in freedom.',
  source: 'Albert Einstein',
  citation: 'Out of My Later Years',
  year: 1950,
  tag: 'Freedom'
},
{
  quote: 'You can take from every experience what it has to offer you. And you cannot be defeated if you just keep taking one breath followed by another.',
  source: 'Oprah Winfrey',
  citation: 'O Magazine, What I Know For Sure',
  year: 2004,
  tag: 'Defeat'
},
{
  quote: 'Happiness is when what you think, what you say, and what you do are in harmony.',
  source: 'Mahatma Gandhi',
  citation: '',
  year: '',
  tag: 'Happiness'
},
];

/***
 * `getRandomNumber` function give a random number between 0 to upper, not included
 * @param {number} upper - The max value for random number not included.
 * @returns {number} Random number at interval [0,upper)
***/
function getRandomNumber(upper) {
  return Math.floor(Math.random() * upper);
}

/***
 * `changeBackgroundColor function change body's style background-color to a random color
 ***/
function changeBackgroundColor() {
  document.querySelector('body').style = `background-color: rgb(${getRandomNumber(256)}, ${getRandomNumber(256)}, ${getRandomNumber(256)})`;
}

/***
 * `getRandomQuote` function creates a random number, and use that random number to return 
 *  a random quote object from the quotes array. 
 * @returns {object} Random object quote.
***/
function getRandomQuote() {
  let upper = quotes.length;
  let randomNumber = getRandomNumber(upper);
  return quotes[randomNumber];
}


/***
 * `printQuote` function display a new quote each time the user clicks 
 *  the "Show another quote" button
 * @returns {string} String with html code.
 ***/
function printQuote() {
  let html = '';
  let quote = getRandomQuote();
  
  // for reset interval each time click event. 
  setTimer();  // ** better solution if we could change eventlistener, with an arrow function

  html += `<p class="quote">${quote.quote}</p>
          <p class="source">${quote.source}`;

  if (quote.citation) {
      html += `<span class="citation">${quote.citation}</span>`
  }
  if (quote.year) {
      html += `<span class="year">${quote.year}</span>`
  }
  if (quote.tag) {
      html += `<span class="tag">${quote.tag}</span>`
  }
  html += '</p>';

  changeBackgroundColor();

  document.getElementById('quote-box').innerHTML = html;

  return html;
}

/***
 * setTimer function reset and restart interval to print new random quote
 * 
***/
function setTimer () {
  clearInterval(timer);
  timer = setInterval(printQuote,10000);
}
// Interval initialization
let timer = setInterval(printQuote,10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);