<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const redirect = () => {
  window.location.href = "https://calendly.com/3dxcel/3dxcel-cad-session";
};
</script>

<template>
  <div class="fadein animation-duration-1000 animation-iteration-1">
    <div
      class="card w-full flex justify-content-center flex-column align-items-center"
    >
      <div
        class="w-full flex flex-column justify-content-center mt-4 w-9 p-3 border-round-xl align-items-center"
        style="background-color: var(--surface-card)"
      >
        <h1 class="text-6xl text-center d" style="color: #adcbdd">
          Our Beginner Course
        </h1>
        <div class="flex">
          <p class="text-center" style="color: var(--text-color)">
            The beginner mark of the course is designed to provide a
            comprehensive introduction to CAD for individuals with little to no
            prior experience. Participants will be guided through the
            fundamental concepts and tools of CAD software, focusing primarily
            on basic modeling techniques. Students will learn how to navigate
            the CAD interface, create 2D and 3D sketches, and generate simple
            geometric shapes. Emphasis will be placed on understanding key
            modeling principles and developing proficiency in creating and
            modifying basic designs. By the end of the course, students will
            have a solid foundation in CAD and the ability to create simple 3D
            models.
          </p>
        </div>
      </div>
      <Button
        @click="redirect"
        class="mt-5"
        label="Schedule Free Personalized Tutoring Here!"
        outlined
      />
      <h1 style="color: #adcbdd" class="mt-8">Examples:</h1>
      <div
        class="flex md:flex-row md:flex-wrap flex-column justify-content-around mt-5 align-items-center"
      >
        <div class="w-3 border-round-xl">
          <img
            class="flex w-full border-round-xl"
            src="/public/w1e.jpg"
            alt=""
          />
        </div>
        <div class="w-3 border-round-xl">
          <img
            class="flex w-full border-round-xl"
            src="/public/w2e.jpg"
            alt=""
          />
        </div>
        <div class="w-3 border-round-xl">
          <img
            class="flex w-full border-round-xl"
            src="/public/w3e.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
