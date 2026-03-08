<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
    <div class="flex-wrapper"> 
	<h2>This is my personal website! Feel free to explore!</h2>
	<div id="wrapper">
	    <button @click="router.push('/about')">
		<img alt="About Me" />
	    </button>
	    <button @click="router.push('/projects')">
		<img alt="Projects" />
	    </button>
	    <button @click="router.push('/credits')">
		<img alt="Credits" />
	    </button>
	    <button onclick="window.open('https://github.com/lunaerem', '_blank')">
		<img alt="My GitHub" />
	    </button>
	</div>
    </div>
</template>

<style scoped>
#wrapper {
    flex-grow: 1; 
    display: grid;
    gap: 1em;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
}

#wrapper button {
    --hue: 220;
    --button-background: oklch(75% 0.1 var(--hue) / 0.8);
    --bg-dark: oklch(15% 0.1 var(--hue) / 0.75);
    --button-foreground: oklch(15% 0.05 var(--hue));

    cursor: pointer;
    background: transparent;
    border-radius: 10px;
    background-color: var(--button-background);
    background: var(--bg-dark);
    border: 3px solid var(--button-background);
    transition: box-shadow 0.25s;

    &:hover {
	box-shadow: inset 0 0 20px #2dab96, 0 0 10px 2px #ffffffbf;
    }

    &:active {
	transform: translateY(1px);
    }
}
</style>
