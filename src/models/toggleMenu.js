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
      export default toggleMenu;