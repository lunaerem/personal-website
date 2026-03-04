<script setup lang="ts">

</script>

<template>
    <div class="flex-wrapper"> 
	<p>Some of the various projects that I have worked on:</p>	
	<div id="wrapper">
	    <div class="project">
		#1
	    </div>
	    <div class="project">
		#2
	    </div>
	    <div class="project">
		#3
	    </div>
	    <div class="project">
		#4
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
    min-height: 50%;
    gap: 1em;
    grid-template-columns: 1fr 1fr;
}

.project {
    background-color: rgba(255, 255, 255, 0.5);
}

#pag-header {
    align-self: center;
}
</style>
