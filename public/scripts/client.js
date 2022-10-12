$(document).ready(function() {
 
  //Grab the form
$form = $('.form-tweet');

// listen for the form to submit
$form.on('submit',(event) => {

  // Stops browser from doing the default
  event.preventDefault();

  // Get the data
  const dataToSendToServer = $form.serialize();
  
  //Send the information to the server via a POST request
  $.ajax({
    method:'POST',
    url: '/tweets',
    data: dataToSendToServer
  })
  .then((response) => {
    console.log('Response', response);
  })
  .catch((err) => {
    console.log('Error', err);
  })
});




// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

  const renderTweets = function(tweets) {
    // loops through tweets
    for (const tweet of tweets) {
      let result = createTweetElement(tweet);
      $('#fakeTweet').prepend(result);
    }
    // calls createTweetElement for each tweet


    // takes return value and appends it to the tweets container

  }
  
  const createTweetElement = function(tweet) {
    // let $tweet = /* Your code for creating the tweet element */ 
    const $tweet = $(`<article class="fake-article">
    <header class="fake-header">
      <div>
        <i class="fa-regular fa-face-meh"></i>
        <span>${tweet.user.name}</span>
      </div>
      <div>
        <p>${tweet.user.handle}</p>
      </div>
    </header>
    <textarea name="text" class="fake-tweet-text">${tweet.content.text}</textarea>
    <footer class="fake-footer">
      <div>
        <p>${tweet.created_at}</p>
      </div>
      <div>
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-repeat"></i>
      <i class="fa-solid fa-heart"></i>
      </div>
    </footer>
</article>`);
    return $tweet;
  }
  renderTweets(data)
});

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

