$(document).ready(function() {
 
  //Grab the form
  $form = $('.form-tweet');
  const $text = $('#tweet-text');

  // listen for the form to submit
  $form.on('submit',(event) => {
    // Stops browser from doing the default
    event.preventDefault();
    const textVal = $text.val();
    console.log($text);
    if (textVal === '') {
      return alert("Not Valid Entry, Try Again!");
    }
    if (textVal.length > 140) {
       return alert("Too Many Characters, Please Shorten");
    }

    // Get the data
    const dataToSendToServer = $form.serialize();
    
    //Send the information to the server via a POST request
    $.ajax({
      method:'POST',
      url: '/tweets',
      data: dataToSendToServer
    })
    .then((response) => {
      //Clears the Text
      $text.val('');

      // Create a new Article based on the the new info
      createTweetElement();

      // Prepend the info
      // $(new-).prepend();
      console.log('Response', response);
    })
    .catch((err) => {
      console.log('Error', err);
    })
  });

  const loadTweets = function() {
    // Make Ajax request from /tweets
    $.ajax({
      url:'/tweets',
      method: 'GET'
    })
    .then((data) => {
      renderTweets(data);
    })
    .catch((err) => {
    })
  };

    const renderTweets = function(tweets) {
      // loops through tweets
      for (const tweet of tweets) {
        // calls createTweetElement for each tweet
        let result = createTweetElement(tweet);
        // takes return value and appends it to the tweets container
        $('#fakeTweet').prepend(result);
      }
    }
    
    const createTweetElement = function(tweet) {
    // let $tweet = /* Your code for creating the tweet element 
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
          <p>${timeago.format(tweet.created_at)}</p>
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
    loadTweets();
});

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

