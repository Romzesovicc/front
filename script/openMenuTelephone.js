function openMenuTelephone(){
    document.getElementById("sidebar").classList.toggle('active');
  let elementClasses =  document.getElementById("btn_1").classList.toggle('toggle-btn_active');
  if(elementClasses) {
      document.querySelector('.scroll').classList.add('no_scroll');
  } else
      document.querySelector('.scroll').classList.remove('no_scroll');

    };
