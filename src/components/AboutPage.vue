<script setup>
import { ref } from "vue";
</script>

<template>
  <div class="fadein animation-duration-1000 animation-iteration-1">
    <div class="card w-full flex justify-content-center">
      <div
        class="flex flex-column justify-content-center mt-4 w-9 p-3 border-round-xl"
        style="background-color: var(--surface-card)"
      >
        <h1 class="text-6xl text-center d" style="color: #adcbdd">About US</h1>
        <div class="flex">
          <p class="text-center" style="color: var(--text-color)">
            3DXcel came from a shared passion for 3D printing and a desire to
            bridge the gap between technology and education. A group of
            like-minded individuals, including engineers, designers, and
            educators, recognized the transformative power of 3D printing but
            also understood the barriers preventing many people from accessing
            it. With this realization, our organization was born. We started
            with a humble 3D printer in a small workshop and began offering free
            classes to teach the fundamentals of 3D printing and CAD software.
            As word spread and interest grew, so did our resources and impact.
            Through the dedication and support of our volunteers, donors, and
            partners, we expanded our reach and built a strong foundation for
            our mission.
          </p>
        </div>
      </div>
    </div>
    <div class="card w-full flex justify-content-center">
      <div
        class="flex flex-column justify-content-center mt-4 w-9 p-3 border-round-xl"
        style="background-color: var(--surface-overlay)"
      >
        <h1 class="text-6xl text-center" style="color: #adcbdd">Our Mission</h1>
        <div class="flex flex-row justify-content-center flex-wrap">
          <div
            class="w-18rem h-18rem mr-3 mb-3 border-round-xl flex justify-content-center flex-column hover:shadow-8"
            style="background-color: var(--surface-section)"
          >
            <h2
              class="mb-0 p-3 flex justify-content-center"
              style="color: #adcbdd"
            >
              Courses
            </h2>
            <p class="mt-0 pl-3 pr-3 flex text-center" style="color: #ffff">
              Providing free 3D printing and CAD classes: We offer comprehensive
              courses and workshops that teach the fundamentals of 3D printing
              and CAD software. Our experienced instructors guide participants
              through the entire process, from designing a model to printing a
              physical object.
            </p>
          </div>
          <div
            class="w-18rem h-18rem mr-3 mb-3 border-round-xl flex justify-content-center flex-column hover:shadow-8"
            style="background-color: var(--surface-section)"
          >
            <h2
              class="mb-0 p-3 flex justify-content-center"
              style="color: #adcbdd"
            >
              Access
            </h2>
            <p class="mt-0 pl-3 pr-3 flex text-center" style="color: #ffff">
              Offering free access to 3D printing technology: We maintain a
              dedicated space equipped with state-of-the-art 3D printers, where
              individuals can bring their designs to life at no cost. By
              removing financial barriers, we ensure that anyone with a vision
              can turn it into a tangible reality.
            </p>
          </div>
          <div
            class="w-18rem h-18rem mr-3 mb-3 border-round-xl flex justify-content-center flex-column hover:shadow-8"
            style="background-color: var(--surface-section)"
          >
            <h2
              class="mb-0 p-3 flex justify-content-center"
              style="color: #adcbdd"
            >
              Community
            </h2>
            <p class="mt-0 pl-3 pr-3 flex text-center" style="color: #ffff">
              We believe in the power of collaboration and knowledge-sharing.
              Through our community initiatives, we provide a platform for
              individuals to connect, exchange ideas, and learn from one
              another. Together, we can push the boundaries of what is possible
              with 3D printing.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
