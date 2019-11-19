const navigation = () => {
  const nav = document.createElement('nav');
  const logo = '<p>Sushi House</p>';

  nav.classList.add('row');
  const navRight = () => {
    return (`<div>
      <a class="nav-links home-link">Home</a>
      <a class="nav-links menu-link">Menu</a>
      <a class="nav-links contact-link">Contact</a>
    </div>`) }
    
    nav.innerHTML = [logo,navRight()].join('');
    
    return nav; 
}

export { navigation }