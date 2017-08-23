document.addEventListener("DOMContentLoaded", function() {

  var tweet     = document.querySelector('#new_tweet')
  var list      = document.querySelector('.tweets')
  var firstLi   = document.querySelector('li')
  var button    = document.querySelector('#create-tweet')


  tweet.addEventListener('submit', function (eventObject) {

    eventObject.preventDefault();

    $.ajax({

      url: tweet.getAttribute('action'),
      method:  tweet.getAttribute('method'),
      data: $(tweet).serialize(),
      dataType: 'json'

    }).done(function (data) {
      console.log(data);

      var li = document.createElement('li');
        li.className = 'tweet'
      var p = document.createElement('p')
        p.innerText = data.tweet.message
      var time =  document.createElement('time')
        time.innerText = data.time

      li.appendChild(p);
      li.appendChild(time);

      list.insertBefore(li, firstLi);

      button.removeAttribute('data-disable-with')
      button.removeAttribute('disabled')
      tweet.reset()
    })
  })
});
