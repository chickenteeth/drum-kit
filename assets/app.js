    // Receive the keyCode directly instead of the event
    function playSound(key) {
      const audio = document.querySelector(`audio[data-key="${key}"]`);
      const keyEl = document.querySelector(`.key[data-key="${key}"]`);

      if (!audio) return;
      audio.currentTime = 0;
      audio.play();

      if (!keyEl) return;
      keyEl.classList.add('playing');
    }

    // New function to be executed when clicking
    function clickPlay(el) {
      const key = el.attributes['data-key'].value; // Getting the keyCode from dom element
      playSound(key);
    }

    function removeTransition(e) {
      if (e.propertyName !== 'transform') return;
      this.classList.remove('playing');
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', e => {
      const key = e.keyCode; // Getting the keyCode from keyboard
      playSound(key);
    });