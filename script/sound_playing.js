function sound_playing(){
    let play = document.querySelector('.playing');
    if(play) {
        document.getElementById('sound').classList.remove('playing');
    }else
        document.getElementById('sound').classList.add('playing');
    };