<script setup lang="ts">
import Listing from './Listing.vue'
import { ref } from 'vue';
import { projects } from '../projects.ts'

const pageNum = ref(0);

const clickPagination = (dir: number) => {
    if(!dir && pageNum.value + 1 != 1) {
	pageNum.value--;
    }

    if(dir && pageNum.value + 1 != projects.length / 3) {
	pageNum.value++;
    }
}
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
	    <p style="display: inline" @click="clickPagination(0)">< </p>

	    <svg viewBox="0 0 24 24" fill="none" height="1lh" @click="clickPagination(0)">
		<path d="m14 16-4-4 4-4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
		</path>
	    </svg>
	    <p style="display: inline">Page {{ pageNum + 1 }} of {{ projects.length / 3 }}</p>
	    <p style="display: inline" @click="clickPagination(1)"> ></p>
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
