import { ref, watchEffect } from 'vue'

let count = ref(0)

watchEffect(() => {
  console.log(count.value)
})

setInterval(() => {
  count.value++
}, 1000)