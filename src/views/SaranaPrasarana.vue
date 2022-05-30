<template>
  <div id="saranaprasarana">
    <Header></Header>

    <div class="content">
      <v-row >
        <v-col cols="4">
          <AboutPanel></AboutPanel>
        </v-col>

        <v-col class="auto">
          <h1>{{judul}}</h1>
          <p id="tanggal">{{tanggal}}</p>

          <v-container >
            <!-- <p >   
              Struktur Mata Kuliah per Semester
            </p> -->
          </v-container>
        </v-col>
      </v-row>
    </div>
      
    <Footer></Footer>
  </div>
</template>

<script>
/* eslint-disable */
import Header from '../components/Header.vue'
import AboutPanel from '../components/about/AboutPanel.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    AboutPanel,
  },
  data: () => ({
    judul: "SARANA DAN PRASARANA",
    tanggal: "21 April 2022"
  }),
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

h1{ 
  text-align: left;
}

.content{ 
  margin: 1%;
  margin-top: 3%;
  margin-right: 8%;
}

#tanggal{ 
  font-weight: bolder;
}

p{
  font-weight: lighter;
  text-align: justify;
}

</style>
