window.onload = () => {
  const bgMusic = document.getElementById("bg-music");
  const openLetterBtn = document.getElementById("open-letter-btn");
  const closeLetterBtn = document.getElementById("close-letter-btn");
  const letterOverlay = document.getElementById("letter-overlay");
  const typedText = document.getElementById("typedText");
  const musicToggleBtn = document.getElementById("music-toggle-btn");

  const message = `From the moment I met you, all those months ago, not a day has gone by without me thinking about you. 
It’s crazy to me how someone I met (in Roblox ofc) ended up meaning this much to me.

The closer I’ve gotten to you, the stronger my feelings have become.
Even with all the distance between us lol, you’ve become such an important part of my life.

I can’t keep hiding it anymore,
You’re in my very soul now, tormenting me in the sweetest way possible… so what can I do?....

For now, let me at least say this: I love u. A lot.
And maybe, if you feel the same… we could be something more than just two people who happened to meet in anu ada lah pokoknya.`;

  let typingStarted = false;
  let typingIndex = 0;
  let musicStarted = false;

  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1200);

  function startMusic() {
    if (!bgMusic || musicStarted) return;

    bgMusic.volume = 0.4;
    bgMusic.play()
      .then(() => {
        musicStarted = true;
      })
      .catch((err) => {
        console.log("Audio gagal diputar:", err);
      });
  }

  function typeWriter() {
    if (typingIndex < message.length) {
      typedText.innerHTML += message.charAt(typingIndex);
      typingIndex++;
      setTimeout(typeWriter, 25);
    }
  }

  openLetterBtn.addEventListener("click", () => {
    letterOverlay.classList.remove("hidden");
    startMusic();

    if (!typingStarted) {
      typingStarted = true;
      typedText.innerHTML = "";
      typeWriter();
    }
  });

  closeLetterBtn.addEventListener("click", () => {
    letterOverlay.classList.add("hidden");
  });

  letterOverlay.addEventListener("click", (e) => {
    if (e.target === letterOverlay) {
      letterOverlay.classList.add("hidden");
    }
  });

  musicToggleBtn.addEventListener("click", () => {
    if (!bgMusic) return;

    if (!musicStarted) {
      startMusic();
      return;
    }

    bgMusic.muted = !bgMusic.muted;
    musicToggleBtn.textContent = bgMusic.muted ? "Unmute music" : "Mute music";
  });
};