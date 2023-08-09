<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <div class="fadein animation-duration-1000 animation-iteration-1">
    <div class="card w-full flex justify-content-center">
      <div
        class="flex flex-column justify-content-center mt-4 w-9 p-3 border-round-xl"
      >
        <h1 class="text-6xl text-center d" style="color: #adcbdd">
          Our Courses
        </h1>
        <div class="flex">
          <p class="text-center" style="color: var(--text-color)">
            Join our introductory courses to learn the basics of 3D printing and
            CAD software. Whether you're a complete beginner or have some
            experience, our classes are designed to cater to different skill
            levels.
          </p>
        </div>
        <div
          class="flex md:flex-row md:flex-wrap flex-column justify-content-center align-items-center"
        >
          <div
            class="w-18rem h-18rem mr-3 mb-3 border-round-xl flex justify-content-center flex-column hover:shadow-8"
            style="cursor: pointer"
            @click="router.push('/beginner')"
          >
            <h2
              class="mb-0 p-3 flex justify-content-center"
              style="color: #adcbdd"
            >
              BEGINNER
            </h2>
            <img class="flex w-full" src="/public/easy.jpg" alt="" />
          </div>
          <div
            class="w-18rem h-18rem mr-3 mb-3 border-round-xl flex justify-content-center flex-column hover:shadow-8"
            style="cursor: pointer"
            @click="router.push('/intermediate')"
          >
            <h2
              class="mb-0 p-3 flex justify-content-center"
              style="color: #adcbdd"
            >
              INTERMEDIATE
            </h2>
            <img src="/public/Intermediate.jpg" alt="" />
          </div>
          <div
            class="w-18rem h-18rem mr-3 mb-3 border-round-xl flex justify-content-center flex-column hover:shadow-8 hover:translate-y-100"
            style="cursor: pointer"
            @click="router.push('/advanced')"
          >
            <h2
              class="mb-0 p-3 flex justify-content-center"
              style="color: #adcbdd"
            >
              Advanced
            </h2>
            <img src="/public/advanced.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
