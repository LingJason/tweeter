$(document).ready(function() {
  // Grabbed the textbar from the DOM
  const $tweet = $("#tweet-text");
  const $counter = $("#counter");
  const maxChar = 140;

  // Change event
  $tweet.keyup(function(event) {
    const tweetLength = event.target.value.length;
    const count = maxChar - tweetLength;
    $counter.val(count);
    if (count >= 0) {
      $($counter).css("color", "black");
    }
    if (count < 0) {
      $($counter).css("color", "red");
    }
  });
});