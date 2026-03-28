<script setup lang="ts">
function toggleVideo() {
    let video = document.getElementById('background-video') as HTMLVideoElement;
    let button = document.getElementById('motion-button');
    let paused;

    if(video != null && button != null) {
	video.paused ? paused = true : paused = false;

	if(paused) {
	    video.play();
	    button.textContent = "Reduce Motion";
	} else {
	    video.pause();
	    button.textContent = "Enable Motion";
	}
    }
}
</script>

<template>
    <video id="background-video" muted loop autoplay playsinline webkit-playsinline>
	<source src="./assets/BackgroundAnim.mp4" type="video/mp4">
	Your browser does not support the video tag.
    </video>
    <nav id="main-nav" class="transparent-background">
	<h2 class="title-underscore">Navigation</h2>
	<div id="router-nav">
	    <RouterLink to="/" class="nav-button">Home</RouterLink>
	    <RouterLink to="/about" class="nav-button">About Me</RouterLink>
	    <RouterLink to="/projects" class="nav-button">Projects</RouterLink>
	    <RouterLink to="/credits" class="nav-button">Credits</RouterLink>
	</div>
	<div id="final-button">
	    <button @click="toggleVideo()" id="motion-button" class="text-btn">Reduce Motion</button>
	    <a href="https://github.com/lunaerem" target="_blank" class="nav-button">My GitHub</a>
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
    flex-direction: column;
    gap: 10px;
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
