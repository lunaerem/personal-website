<script setup lang="ts">

</script>

<template>
    <div class="flex-wrapper"> 
	<p>Some of the various projects that I have worked on:</p>	
	<div id="wrapper">
	    <div class="project">
		<img src="/vite.svg" alt="Vite logo" class="image" />
		<div class="project-info">
		    <div class="project-text">
			<h3 class="title-underscore">Personal Website</h3>
			<p>The website you are viewing now! My personal website made using Vue and Vite.</p>
		    </div>
		    <div class="project-stats">
			<div>
			    Chips
			</div>
			<button class="nav-button">Go to Project</button>
		    </div>
		</div>
	    </div>
	    <div class="project">
	    </div>
	    <div class="project">
	    </div>
	</div>
	<div id="pag-header">
	    <p style="display: inline">< </p>
	    <p style="display: inline">01 of 01</p>
	    <p style="display: inline"> ></p>
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

.project-info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.project-text {
    flex-grow: 1;
}

.project-stats {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#pag-header {
    align-self: center;
}
</style>
