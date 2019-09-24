 document.body.onscroll = function(){
    let scrollValue = document.documentElement.scrollTop;
    let previousScroll = 60;
    let text_dimensions = document.getElementsByClassName('center2')[0].getBoundingClientRect();
    const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    //check in PC mode

    if(scrollValue > previousScroll) {
        document.querySelector('.menu-block').classList.add('menu-nav_remove');
    } else
        document.querySelector('.menu-block').classList.remove('menu-nav_remove');
       if (scrollValue + viewportHeight > text_dimensions.top + text_dimensions.height) {
         document.getElementById('text_show').classList.add('text_show');
         setTimeout(() => {
           document.getElementById('text_show').style.visibility = 'visible';
         }, 500);
       }
 };
