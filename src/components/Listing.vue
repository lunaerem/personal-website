<script setup lang="ts">
const props = defineProps<{ title?: string, text?: string, src?: string, alt?: string, chips?: string[], link?: string }>()

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
	    <div id="chip-container">
		<div v-for="(chip, index) in props.chips" class="chip" :class="chip">{{ chips[index] }}</div>
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

#chip-container {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
}

.chip {
    background-color: #4a5568;
    border-radius: 20px;
    padding: 8px 16px;
    color: #cbd5e0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.HTML {
    background-color: red;
}

.CSS {
    background-color: blue;
}

.TypeScript {
    background-color: yellow;
    color: black;
}

.Vue {
    background-color: green;
}

.C {
    background-color: cyan;
    color: black;
}

.Cpp {
    background-color: black;
}

.QT {
    background-color: pink;
    color: black;
}
</style>
