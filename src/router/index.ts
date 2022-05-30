import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import Agenda from './../views/Agenda.vue'
import PartnershipSubmission from './../views/PartnershipSubmission.vue'
import GalleryDetail from './../views/GalleryDetail.vue'
import ProfileJurusan from './../views/ProfileJurusan.vue'
import ProfileD3 from './../views/ProfileD3.vue'
import ProfileD4 from './../views/ProfileD4.vue'
import InfoKerjaSama from './../views/InfoKerjaSama.vue'
import Kurikulum from './../views/Kurikulum.vue'
import SaranaPrasarana from './../views/SaranaPrasarana.vue'
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
    path: "/profile-jurusan",
    name: "Profile Jurusan",
    component: ProfileJurusan,
  },
  {
    path: "/profile-d3",
    name: "Profile D3 Teknik Informatika",
    component: ProfileD3,
  },
  {
    path: "/profile-d4",
    name: "Profile D4 Teknik Informatika",
    component: ProfileD4,
  },
  {
    path: "/infokerjasama",
    name: "Info Kerja Sama",
    component: InfoKerjaSama,
  },
  {
    path: "/kurikulum",
    name: "Kurikulum",
    component: Kurikulum,
  },
  {
    path: "/sarana-prasarana",
    name: "Sarana dan Prasarana",
    component: SaranaPrasarana,
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

const DEFAULT_TITLE = "JTK POLBAN";
router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.name || DEFAULT_TITLE;
  });
});

export default router;
