<script setup lang="ts">
import Listing from './Listing.vue'
import { ref } from 'vue';
import { projects } from '../projects.ts'

const pageNum = ref(1);
const finalPage = ref(Math.ceil(window.matchMedia("(orientation: landscape)").matches ? projects.length / 3 : projects.length / 2));

const clickPagination = (dir: number) => {
    if(!dir && pageNum.value != 1) {
	pageNum.value--;
    }
    else if(dir && pageNum.value * 3 < projects.length && 
	    window.matchMedia("(orientation: landscape)").matches) {
	pageNum.value++;
    }
    else if(dir && pageNum.value * 2 < projects.length &&
	    window.matchMedia("(orientation: portrait)").matches) {
	pageNum.value++;
    }
}

const selectFromProjects = (orientation: boolean) => {
    let multiplier = orientation ? 3 : 2;

    return projects.slice(pageNum.value * multiplier - multiplier, pageNum.value * multiplier).filter(obj => obj != undefined); 
}

window.screen.orientation.addEventListener("change", () => {
    pageNum.value = 1;
    if(event != undefined && event.target != null) {
	finalPage.value = Math.ceil((event.target as HTMLInputElement).type == "landscape-primary" ? projects.length / 3 : projects.length / 2);
    } else {
	finalPage.value = 1;
    }
});
</script>

<template>
    <div class="flex-wrapper"> 
	<p>Some of the various projects that I have worked on:</p>	
	<div id="search-placement">
	    <input type="search" value="" placeholder="Search" id="search-input" />
	    <button id="search-btn" />
	</div>
	<div id="proj-wrapper" class="landscape">
	    <div class="project" v-for="project in selectFromProjects(true)">
		<Listing v-bind="project" />
	    </div>
	</div>
	<div id="proj-wrapper" class="portrait">
	    <div class="project" v-for="project in selectFromProjects(false)">
		<Listing v-bind="project" />
	    </div>
	</div>
	<div id="pag-header">
	    <button class="text-btn" @click="clickPagination(0)">
		<svg viewBox="0 0 24 24" fill="none" :class="pageNum != 1 ? 'a-enabled' : 'a-disabled'">
		    <path d="m14 16 -4 -4 4 -4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
		</svg>
	    </button>
	    <div style="display: flex; align-items: center;">
		<p style="display: inline; margin: 0">Page {{ pageNum }} of {{ finalPage }}</p>
	    </div>
	    <button class="text-btn" @click="clickPagination(1)">
		<svg viewBox="0 0 24 24" fill="none" :class="pageNum < finalPage ? 'a-enabled' : 'a-disabled'">
		    <path d="m10 16 4 -4 -4 -4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
		</svg>
	    </button>
	</div>
    </div>
</template>

<style scoped>
#search-placement {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0.5rem;
}

#search-input {
    background: rgba(180, 255, 248, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.75);
    transition: all 0.25s;

    &::placeholder {
	font-style: italic;
	color: white;
    }

    &:hover {
	box-shadow: inset 0 0 20px #2dab96, 0 0 10px 2px #ffffffbf;
    }
}

#search-btn {
    background: rgba(180, 255, 248, 0.15);
    background-image: url("../assets/Search.svg");
    background-repeat: no-repeat;
    background-position: center;
    min-width: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.75);
    cursor: pointer;
    transition: all 0.25s;

    &:hover {
	background-color: rgba(180, 255, 248, 0.55);
    }
}

#proj-wrapper {
    flex-grow: 1; 
    display: none;
    gap: 1em;
    grid-template-rows: 1fr;
    margin-bottom: 0.5em;
}

.project {
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 1em;
    border: 1px solid rgba(255, 255, 255, 0.75);

    img {
	width: 100%;
    }
}

#pag-header {
    align-self: center;
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 1.5lh;
    justify-content: center;
}

svg {
    height: 100%;
}

.a-enabled {
    cursor: pointer;

    path {
	stroke: white;
    }

    &:hover {
	path {
	    stroke: grey;
	    filter: drop-shadow(3px 2px 6px rgb(0 0 0 / 1));
	}
    }
}

.a-disabled {
    cursor: not-allowed;

    path {
	stroke: grey;
    }
}

@media (orientation: landscape) {
    #proj-wrapper {
	grid-template-columns: 1fr 1fr 1fr;
    }
    
    .landscape {
	display: grid !important;
    }
}

@media (orientation: portrait) {
    #proj-wrapper {
	grid-template-columns: 1fr 1fr;
    }

    .portrait {
	display: grid !important;
    }
}
</style>
