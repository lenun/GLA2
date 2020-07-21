const calculator = (price = 100) =>{
    const   calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcCount = document.querySelector('.calc-count'),
            calcDay = document.querySelector('.calc-day'),
            totalValue = document.getElementById('total');
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
    export default calculator;