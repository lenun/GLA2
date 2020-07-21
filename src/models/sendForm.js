
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
    
    const post = (body) =>{
      return fetch('./server.php', {
        method: 'POST',
        headers: {
            'Form-Data': 'application/json'
        },
        credentials: 'include',
        body: body
    });
  };
    
    
     form.forEach((elem) =>{
          elem.addEventListener('submit', (event) => {
    
          event.preventDefault();
          const elem = event.target;
          elem.appendChild(startMessage);
         
         
    
          const cheak = () =>{
          input.forEach( (item) => {
          if(item.tagName.toLowerCase() === 'input') {
              item.value = '';
          }
            });
            };
          const fixPhone = (num) => {
              const phone = /^[+]?\d+$/;
              return !!(num && num.match(phone));
              };
          
          const fixText = (text) => {
            const messag = /[^a-zа-я\s]+$/;
          return !!(text && text.match(messag));
          };
  
          if(fixPhone(usephone1.value) || fixPhone(usephone2.value) || fixPhone(usephone3.value) ||
            fixText(name1.value) || fixText(name2.value) || fixText(name3.value) || fixText(message.value)){
              post(new FormData(elem))
            .then((response) => {
              if(response.status !== 200){
                throw new Error('стутус не равен 200');
              }
          startMessage.textContent = successMessage;
            cheak();
              
          })
            .catch((error) => {
          startMessage.textContent = errorMessage;
            console.error(error);
            cheak();
          });
        }else{
          post(new FormData())
          .then(() => {
            startMessage.textContent = fixMessage;
              cheak();
        });
      }
    
    
    
    });
    });
    };
    export default sendForm;