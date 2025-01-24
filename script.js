window.addEventListener('load', function() {
    const boxes = document.querySelectorAll('.info-box');
  
    // fade in delay
    boxes.forEach((box, index) => {
      setTimeout(() => {
        box.classList.add('fade-in');
      }, index * 300); 
    });
  });
  