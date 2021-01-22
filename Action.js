// window.onload for loading html first

window.onload = function(){
setInterval(() => {

    // creating date object
    d = new Date();
    
    // getting current time details
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    
    // calculating needle rotation
    var hourRotation = hours*(360/12) + minutes*(30/60);
    var minuteRotation = minutes*(360/60) + seconds*(6/60);
    var secondRotation = seconds*(360/60);
    
    /* test :console.log(seconds); */
    
    //setting rotaions in CSS
    var hr = document.getElementById("hour");
    hr.style.transform = 'rotate('+hourRotation+'deg)';
    
    var min = document.getElementById("minute");
    min.style.transform = 'rotate('+minuteRotation+'deg)';
    
    var sec = document.getElementById("second");
    sec.style.transform = 'rotate('+secondRotation+'deg)';
}, 1000);
};

alert("As the clock body image is taken from external website.  Sometimes, it's not visible.")
alert("Upvote if you like it.")