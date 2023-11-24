<script lang="ts" setup>
const { x, y } = useMouse()
const color = useColorMode()

function toggle() {
  color.value = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="grid grid-cols-[1fr_2fr] h-full of-hidden max-h-full">
    <div class="border-r border-base">
      content
      <div class="text-red">
        {{ x }} , {{ y }} ,<br>

        <button @click="toggle">
          {{ color.value }}
        </button>
      </div>
    </div>

    <ThePlayground />
  </div>
</template>

<style>
</style>
