function playSound(e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"`);
    if(!audio) return; //returns null if there's no audio
    audio.currentTime = 0; //rewinds to the start whenever you press a key
    audio.play();
    key.classList.add('playing');
  }
  
  function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // skips it if its not transform
    this.classList.remove('playing');
  }
  
  const keys = document.querySelectorAll(".key");
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))
  
  
  window.addEventListener('keydown', playSound);