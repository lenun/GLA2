

window.addEventListener('DOMContentLoaded', () => {
  'use strict';
      let timerHours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds');

//таймер
  function getTimeRemaing(deadline){
      let dataStop = new Date(deadline).getTime(),
          dataNow = new Date().getTime(),
      timeRemaing = (dataStop - dataNow)/ 1000,
      seconds = Math.floor(timeRemaing  % 60),
      minutes= Math.floor((timeRemaing  / 60) % 60),
      hours = Math.floor(timeRemaing  /  60 / 60);
      return{timeRemaing,hours,minutes,seconds};
      
  }

  function updateClock(deadline){
      let timer = getTimeRemaing(deadline);
      if(timer.timeRemaing > 0){
      timerHours.textContent = timer.hours > 9 ? `${timer.hours}` : `0${timer.hours}`;
      timerMinutes.textContent = timer.minutes > 9 ? `${timer.minutes}` : `0${timer.minutes}`;
      timerSeconds.textContent = timer.seconds > 9 ? `${timer.seconds}` : `0${timer.seconds}`;

  }else {
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
  }
  }
  setInterval(updateClock, 1000, '15 jul 2020');
  
//меню
const toggleMenu = () => {
const menu = document.querySelector('menu');
    
      
  const getAct = () =>
   menu.classList.toggle('active-menu');

      document.body.addEventListener('click', event => {
          let target = event.target;
          console.log(target);

          if(target.classList.contains('close-btn') || target.closest('.menu')) { 
              return getAct();
          }

      });
  };
  toggleMenu();

//попит
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
togglePopup();

//табы
const tabs = () => {
      const
          tabHeader = document.querySelector('.service-header'),
          tab = tabHeader.querySelectorAll('.service-header-tab'),
          tabContent = document.querySelectorAll('.service-tab');
      
      const toggleTabs = (index) => {
          for(let i = 0; i  < tabContent.length; i++){
              if(index === i) {
                tab[i].classList.add('active'); 
                tabContent[i].classList.remove('d-none');
                   
              } else {
                tab[i].classList.remove('active');
                tabContent[i].classList.add('d-none');
               
              }
            }
          };
      

      tabHeader.addEventListener('click', event => {
          let target = event.target.closest('.service-header-tab');


          if(target) {
             tab.forEach((item,i) =>{
               if (item === target){
                 toggleTabs(i);
               }
             });
          }
          
      });
  };
tabs();


//слайдер
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
//наша команда

const getCommand = () => {
  const elementCommand = document.querySelector('.command>.container>.row');
    console.log(elementCommand);
  
  const changeImg = (event) => {
    const target = event.target;

    if(target.classList.contains('command__photo')){
      let src = target.src;
      target.src = target.dataset.img;
      target.dataset.img = src ;
    }
  };
  elementCommand.addEventListener('mouseenter',changeImg);
  elementCommand.addEventListener('mouseout',changeImg);

};
getCommand();
//анимация
const animation = (target, index) => {
  const anim = {
      id: -1,
      progress: +target.textContent,
      timeL: 3000, 
      count: true 
  };

  if (target.textContent > index) {
      anim.count = false;
  }

  const start = performance.now();
  anim.id = requestAnimationFrame(function animate(event) {
      if (event - start > anim.timeL) {
          return cancelAnimationFrame(anim.id);
      }
      let time = Math.ceil((event- start) % anim.timeL);

      anim.progress = anim.progress + (anim.count ? time : -time);
      target.textContent = anim.progress;

      if ((anim.count && anim.progress >= index) || (!anim.count && anim.progress <= index)) {
          cancelAnimationFrame(anim.id);
      } else {
          anim.id = requestAnimationFrame(animate);
      }
  });
};
//калькулятор 

const calculator = (price = 100) =>{
  const   calcBlock = document.querySelector('.calc-block'),
          calcType = document.querySelector('.calc-type'),
          calcSquare = document.querySelector('.calc-square'),
          calcCount = document.querySelector('.calc-count'),
          calcDay = document.querySelector('.calc-day'),
          totalValue = document.getElementById('total');

    const countSum = () => {
        let total = 0,
        countValue = 1,
        dayValue = 1;
        const tyleValue = calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value;

        if(calcCount > 1){
          countValue += (calcCount.value -1)/ 10;
        }
        if(calcDay.value && calcDay.value < 5){
          dayValue *= 2 ;
        }else if(calcDay && calcDay.value < 10){
          dayValue *= 1.5 ;
        }

        if (tyleValue && squareValue){
          total = price *  tyleValue * squareValue * countValue * dayValue;
          animation(totalValue,total);
         
        }
        totalValue.textContent = total;
    };



    calcBlock.addEventListener('change', (event) => {
        const target = event.target;
        if (target.matches('select') || target.matches('input')){
          countSum();
        }
    });

    const input = (event) => {
        const target = event.target;

        if(target.tagName === 'INPUT') {
            target.value = target.value.replace(/\D/, '');
        }
    };
    calcBlock.addEventListener('input', input);
  };
  calculator(100);   
  getstartSlider(3000);
 

//ajax- json

  const sendForm = () => {
      const errorMessage = 'Что-то пошло не так...',
      loadMessage = 'Загрузка...',
      successMessage = 'Спасибо!Мы скоро свяжимся с вами! ',
      fixMessage = 'ПЕРЕДЕЛАЙ!';
      

      const form = document.querySelectorAll('form'),
            input = document.querySelectorAll('input'),
            
            usephone1 = document.getElementById('form1-phone'),
            usephone2 = document.getElementById('form2-phone'),
            usephone3 = document.getElementById('form3-phone'),

            name1 = document.getElementById('form1-name'),
            name2 = document.getElementById('form2-name'),
            name3 = document.getElementById('form3-name'),
            message = document.getElementById('form2-message');

      const startMessage = document.createElement('div');
      startMessage.style.cssText = 'font-size: 2rem;';

const post = (body, out, err) =>{
        const request = new XMLHttpRequest();
      request.addEventListener('readystatechange', ()=> {
        startMessage.textContent = loadMessage;
          if(request.readyState !== 4){
            return;
          }
          if(request.status === 200){
           out();
            } else {
              err();
          }
          
        });
        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type','application/json');
        request.send(JSON.stringify(body));
      };

      form.forEach((elem) =>{
        elem.addEventListener('submit', (event) => {

          event.preventDefault();
          elem.appendChild(startMessage);


        const formData = new FormData(elem);
        let body = {};
        formData.forEach((val,key) =>{
          body[key] = val;
        });

        const cheak = () =>{
          input.forEach( (item) => {
            if(item.tagName.toLowerCase() === 'input') {
                item.value = '';
        }
      });
    };
    const fixPhone = (num) =>  {
      const phone = /^[+]?\d+$/;
      return !!(num && num.match(phone));
    };

    const fixText = (text) =>  {
      const messag = /[^a-zа-я\s]+$/;
      return !!(text && text.match(messag));
    };

  
  
      if(fixPhone(usephone1.value) || fixPhone(usephone2.value) || fixPhone(usephone3.value) ||
        fixText(name1.value) ||  fixText(name2.value) ||  fixText(name3.value) ||  fixText(message.value)){
      post(body, ()=>{
        startMessage.textContent = successMessage;
       
      },(error)=>{
        startMessage.textContent = errorMessage;
        console.error(error);
       });
       cheak();
      }else {
        startMessage.textContent = fixMessage;
      }   cheak();
  });
  });
};

  sendForm();


});
