const getstartSlider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
          slider = document.querySelector('.portfolio-content');
  
          let dot = document.querySelectorAll('.dot');
  
   let currentSlide = 0,
        interval;
  
        const addSlide = () => {
          slide.forEach( (item, index) => {
              const li = document.createElement('li');
              li.classList.add('dot');
              if(index === item) {
                  li.classList.add('dot-active');
              }
              document.querySelector('.portfolio-dots').append(li);
          });
         dot = document.querySelectorAll('.dot');
      };
      addSlide();
     
  
          const prevSlide = (elem, strClass) => {
            elem.classList.remove(strClass);
          };
          const nextSlide = (elem, strClass ) => {
            elem.classList.add(strClass);
          };
  
          const autoPlaySlide = () => {
  
            prevSlide(slide[currentSlide], 'portfolio-item-active');
            prevSlide(dot[currentSlide], 'dot-active');
            currentSlide++;
  
            if(currentSlide >= slide.length){
              currentSlide = 0;
            }
  
            nextSlide(slide[currentSlide] ,'portfolio-item-active');
            nextSlide(dot[currentSlide], 'dot-active');
  
          };
  
          const startSlide = (time) => {
            interval = setInterval(autoPlaySlide, time);
          };
  
          const stopSlide = () => {
            clearInterval(interval);
          };
  
          slider.addEventListener('click', (event) => {
            event.preventDefault();
  
            let target = event.target;
  
            if(!target.matches('.portfolio-btn, .dot')){
              return;
            }
  
            prevSlide(slide[currentSlide] , 'portfolio-item-active');
            prevSlide(dot[currentSlide], 'dot-active');
  
            if(target.matches('#arrow-right')){
              currentSlide++;
            }else if(target.matches('#arrow-left')){
              currentSlide--;
            }else if (target.matches('.dot')){
              dot.forEach((elem, index) => {
                if (elem === target){
                  currentSlide = index;
                }
              });
            }
            if(currentSlide >= slide.length){
              currentSlide = 0;
            }
            if (currentSlide < 0){
              currentSlide = slide.length - 1;
            }
            nextSlide(slide[currentSlide] , 'portfolio-item-active');
            nextSlide(dot[currentSlide], 'dot-active');
  
          });
          
          slider.addEventListener('mouseover', (event) => {
            if(event.target.matches(".portfolio-btn, .dot")) {
              stopSlide();
            }
          });
  
          slider.addEventListener('mouseleave', (event) => {
            if(event.target.matches(".portfolio-btn, .dot")) {
              startSlide();
            }
          });
        };

        export default getstartSlider;