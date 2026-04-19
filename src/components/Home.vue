<script setup lang="ts">
</script>

<template>
    <div class="flex-wrapper"> 
	<h2>This is my personal website!</h2>
	<p style="margin-top: 0">In short, I am a programmer, developer, modder, musician, and
	organisational enthusiast, but feel free to take a look around to
	get a deeper understanding of who I am and the kinds of projects
	I work on!</p>
	<nav id="wrapper">
	    <RouterLink to="/about">
		<img alt="About Me Button Icon" src="../assets/About.svg" />
		About Me
	    </RouterLink>
	    <RouterLink to="/projects">
		<img alt="My Projects Button Icon" src="../assets/Projects.svg" />
		My Projects
	    </RouterLink>
	    <RouterLink to="/credits">
		<img alt="Credits Button Icon" src="../assets/Credits.svg" />
		Credits
	    </RouterLink>
	    <a target="_blank" href="https://github.com/lunaerem">
		<img alt="My GitHub Button Icon" src="../assets/Git.svg" />
		My GitHub
	    </a>
	</nav>
    </div>
</template>

<style scoped>
#wrapper {
    flex-grow: 1; 
    display: grid;
    gap: 1em;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    
    a {
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
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	&:hover {
	    box-shadow: inset 0 0 20px #2dab96, 0 0 10px 2px #ffffffbf;
	}

	&:active {
	    transform: translateY(1px);
	}
    }

    img {
	min-width: 30%;
	max-width: 40%;
    }
}
</style>
