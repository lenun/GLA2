'use strict';

import getTimer from './models/getTimer';
import toggleMenu from './models/toggleMenu';
import togglePopup from './models/togglePopup';
import tabs from './models/tabs';
import getstartSlider from './models/getstartSlider';
import getCommand from './models/getCommand';
import calculator from './models/calculator';
import sendForm from './models/sendForm';

//таймер
getTimer();
//меню
toggleMenu();
//попит
togglePopup();
//табы
tabs();
//слайдер
getstartSlider();
//наша команда
getCommand();
//калькулятор 
calculator();   
//ajax- json
sendForm();
