<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const redirect = (location) => {
  window.location.href = location;
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
          Get Involved
        </h1>
        <div class="flex">
          <p class="text-center" style="color: var(--text-color)">
            Are you a student or an individual interested in exploring the world
            of 3D printing and CAD? Here are some ways you can get involved with
            3DXCEL
          </p>
        </div>
      </div>
      <Button
        @click="redirect('https://forms.gle/29epx5tBbBJHoiL57')"
        class="mt-5"
        label="Apply Here"
        outlined
      />
      <div class="card w-full flex justify-content-center">
        <div
          class="flex flex-column justify-content-center mt-4 w-9 align-items-center p-3 border-round-xl"
        >
          <div class="flex flex-row justify-content-center flex-wrap">
            <div
              class="w-18rem h-18rem mr-3 mb-3 border-round-xl flex justify-content-center flex-column hover:shadow-8"
              style="background-color: #1f2d40"
            >
              <p class="mt-0 pl-3 pr-3 flex text-center" style="color: #ffff">
                Attend our free classes: Join our introductory courses to learn
                the basics of 3D printing and CAD software. Whether you're a
                complete beginner or have some experience, our classes are
                designed to cater to different skill levels.
              </p>
            </div>
            <div
              class="w-18rem h-18rem mr-3 mb-3 border-round-xl flex justify-content-center flex-column hover:shadow-8"
              style="background-color: #1f2d40"
            >
              <p class="mt-0 pl-3 pr-3 flex text-center" style="color: #ffff">
                Volunteer your expertise: If you have experience in 3D printing,
                CAD design, or teaching, consider volunteering your time and
                knowledge to help others. By becoming a volunteer instructor or
                mentor, you can make a significant impact on someone's journey.
              </p>
            </div>
            <div
              class="w-18rem h-18rem mr-3 mb-3 border-round-xl flex justify-content-center flex-column hover:shadow-8"
              style="background-color: #1f2d40"
            >
              <p class="mt-0 pl-3 pr-3 flex text-center" style="color: #ffff">
                Donate or sponsor: Help us continue providing free education and
                access to 3D printing technology by making a donation or
                sponsoring our programs. Your support enables us to expand our
                reach and empower more individuals in their creative pursuits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
