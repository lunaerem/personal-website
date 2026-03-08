<script setup lang="ts">
import Home from './components/Home.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Credits from './components/Credits.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

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
	<button @click="router.push('/');" class="nav-button">Home</button>
	<button @click="router.push('/about');" class="nav-button">About Me</button>
	<button @click="router.push('/projects');" class="nav-button">Projects</button>
	<button @click="router.push('/credits');" class="nav-button">Credits</button>
	<div id="final-button">
	    <p @click="toggleVideo()" id="motion-button">Reduce Motion</p>
	    <button style="width: 100%" onclick="window.open('https://github.com/lunaerem', '_blank')" class="nav-button">My GitHub</button>
	</div>
    </aside>
    <main class="transparent-background">
	<h1 class="title-underscore">{{ $route.meta.title }}</h1>
	<RouterView class="content" />
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

</style>
