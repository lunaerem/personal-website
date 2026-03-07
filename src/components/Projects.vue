<script setup lang="ts">
import Listing from './Listing.vue'
import { ref } from 'vue';

const projects = [
    { "title": "Personal Website", "text": "The website you are viewing now! My personal website made using Vue and Vite.", 
    "src": "/vite.svg", "alt": "Personal Website Screenshot", "chips": "Chips", "link": "https://github.com/lunaerem/personal-website" },
    { "title": "yt-download-controller", "text": "A CLI tool to make using yt-dlp a breeze.", 
    "src": "images/YT-Controller.PNG", "alt": "yt-download-controller Screenshot", "chips": "Chips", "link": "https://github.com/lunaerem/yt-download-controller" },
    { "title": "Minesweeper C++", "text": "A simple terminal-based clone of Minesweeper made using C++.", 
    "src": "images/Minesweeper.PNG", "alt": "Minesweeper C++ Screenshot", "chips": "Chips", "link": "https://github.com/lunaerem/minesweeper-cpp" }
]

const pageNum = ref(0);
</script>

<template>
    <div class="flex-wrapper"> 
	<p>Some of the various projects that I have worked on:</p>	
	<div id="wrapper">
	    <div class="project">
		<Listing v-bind="projects[pageNum * 3]" />
	    </div>
	    <div class="project">
		<Listing v-bind="projects[pageNum * 3 + 1]" />
	    </div>
	    <div class="project">
		<Listing v-bind="projects[pageNum *3 + 2]" />
	    </div>
	</div>
	<div id="pag-header">
	    <p style="display: inline">< </p>
	    <p style="display: inline">{{ pageNum + 1 }} of {{ projects.length / 3 }}</p>
	    <p style="display: inline" @click="pageNum++"> ></p>
	</div>
    </div>
</template>

<style scoped>
#wrapper {
    flex-grow: 1; 
    display: grid;
    gap: 1em;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    margin-bottom: 1em;
}

.project {
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 1em;

    img {
	width: 100%;
    }
}

#pag-header {
    align-self: center;
}
</style>
