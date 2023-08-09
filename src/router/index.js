import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";
import HomeView from "../views/HomeView.vue";
import AllCoursesView from "../views/AllCoursesView.vue";
import BeginnerView from "../views/BeginnerView.vue";
import IntermediateView from "../views/IntermediateView.vue";
import AdvancedView from "../views/HardView.vue";
import TeamView from "../views/TeamView.vue";
import GetInvolvedView from "../views/GetInvolvedView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/home",
      component: HomeView,
    },
    {
      path: "/about",
      component: AboutView,
    },
    {
      path: "/allcourses",
      component: AllCoursesView,
    },
    {
      path: "/beginner",
      component: BeginnerView,
    },
    {
      path: "/intermediate",
      component: IntermediateView,
    },
    {
      path: "/advanced",
      component: AdvancedView,
    },
    {
      path: "/team",
      component: TeamView,
    },
    {
      path: "/getinvolved",
      component: GetInvolvedView,
    },
  ],
});
export default router;
