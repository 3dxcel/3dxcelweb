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
          Our Advanced Course
        </h1>
        <div class="flex">
          <p class="text-center" style="color: var(--text-color)">
            The advanced mark of the course will explore functionalities of CAD
            software, with a specific focus on animations and exploded views.
            Students will learn how to create dynamic animations to visualize
            the movement and functionality of their designs. The course will
            also cover techniques for generating exploded views, allowing
            participants to showcase the individual components of an assembly
            and their spatial relationships. Advanced rendering and
            visualization techniques may also be introduced to enhance the
            quality of the final designs. By the end of this course, students
            will have gained expertise in creating captivating animations and
            visually appealing exploded views to communicate complex design
            concepts effectively.
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
            src="/public/w1a.jpg"
            alt=""
          />
        </div>
        <div class="w-3 border-round-xl">
          <video
            class="flex w-full border-round-xl"
            src="/public/w2a.mp4"
            autoplay
            loop
          ></video>
        </div>
        <div class="w-3 border-round-xl">
          <img
            class="flex w-full border-round-xl"
            src="/public/w3a.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
