function sound_playing(){
    let play = document.querySelector('.playing');
    let audio = document.getElementById('mySound');
    if(play) {
        audio.pause();
        document.getElementById('sound').classList.remove('playing');
    } else {
        audio.play();
        document.getElementById('sound').classList.add('playing');
    }
}