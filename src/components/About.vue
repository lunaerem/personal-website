<script setup lang="ts">
</script>

<template>
    <div id="about-wrapper">
	<div style="flex: 1">
	    <h2>Hello!</h2>
	    <p>I'm Andrew (Known as Lunaerem on the internet), a software engineer,
		applications developer, and spreadsheet enthusiast.</p>
	    <hr class="content-border" />
	    <p>I like compiling and organising lots of information about my hobbies,
		such as video games, books, anime, films, and programming. Even though I
	     primarily program in C or HTML/CSS/TypeScript, I have a great interest in
	    video game development, modding, and reverse engineering.</p>
	    <hr class="content-border" />
	    <p>Languages I use Often: C, C++, HTML, CSS, TypeScript</p>
	    <p>Languages I've used before (I.E. A few times in a university course):
		Verilog, MySQL, ARM, Java</p>
	</div>
	<div id="edu-div">
	    <h2>Education</h2>
	    <h3>University</h3> 
	    <p>Graduated from a 4-year University</p>
	    <p>Bachelors Degree in Software Engineering</p>
	    <p>Minored in Music Technology</p>
	</div>
    </div>
</template>

<style scoped>
#about-wrapper {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

#edu-div {
    /*padding: 1rem;
    background: black;
    border-radius: 10px;
*/
  border: 1px solid rgba(255, 255, 255, 0.75);
    background: rgba(180, 255, 248, 0.15); 
    backdrop-filter: blur(4px) saturate(200%); 
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2); 
    color: white; 
    border-radius: 10px;
}

.content-border {
    border: 0;
    border-top: 2px solid #ffffff;
}
</style>
