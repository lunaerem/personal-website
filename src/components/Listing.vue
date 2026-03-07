<script setup lang="ts">
const props = defineProps<{ title: string, text: string, src: string, alt: string, chips: string, link: string }>()

function openLink() {
    window.open(props.link, '_blank');
}
</script>

<template>
    <img :src="src" :alt="alt" />
    <div class="project-info">
	<div class="project-text">
	    <h3 class="title-underscore">{{ title }}</h3>
	    <p>{{ text }}</p>
	</div>
	<div class="project-stats">
	    <div>
		<p style="margin: 0">{{ chips }}</p>
	    </div>
	    <button class="nav-button" @click="openLink()">Go to Project</button>
	</div>
    </div>
</template>

<style scoped>
img {
    max-width: 100%;
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
</style>
