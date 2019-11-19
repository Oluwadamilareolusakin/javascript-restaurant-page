
import { home, menu, contact } from './staticPages';
import { tabber } from './tabber';
import { navigation } from './nav'
import './styles/app.scss';
import './images/1.jpg';

const body = document.querySelector('body');


const navBar = navigation();

const homeTemplate = home();
const menuTemplate = menu();
const contactTemplate = contact();

const homePageLeft = document.createElement('div');
homePageLeft.classList.add('homepage-left');

const homePageRight = document.createElement('div');
const homeContent = document.createElement('div');
homeContent.classList.add('home-content');
homePageRight.classList.add('homepage-right');
homePageRight.classList.add('column');
const homePage = home();
homeContent.innerHTML = homePage;
homePageRight.appendChild(navBar);
homePageRight.appendChild(homeContent);

const switchHome = () => {
  tabber(homeTemplate, homeContent);
}

const switchMenu = () => {
  tabber(menuTemplate, homeContent);
}

const switchContact = () => {
  tabber(contactTemplate, homeContent);
}

body.appendChild(document.createElement('main'));
const entryPoint = document.querySelector('main');
entryPoint.classList.add('content');

const container = document.createElement('div');
container.classList.add('row');

entryPoint.append(container)

container.appendChild(homePageLeft);
container.appendChild(homePageRight);



const homeLink = document.querySelector('.home-link');
const menuLink = document.querySelector('.menu-link');
const contactLink = document.querySelector('.contact-link');

homeLink.addEventListener("click", switchHome);
menuLink.addEventListener("click", switchMenu);
contactLink.addEventListener("click", switchContact);
