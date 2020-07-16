document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = document.getElementById('cars'),
        output = document.getElementById('output');
        
    const send = () => {
        return new Promise( (resolve, reject) => {
            const request = new XMLHttpRequest();

            request.addEventListener('readystatechange', () => {
                if (request.readyState === 4) {
                    if(request.status === 200) {
                        resolve(request.responseText);
                    } else {
                        reject(request.status);
                    }
                }
            });

            request.open('GET', './cars.json');
            request.setRequestHeader('Content-type', 'application/json');
            request.send();
        });
    };

    select.addEventListener('change', () => {
        send()
            .then( requestData => {
                const data = JSON.parse(requestData);
                data.cars.forEach(item => {
                    if (item.brand === select.value) {
                        const {brand, model, price} = item;
                        output.innerHTML = `Тачка ${brand} ${model} <br>
                        Цена: ${price}$`;
                    }
                });
            })
            .catch(() => {
                output.innerHTML = 'Произошла ошибка';
            });
    });

});


