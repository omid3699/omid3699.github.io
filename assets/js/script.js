var typed = new Typed('#typing', {
    strings: ["Hello Wellcome to mi Website", 'I am Omid Azadi a funny Developer from Afghanistan', 'a linux lover', 'currently learning golang and bloakchain', 'I Love Taekwondo and Kung Fu', 'سینه خواهم شرحه شرحه از فراق تا بگویم شرح درد اشتیاق'],
    typeSpeed: 70,
    backSpeed: 70,
    startDelay: 500,
    showCursor: true,
    loop: true,
    loopCount: 2,
    
});


document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
});



$('#menu-button').click(function() {
  $('#menu').toggle(200);
});


$(document).click(function(event) {
  var target = $(event.target);
  if (!target.closest('#menu-button').length) {
    $('#menu').hide(200);
  }
});
