<script setup lang="ts"></script>

<template>
  <div id="about-wrapper">
    <div id="about-inner-wrapper">
      <div id="edu-div" class="about-box">
        <h2 style="margin-top: 0">Education</h2>
        <h3>University</h3>
        <hr class="content-border" />
        <ul style="margin-bottom: 0">
          <li>Graduated from a 4-year University</li>
          <li>Bachelor's Degree in Software Engineering</li>
          <li>Minored in Music Technology</li>
        </ul>
      </div>
      <h2>Hello!</h2>
      <p>
        I'm Andrew (Known as Lunaerem on the internet), a software engineer,
        applications developer, and spreadsheet enthusiast.
      </p>
      <hr class="content-border" />
      <p>
        While I mostly make websites or computer applications, I also have great
        interest in reverse engineering, video game development, and both
        hardware and software modding, so a number of my personal projects focus
        on those subjects. One of my favourite pastimes is compiling and
        organising lots of information about my hobbies, such as video games,
        books, anime, and films from really any genre. I also have an
        amateur-level interest in music making and mixing, which is why I
        minored in Music Technology—all of the cool tech stuff behind the
        creation of music—during university.
      </p>
      <hr class="content-border" />
      <p><u>Languages I use Often:</u> C, C++, CSS, HTML, TypeScript</p>
    </div>
    <div class="about-box" style="margin-top: auto">
      <h2 style="margin-top: 0">More from Me</h2>
      <hr class="content-border" />
      <ul style="margin-bottom: 0">
        <li>
          <a
            target="_blank"
            class="hyperlink"
            href="https://github.com/lunaerem/"
            >GitHub</a
          >
        </li>
        <li>
          <a
            target="_blank"
            class="hyperlink"
            href="https://www.youtube.com/@Lunaerem"
            >YouTube</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
#about-wrapper {
  display: flex;
  flex-direction: column;
}

#about-inner-wrapper {
  display: flow-root;
}

.about-box {
  border: 1px solid rgba(255, 255, 255, 0.75);
  background: rgba(180, 255, 248, 0.25);
  backdrop-filter: blur(4px) saturate(200%);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);
  color: white;
  border-radius: 10px;
  padding: 1rem;
}

.content-border {
  border: 0;
  border-top: 2px solid #ffffff;
}
</style>
