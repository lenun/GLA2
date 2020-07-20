const togglePopup = () => {
    const popup = document.querySelector('.popup'),
      popupBtn = document.querySelectorAll('.popup-btn');
      console.log(popup);
    let 
      count = 0,
      gap;
  
    const animation = () => {
      gap = requestAnimationFrame(animation);
      count++;
  
      if (count <= 50) {
        popup.style.opacity = count / 50;
      } else {
        count = 0;
        cancelAnimationFrame(gap);
      }
    };
  
    popupBtn.forEach((elem) =>
      elem.addEventListener('click', () => {
        if (document.documentElement.clientWidth >= 768) {
          gap = requestAnimationFrame(animation);
        }
        popup.style.display = 'block';
      })
    );
  
    popup.addEventListener('click', (event) => {
      let target = event.target;
  
      if (target.classList.contains('popup-close')) {
        popup.style.display = 'none';
      } else {
        target = target.closest('.popup-content');
        if (!target) {
          popup.style.display = 'none';
        }
      }
    });
    
  
  
  };
  export default togglePopup;