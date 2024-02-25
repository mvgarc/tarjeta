
function contador(date) {
    var theDate = new Date(date);
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;
  
    function count() {
      var now = new Date();
      if (theDate > now) {
        var distance = theDate - now;
        if (distance < 0) {
          clearInterval(timer);
          return;
        }
      } else {
        var distance = now - theDate;
        if (distance < 0) {
          clearInterval(timer);
          return;
        }
      }
      var days = Math.floor(distance / _day);
      var hours = Math.floor((distance % _day) / _hour);
      if (hours < 10) {
        hours = '0' + hours;
      }
      var minutes = Math.floor((distance % _hour) / _minute);
      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      var seconds = Math.floor((distance % _minute) / _second);
      if (seconds < 10) {
        seconds = '0' + seconds;
      }
      var daytext = '';
      if (days > 1) {
        daytext = ' days ';
      } else {
        daytext = ' day ';
      }
      if (days > 0) {
        document.getElementById('contador').innerHTML = '<div>' + days + '</div><div>' + hours + '</div><div>' + minutes + '</div><div>' + seconds + '</div>';
  
      } else {
        document.getElementById('contador').innerHTML = '<div>0</div><div>' + hours + '</div><div>' + minutes + '</div><div>' + seconds + '</div>';
      
      }
    }
    timer = setInterval(count, 1000);
  }
  
  // MM/DD/YYYY
  //counter('11/17/2018 15:30:00 GMT-0600 (CST)');