import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import Agenda from './../views/Agenda.vue'
import BeritaPortal from './../views/BeritaPortal.vue'
import PartnershipSubmission from './../views/PartnershipSubmission.vue'
import GalleryDetail from './../views/GalleryDetail.vue'
import ProfileJurusan from './../views/ProfileJurusan.vue'
import ProfileD3 from './../views/ProfileD3.vue'
import ProfileD4 from './../views/ProfileD4.vue'
import PartnershipInfo from './../views/PartnershipInfo.vue'
import Kurikulum from './../views/Kurikulum.vue'
import SaranaPrasarana from './../views/SaranaPrasarana.vue'
import BeritaDetail from './../views/BeritaDetail.vue'
import PrestasiDetail from './../views/PrestasiDetail.vue'
import Galeri from './../views/GaleriPortal.vue'
import ProfilPegawai from './../views/ProfilPegawai.vue'
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
    path: "/berita",
    name: "Berita JTK Polban",
    component: BeritaPortal,
  },
  {
    path: "/partnership-submission",
    name: "Partnership",
    component: PartnershipSubmission,
  },
  {
    path: "/gallery-detail/:id",
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
    path: "/partnership-info",
    name: "Partnership Info",
    component: PartnershipInfo,
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
  {
    path: "/berita-detail",
    name: "Detail Berita",
    component: BeritaDetail,
  },
  {
    path: "/prestasi-detail",
    name: "Detail Prestasi",
    component: PrestasiDetail,
  },
  {
    path: "/galeri",
    name: "Galeri",
    component: Galeri,
  },
  {
    path: "/profil-pegawai",
    name: "Profil Pegawai",
    component: ProfilPegawai,
  }
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
