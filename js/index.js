
var quotes = [
  "You only live once, but if you do it right, once is enough.",
  "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  "Be the change that you wish to see in the world",
  "In three words I can sum up everything I've learned about life: it goes on",
  "If you tell the truth, you don't have to remember anything",
  "Always forgive your enemies; nothing annoys them so much",
  "We accept the love we think we deserve",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment",
  "The great leader doesnot tell you what to do, he shows you how its done",
  "So many books, so little time",
];

function generateQuote() {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  Output = randomQuote;
  document.getElementById("quote").innerHTML = Output;

}

