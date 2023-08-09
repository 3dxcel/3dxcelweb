<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

console.log(route.fullPath);
const active = ref(3);
const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
    to: "/home",
  },

  {
    label: "About",
    icon: "pi pi-user",
    to: "/about",
  },
  {
    label: "Courses",
    icon: "pi pi-book",
    items: [
      {
        label: "All Courses",
        icon: "pi easy",
        to: "/allcourses",
      },
      {
        label: "Beginner",
        icon: "pi easy",
        to: "/beginner",
      },
      {
        label: "Intermediate",
        icon: "pi medium",
        to: "/intermediate",
      },
      {
        label: "Hard",
        icon: "pi hard",
        to: "/advanced",
      },
    ],
  },
  {
    label: "Team",
    icon: "pi pi-users ",
    to: "/team",
  },
  {
    label: "Get Involved",
    icon: "pi pi-user-plus",
    to: "getinvolved",
  },
]);
const mobileActive = ref(true);
watch(mobileActive, () => {
  console.log(mobileActive.value);
});
const redirect = (place) => {
  if (place === "instagram") {
    location.replace("https://www.instagram.com/3dxcel/");
  } else if (place === "mail") {
    location.replace("mailto:3dxcel@gmail.com");
  } else {
    location.replace("tel:9259151421,4693899898");
  }
};
</script>

<template>
  <div class="card flex justify-content-center relative z-2">
    <Menubar
      class="flex container w-full h-5rem justify-content-between align-items-center"
      :model="items"
      v-model:mobileActive="mobileActive"
      :pt="{ end: { class: 'mr-4 ml-0' } }"
    >
      <template #start>
        <div class="w-full">
          <img
            alt="logo"
            class="w-10rem"
            src="/public/logo.png"
            style="cursor: pointer"
            @click="router.push('home')"
          />
        </div>
      </template>
      <template #end>
        <div class="w-4rem m-1 flex flex-row">
          <i
            class="pi pi-instagram mr-3"
            style="cursor: pointer"
            @click="redirect('instagram')"
          ></i>
          <i
            class="pi pi-envelope mr-3"
            style="cursor: pointer"
            @click="redirect('mail')"
          ></i>
          <i
            class="pi pi-phone mr-3"
            style="cursor: pointer"
            @click="redirect('phone')"
          ></i>
        </div>
      </template>
    </Menubar>
  </div>
</template>
<style scoped></style>
