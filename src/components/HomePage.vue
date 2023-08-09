<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <div
    class="card w-full flex justify-content-center mt-7 fadein animation-duration-1000 animation-iteration-1"
  >
    <div
      class="flex flex-column justify-content-center mt-5 w-7 p-3 border-round-xl align-content-center"
      style=""
    >
      <h1 class="text-8xl text-center mb-3 mt-3" style="color: #adcbdd">
        3DXcel
      </h1>

      <p class="text-center text-xl" style="color: var(--text-color)">
        A non-profit organization dedicated to empowering young creators by
        providing them with free access to cutting-edge 3D printing technology
      </p>
      <Button
        class="flex w-8rem align-self-center mt-3 text-center justify-content-center"
        @click="router.push('/about')"
        >Learn More</Button
      >
    </div>
  </div>
</template>
<style scoped></style>
