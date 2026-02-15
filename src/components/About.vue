<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
    <p>{{ msg }}</p>
    <div id="about-wrapper">
	<p>Column #1</p>
	<p>Column #2</p>
    </div>
</template>

<style scoped>
#about-wrapper {
    display: flex;
    flex-direction: row;
}
</style>
