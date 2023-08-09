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
          Our Intermediate Course
        </h1>
        <div class="flex">
          <p class="text-center" style="color: var(--text-color)">
            The intermediate mark of the course builds upon the skills acquired
            in the beginner course and delves deeper into the world of CAD
            design. This course is aimed at individuals who have a basic
            understanding of CAD software and want to expand their capabilities.
            Participants will learn advanced modeling techniques, including
            multiviews, labeling parts, and dimensioning. Through hands-on
            exercises and projects, students will gain proficiency in creating
            detailed technical drawings and accurately representing objects in
            multiple views. The course will also cover topics such as section
            views, assembly drawings, and best practices for creating
            professional engineering documentation.
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
            src="/public/w1m.jpg"
            alt=""
          />
        </div>
        <div class="w-3 border-round-xl">
          <img
            class="flex w-full border-round-xl"
            src="/public/w2m.jpg"
            alt=""
          />
        </div>
        <div class="w-3 border-round-xl">
          <img
            class="flex w-full border-round-xl"
            src="/public/w3m.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
