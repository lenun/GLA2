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
  export default getCommand;