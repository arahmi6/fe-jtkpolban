import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import Agenda from './../views/Agenda.vue'
import PartnershipSubmission from './../views/PartnershipSubmission.vue'
import GalleryDetail from './../views/GalleryDetail.vue'
import ProfileDetail from './../views/ProfileDetail.vue'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "JTK Polban",
    component: LandingPage,
  },
  {
    path: "/agenda",
    name: "Agenda JTK Polban",
    component: Agenda,
  },
  {
    path: "/partnership-submission",
    name: "Partnership - Geowisata",
    component: PartnershipSubmission,
  },
  {
    path: "/gallery-detail",
    name: "Gallery Detail",
    component: GalleryDetail,
  },
  {
    path: "/profile-detail",
    name: "Profile Detail",
    component: ProfileDetail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: function (to) {
    if (to.hash) {
      return { selector: to.hash };
      //Or for Vue 3:
      //return {el: to.hash}
    } else {
      return { x: 0, y: 0 };
    }
  },
});

const DEFAULT_TITLE = "Geowisata";
router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.name || DEFAULT_TITLE;
  });
});

export default router;
