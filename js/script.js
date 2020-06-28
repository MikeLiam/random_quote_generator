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

/*
    All quotes took from 
    1994-2018 QuotationsPage.com and Michael Moncur.
*/
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
 * `getRandomNumber` function give a random number between 0 to upper, not includes
 ***/
function getRandomNumber(upper) {
  return Math.floor(Math.random() * upper);
}

/***
 * `getRandomQuote` function creates a random number, and use that random number to return 
 *  a random quote object from the quotes array. 
***/
function getRandomQuote() {
  let upper = quotes.length;
  let randomNumber = getRandomNumber(upper);
  return quotes[randomNumber];
}


/***
 * `printQuote` function display a new quote each time the user clicks 
 *  the "Show another quote" button
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);