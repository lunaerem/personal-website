<script setup lang="ts">
import Listing from './Listing.vue'
import { ref } from 'vue';
import { projects } from '../projects.ts'

const pageNum = ref(1);
const finalPage = ref(Math.ceil(projects.length / 3));

const clickPagination = (dir: number) => {
    if(!dir && pageNum.value != 1) {
	pageNum.value--;
    }
    else if(dir && pageNum.value * 3 < projects.length) {
	pageNum.value++;
    }
}

const selectFromProjects = () => {
    let filtered = projects.slice(pageNum.value * 3 - 3, pageNum.value * 3).filter(obj => obj != undefined);
    return filtered; 
}
</script>

<template>
    <div class="flex-wrapper"> 
	<p>Some of the various projects that I have worked on:</p>	
	<div id="wrapper">
	    <div class="project" v-for="project in selectFromProjects()">
		<Listing v-bind="project" />
	    </div>
	</div>
	<div id="pag-header">
	    <svg viewBox="0 0 24 24" fill="none" @click="clickPagination(0)">
		<path d="m14 16-4-4 4-4" :stroke="pageNum != 1 ? 'white' : 'grey'" 
		stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="arrow" />
	    </svg>
	    <div style="display: flex; align-items: center;">
		<p style="display: inline; margin: 0">Page {{ pageNum }} of {{ finalPage }}</p>
	    </div>
	    <svg viewBox="0 0 24 24" fill="none" @click="clickPagination(1)">
		<path d="m10 16 4-4-4-4" :stroke="pageNum < finalPage ? 'white' : 'grey'" 
		stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="arrow" />
	    </svg>
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
    margin-bottom: 0.5em;
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
    display: flex;
    flex-direction: row;
    width: 100%;
    max-height: 1.5lh;
    justify-content: center;
}

svg {
    cursor: pointer;
}

svg:hover {
    
    path {
	stroke: grey;
	filter: drop-shadow(3px 2px 6px rgb(0 0 0 / 1));
    }
}
</style>
