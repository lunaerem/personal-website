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
    gap: 6px;
}

#chip-container {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
}

.chip {
    background-color: #4a5568;
    border-radius: 20px;
    border: 0.15rem solid rgba(255, 255, 255, 1);
    padding: 0.5rem 1rem;
    color: white;
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.5);
}

.HTML {
    background-color: rgba(255, 0, 0, 0.75);
}

.CSS {
    background-color: rgba(0, 0, 255, 0.75);
}

.TypeScript {
    background-color: rgba(255, 255, 0, 0.75);
    color: black;
}

.Vue {
    background-color: rgba(0, 255, 0, 0.75);
}

.C {
    background-color: rgba(0, 255, 255, 0.75);
    color: black;
}

.Cpp {
    background-color: rgba(0, 0, 0, 0.75);
}

.QT {
    background-color: rgba(255, 192, 203, 0.75);
    color: black;
}
</style>
