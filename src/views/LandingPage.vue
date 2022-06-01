<template>
  <div id="app">
    <Header></Header>
    <v-row>
      <Banner></Banner>
    </v-row>
    <v-row class="mx-5">
      <v-col class="" cols="9"><Berita></Berita></v-col>
      <v-col class=""><Agenda></Agenda></v-col>
    </v-row>
    <v-row class="ma-0">
      <Prestasi></Prestasi>
    </v-row>
    <v-row>
      <Gallery></Gallery>
    </v-row>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './../components/Header.vue'
import Banner from './../components/Banner.vue'
import Berita from './../components/beranda/BeritaPanel.vue'
import Agenda from './../components/beranda/AgendaPanel.vue'
import Prestasi from './../components/beranda/PrestasiPanel.vue'
import Gallery from '../components/beranda/GalleryPanel.vue'
import Footer from './../components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Banner,
    Berita,
    Agenda,
    Prestasi,
    Gallery,
    Footer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
