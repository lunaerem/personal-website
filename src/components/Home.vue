<script setup lang="ts">

</script>

<template>
    <div id="flex-wrapper"> 
	<h2>This is my personal website! Feel free to explore!</h2>
	<div id="wrapper">
	    <button>
		<img alt="About Me" />
	    </button>
	    <button>
		<img alt="Projects" />
	    </button>
	    <button>
		<img alt="Credits" />
	    </button>
	    <button onclick="window.open('https://github.com/lunaerem', '_blank')">
		<img alt="My GitHub" />
	    </button>
	</div>
    </div>
</template>

<style scoped>
#flex-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
}

#wrapper {
    flex-grow: 1; 
    display: grid;
    min-height: 50%;
    gap: 1em;
    grid-template-columns: 1fr 1fr;
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
