 document.body.onscroll = function(){
    let scrollValue = document.documentElement.scrollTop;
    let previousScroll = 60;
    if(scrollValue > previousScroll){
        document.getElementById('nav').classList.add('menu-nav_remove');
    }
       else{
        document.getElementById('nav').classList.remove('menu-nav_remove');
    }
 };