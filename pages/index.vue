<template>
  <div class="text-red">
    {{ x }} , {{ y }} , {{ color.value }}

    <button @click="toggle">{{ color.value }}</button>
  </div>
</template>

<script lang="ts" setup>
const { x, y } = useMouse()
const color = useColorMode()

function toggle() {
  color.value = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<style>
</style>
