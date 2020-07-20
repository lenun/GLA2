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
export default tabs;