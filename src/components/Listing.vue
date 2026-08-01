<script setup lang="ts">
const props = defineProps<{
  title?: string;
  text?: string;
  src?: string;
  alt?: string;
  chips?: string[];
  link?: string;
  source?: string;
}>();
</script>

<template>
  <img :src="src" :alt="alt" draggable="false" />
  <div class="project-info">
    <div class="project-text">
      <h3 class="title-underscore">{{ title }}</h3>
      <p>{{ text }}</p>
    </div>
    <div class="project-stats">
      <div id="chip-container">
        <div v-for="(chip, index) in props.chips" class="chip" :class="chip">
          {{ chips![index] }}
        </div>
      </div>
      <div id="project-lnk-container">
        <a
          v-if="link != null"
          class="nav-button"
          target="_blank"
          :href="link"
          draggable="false"
          >Project</a
        >
        <a
          v-if="source != null"
          class="nav-button"
          draggable="false"
          target="_blank"
          :href="source"
          >Source</a
        >
      </div>
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

#project-lnk-container {
  display: flex;
  flex-direction: row;
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
  background-color: rgba(227, 76, 38, 1);
}

.CSS {
  background-color: rgba(102, 51, 153, 1);
}

.TypeScript {
  background-color: rgba(49, 121, 198, 1);
}

.Vue {
  background-color: rgba(65, 184, 131, 1);
}

.C {
  background-color: rgba(0, 68, 130, 1);
}

.Cpp {
  background-color: rgba(0, 89, 156, 1);
}

.QT {
  background-color: rgba(44, 222, 133, 1);
}

@media (orientation: portrait) {
  #project-lnk-container {
    flex-direction: column;
  }
}
</style>
