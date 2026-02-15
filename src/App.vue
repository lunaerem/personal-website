<script setup lang="ts">
import Home from './components/Home.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Credits from './components/Credits.vue';
import { ref } from 'vue';

const selectedTab = ref(0);
const title = ref("Welcome!");

function tabSelect(i) {
    selectedTab.value = i;

    switch(i) {
	case 0:
	    title.value = "Welcome!";
	    break;
	case 1:
	    title.value = "About Me";
	    break;
	case 2:
	    title.value = "Projects";
	    break;
	case 3:
	    title.value = "Credits";
	    break;
	default:
	    break;
    }
}

function toggleVideo() {
    var video = document.getElementById('background-video');
    var button = document.getElementById('motion-button');
    var paused;

    video.paused ? paused = true : paused = false;

    if(paused) {
	video.play();
	button.textContent = "Reduce Motion";
    } else {
	video.pause();
	button.textContent = "Enable Motion";
    }
}
</script>

<template>
    <video id="background-video" muted loop autoplay>
	<source src="./assets/BackgroundAnim.mp4" type="video/mp4">
    </video>
    <aside class="transparent-background">
	<h2 class="title-underscore">Navigation</h2>
	<button @click="tabSelect(0)" class="nav-button">Home</button>
	<button @click="tabSelect(1)" class="nav-button">About Me</button>
	<button @click="tabSelect(2)" class="nav-button">Projects</button>
	<button @click="tabSelect(3)" class="nav-button">Credits</button>
	<div id="final-button">
	    <p @click="toggleVideo()" id="motion-button">Reduce Motion</p>
	    <button style="width: 100%" onclick="window.open('https://github.com/lunaerem', '_blank')" class="nav-button">My GitHub</button>
	</div>
    </aside>
    <main class="transparent-background">
	<h1 class="title-underscore">{{ title }}</h1>
	<div class="content">
	    <Home v-if="selectedTab == 0" />
	    <About v-else-if="selectedTab == 1" msg="2" />
	    <Projects v-else-if="selectedTab == 2" />
	    <Credits v-else-if="selectedTab == 3" />
	</div>
    </main>
</template>

<style scoped>
#final-button {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

#motion-button {
    cursor: pointer;
    margin: 0;
    text-align: center;
}

#background-video {
    z-index: -1;
    position: fixed;
    min-height: 100dvh;
    min-width: 100dvw;
    aspect-ratio: auto;
    left: 0px;
    top: -50px;
}

/*.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}*/
</style>
