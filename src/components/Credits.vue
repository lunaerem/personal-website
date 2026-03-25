<script setup lang="ts">

</script>

<template>
    <div class="flex-wrapper">
	<h2 style="text-align: center;">Email Address Coming Soon...</h2>	
	<div id="vv-header">
	    <h2 class="title-underscore">Proudly made using Vite and Vue</h2>
	    <div id="logo-header">
		<a href="https://vite.dev" target="_blank">
		  <img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<p style="font-size: 10vh; margin: 0" id="plus">+</p>
		<a href="https://vuejs.org/" target="_blank">
		  <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
	    </div>
	</div>
	<div>
	    <h2 class="title-underscore">Attributions</h2>
	    <ul>
		<li>Website created by Andrew (<a target="_blank" class="hyperlink" href="https://github.com/lunaerem">lunaerem</a>), source code available 
		<a target="_blank" class="hyperlink" href="https://github.com/lunaerem/personal-website">here</a></li>
		<li>Hosted using <a target="_blank" class="hyperlink" href="https://docs.github.com/en/pages">GitHub Pages</a></li>
		<li><a target="_blank" class="hyperlink" href="https://vite.dev/">Vite</a>,
		included under the <a target="_blank" class="hyperlink" href="https://opensource.org/license/MIT">MIT License</a></li>
		<li><a target="_blank" class="hyperlink" href="https://vuejs.org/">Vue</a>,
		included under the <a target="_blank" class="hyperlink" href="https://opensource.org/license/MIT">MIT License</a></li>
		<li><a target="_blank" class="hyperlink" href="https://router.vuejs.org/">Vue Router</a>,
		included under the <a target="_blank" class="hyperlink" href="https://opensource.org/license/MIT">MIT License</a></li>
		<li><a target="_blank" class="hyperlink" href="https://fonts.google.com/specimen/Open+Sans">Open Sans Font</a>,
		included under the <a target="_blank" class="hyperlink" href="https://openfontlicense.org/open-font-license-official-text/">
		SIL Open Font License Version 1.1</a></li>
	    </ul>
	</div>
    </div>
</template>

<style scoped>
#vv-header {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#logo-header {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  cursor: pointer;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
</style>
