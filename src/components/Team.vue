<script setup>
import { ref } from "vue";
const redirect = (url) => {
  window.location.href = url;
};
</script>

<template>
  <div class="fadein animation-duration-1000 animation-iteration-1">
    <div class="card w-full flex justify-content-center">
      <div
        class="flex flex-column justify-content-center mt-4 w-11 p-3 border-round-xl"
      >
        <h1 class="text-6xl text-center" style="color: #adcbdd">The Team</h1>
        <div class="flex flex-row justify-content-center flex-wrap">
          <div
            class="w-18rem h-25rem mr-5 mb-3 border-round-xl flex justify-content-center flex-column hover:shadow-8 align-items-center"
            style="background-color: #293b54"
          >
            <Avatar
              icon="pi pi-user"
              class="flex justify-content-center mr-2 ml-2 md-2"
              size="xlarge"
              shape="circle"
            />
            <h1
              class="mt-6 mb-0 pl-3 pr-3 flex text-center text-2xl"
              style="color: #ffff"
            >
              Raghav Pottabathini
            </h1>
            <span
              class="mt-2 pl-3 pr-3 flex text-center text-xl"
              style="color: #ffff"
            >
              Founder/CEO
            </span>
            <div class="flex flex-row mt-6 w-full justify-content-center">
              <i
                class="pi pi-linkedin mr-5"
                style="cursor: pointer"
                @click="
                  redirect(
                    'https://www.linkedin.com/in/raghav-pottabathini-406353256/'
                  )
                "
              ></i>
              <i
                class="pi pi-github mr-5"
                style="cursor: pointer"
                @click="redirect('https://github.com/RaghavP2')"
              ></i>
              <i
                class="pi pi-envelope"
                style="cursor: pointer"
                @click="redirect('mailto:pottabathiniraghav@gmail.com')"
              ></i>
            </div>
          </div>
          <div
            class="w-18rem h-25rem mr-5 mb-3 border-round-xl flex justify-content-center flex-column hover:shadow-8 align-items-center"
            style="background-color: #293b54"
          >
            <Avatar
              icon="pi pi-user"
              class="flex justify-content-center mr-2 ml-2 md-2"
              size="xlarge"
              shape="circle"
            />
            <h1
              class="mt-6 mb-0 pl-3 pr-3 flex text-center text-2xl"
              style="color: #ffff"
            >
              Aman Balam
            </h1>
            <span
              class="mt-2 pl-3 pr-3 flex text-center text-xl"
              style="color: #ffff"
            >
              COO
            </span>
            <div class="flex flex-row mt-6 w-full justify-content-center">
              <i
                class="pi pi-linkedin mr-5"
                style="cursor: pointer"
                @click="
                  redirect('https://www.linkedin.com/in/aman-balam-838b32214')
                "
              ></i>
              <i
                class="pi pi-github mr-5"
                style="cursor: pointer"
                @click="redirect('https://github.com/Nama109')"
              ></i>
              <i
                class="pi pi-envelope"
                style="cursor: pointer"
                @click="redirect('mailto:amanbalam2020@gmail.com')"
              ></i>
            </div>
          </div>
          <div
            class="w-18rem h-25rem mr-3 mb-3 border-round-xl flex justify-content-center flex-column hover:shadow-8 align-items-center"
            style="background-color: #293b54"
          >
            <Avatar
              icon="pi pi-user"
              class="flex justify-content-center mr-2 ml-2 md-2"
              size="xlarge"
              shape="circle"
            />
            <h1
              class="mt-6 mb-0 pl-3 pr-3 flex text-center text-2xl"
              style="color: #ffff"
            >
              Omar Aboutaleb
            </h1>
            <span
              class="mt-2 pl-3 pr-3 flex text-center text-xl w-full justify-content-center"
              style="color: #ffff"
            >
              CTO
            </span>
            <div class="flex flex-row mt-6 w-full justify-content-center">
              <i
                class="pi pi-linkedin mr-5"
                style="cursor: pointer"
                @click="redirect('instagram')"
              ></i>
              <i
                class="pi pi-github mr-5"
                style="cursor: pointer"
                @click="redirect('mail')"
              ></i>
              <i
                class="pi pi-envelope"
                style="cursor: pointer"
                @click="redirect('phone')"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
