<template>
  <div>
    <p>Times clicked: {{ count }}</p>
    <button @click="increment">increment</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ATable",
  setup() {
    const count = ref(0);
    const increment = () => {
      count.value++;
    };

    return { count, increment };
  },
});
</script>
