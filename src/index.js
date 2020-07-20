'use strict';


import getTime from './models/getTime';
import toggleMenu from './models/toggleMenu';
import togglePopup from './models/togglePopup';
import tabs from './models/tabs';
import getstartSlider from './models/getstartSlider';
import getCommand from './models/getCommand';
import calculator from './models/calculator';
import sendForm from './models/sendForm';

//таймер
getTime();
//меню
toggleMenu();
//попит
togglePopup();
//табы
tabs();
//слайдер
getstartSlider(3000);
//наша команда
getCommand();
//калькулятор 
calculator(100);   
//ajax- json
  sendForm();