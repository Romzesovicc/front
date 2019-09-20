 document.body.onscroll = function(){
    let scrollValue = document.documentElement.scrollTop;
    let previousScroll = 60;
    let show_text = 250;
    let text_hide = 670;

    //check in PC mode

    if(scrollValue > previousScroll) {
        console.log(window.scrollY);
        document.querySelector('.menu-block').classList.add('menu-nav_remove');
    } else
        document.querySelector('.menu-block').classList.remove('menu-nav_remove');
       if (scrollValue > show_text)
           document.getElementById('text_show').classList.add('text_show');
       else
           document.getElementById('text_show').classList.remove('text_show');
       if (scrollValue > text_hide)  //new items
           document.getElementById('text_show').classList.add('text_hide');
        else
          document.getElementById('text_show').classList.remove('text_hide');

     //check in mobile mode

     if(scrollValue > previousScroll)
         document.getElementById("sidebar").classList.add('remove');
     else
         document.getElementById("sidebar").classList.remove('remove');
 };