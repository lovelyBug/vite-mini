<template>
  <div>
    <h1>{{ count }} * 2 = {{ doubleCount }}</h1>
    <button @click="add">Click</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const add = () => count.value++
    const doubleCount = computed(() => count.value * 2)
    return {
      count,
      add,
      doubleCount
    }
  }
}
</script>