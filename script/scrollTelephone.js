document.body.onscroll = function(){
    let scrollValue = document.documentElement.scrollTop;
    let previousScroll = 60;

    if(scrollValue > previousScroll){
        console.log(window.scrollY);
        document.getElementById("sidebar").classList.add('remove');
    }
    else
        document.getElementById("sidebar").classList.remove('remove');
    };