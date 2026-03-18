<script setup lang="ts">
</script>

<template>
    <div id="about-wrapper">
		<div id="edu-div">
	    <h2 style="margin-top: 0">Education</h2>
	    <h3>University</h3> 
	    <hr class="content-border" />
	    <ul>
		<li>Graduated from a 4-year University</li>
		<li>Bachelor's Degree in Software Engineering</li>
		<li>Minored in Music Technology</li>
	    </ul>
	</div>    
	<h2>Hello!</h2>
	    <p>I'm Andrew (Known as Lunaerem on the internet), a software engineer,
		applications developer, and spreadsheet enthusiast.</p>
	    <hr class="content-border" />
	    <p>While I mostly make websites or computer applications, I also have a great interest in
		reverse engineering, video game development, and both hardware and software modding, so 
		most of my personal projects focus on those subjects. One of my favourite pastimes is compiling and organising 
		lots of information about my hobbies, such as video games, books, anime, films, and technology.
		I also have an amateur-level interest in music making and mixing, which is why I minored 
		in Music Technology—all of the cool tech stuff behind the creation of music—during university.</p>
	    <hr class="content-border" />
	    <p><span class="underline">Languages I use Often:</span> C, C++, CSS, HTML, TypeScript</p>
    </div>
</template>

<style scoped>
#about-wrapper {
    display: flow-root;
}

#edu-div {
    border: 1px solid rgba(255, 255, 255, 0.75);
    background: rgba(180, 255, 248, 0.25); 
    backdrop-filter: blur(4px) saturate(200%); 
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2); 
    color: white; 
    border-radius: 10px;
    padding: 1rem;
    float: right;
    margin-left: 1rem;
}

.content-border {
    border: 0;
    border-top: 2px solid #ffffff;
}

.underline {
    text-decoration: underline;
}
</style>
