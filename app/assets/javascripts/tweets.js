document.addEventListener("DOMContentLoaded", function() {

  var tweet     = document.querySelector('#new_tweet')
  var list      = document.querySelector('.tweets')
  var firstLi   = document.querySelector('li')
  var timeStamp = dateObj.getTime()

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
        p.innerText = data.message
      var time =  document.createElement('time')
        time.innerText = timeStamp

      li.appendChild(p);
      li.appendChild(time);

      list.insertBefore(li, firstLi);

      tweet.reset()
    })
  })
});
