(function(){
let person = document.getElementById('person-pro');
let button = document.getElementById('btn-new');
let quote = document.getElementById('quote-place');

const quotes =[{
  quote: 'The greatness of a nation and its moral progress can be judged by the way its animals are treated.',
  person: 'Mahatma Gandhi'
},{
  quote: 'Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.',
  person: 'Albert  Einstein'
},{
  quote: 'See the good in people and help them.',
  person: 'mahatma  gandhi'
},{
  quote: 'The only person with whom you have to compare yourself is you in the past.',
  person: 'Sigmund  Freud '
},{
  quote: 'By all means, marry . If you get a good wife you will become happy , if you get a bad one you will become philosopher.',
  person: 'Socrates'
},{
  quote: 'What is right is not always popular, and what is popular is not always right.',
  person: 'Albert  Einstein'
},{
  quote: 'Always bear in mind that your own resolution to succeed is more important than any one thing.',
  person: 'Abraham  Lincoln'
},{
  quote: 'Just as no one can be forced into belief, so no one can be forced into unbelief.',
  person: 'Sigmund  Freud '
}];

button.addEventListener('click',function(){
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
})
}) ();