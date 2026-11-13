<script setup lang="ts">
function toggleVideo() {
  let video = document.getElementById("background-video") as HTMLVideoElement;
  let button = document.getElementById("motion-button");
  let paused;

  if (video != null && button != null) {
    video.paused ? (paused = true) : (paused = false);

    if (paused) {
      video.play();
      button.textContent = "Reduce Motion";
    } else {
      video.pause();
      button.textContent = "Enable Motion";
    }
  }
}

function testFunction() {
  document.getElementById("dropdown-inner").classList.toggle("visible");
}
</script>

<template>
  <video
    id="background-video"
    muted
    loop
    autoplay
    playsinline
    webkit-playsinline
    oncontextmenu="return false;"
  >
    <source src="./assets/BackgroundAnim.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <nav id="main-nav" class="transparent-background">
    <h2 class="title-underscore">Navigation</h2>
    <div id="router-nav">
      <RouterLink to="/" class="nav-button">
        <div class="btn-icon">
          <img src="./assets/Home.svg" alt="Home Button Icon" />
        </div>
        Home
      </RouterLink>
      <RouterLink to="/about" class="nav-button">
        <div class="btn-icon">
          <img src="./assets/About.svg" alt="About Button Icon" />
        </div>
        About Me
      </RouterLink>
      <RouterLink to="/projects" class="nav-button">
        <div class="btn-icon">
          <img src="./assets/Projects.svg" alt="Projects Button Icon" />
        </div>
        Projects
      </RouterLink>
      <RouterLink to="/credits" class="nav-button">
        <div class="btn-icon">
          <img src="./assets/Credits.svg" alt="Credits Button Icon" />
        </div>
        Credits
      </RouterLink>
    </div>
    <div id="final-button">
      <button @click="toggleVideo()" id="motion-button" class="text-btn">
        Reduce Motion
      </button>
      <div id="nav-dropdown">
        <button class="nav-button" @click="testFunction()">Menu</button>
        <div id="dropdown-inner">
          <RouterLink to="/home" class="nav-button">Home</RouterLink>
          <RouterLink to="/about" class="nav-button">About Me</RouterLink>
          <RouterLink to="/projects" class="nav-button">Projects</RouterLink>
          <RouterLink to="/credits" class="nav-button">Credits</RouterLink>
        </div>
      </div>
      <a
        href="https://github.com/lunaerem"
        target="_blank"
        class="nav-button"
        id="nav-src"
      >
        <div class="btn-icon">
          <img src="./assets/Git.svg" alt="GitHub Button Icon" />
        </div>
        My GitHub
      </a>
    </div>
  </nav>
  <main class="transparent-background">
    <h1 class="title-underscore">{{ $route.meta.title }}</h1>
    <RouterView class="content" />
  </main>
</template>

<style scoped>
#final-button {
  margin-top: auto;
  display: flex;
  gap: 10px;
}

#background-video {
  z-index: -1;
  pointer-events: none;
  position: fixed;
  min-height: 100dvh;
  min-width: 100dvw;
  aspect-ratio: auto;
  left: 0px;
  top: -50px;
  user-select: none;
  -webkit-user-select: none;
}

#nav-dropdown {
  margin-left: auto;
}

#dropdown-inner {
  display: none;
  position: absolute;
  right: 0;
  /*background-color: grey;*/
  width: 100%;
  flex-direction: column;
  gap: 0.25lh;
  /*border-radius: 10px;*/

  border: 1px solid rgba(255, 255, 255, 0.75);
  background: rgba(13, 138, 140, 0.75);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);
  color: white;
  border-radius: 20px;

  a {
    margin: 10px;
  }
}

@media screen and (max-width: 950px) and (min-width: 850px) and (orientation: landscape) {
  nav {
    h2.title-underscore {
      font-size: 20px;
    }
  }
}

.visible {
  display: flex !important;
}
</style>
