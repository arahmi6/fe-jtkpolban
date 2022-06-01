<template>
  <div id="kurikulum">
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
            <p>   
              Struktur Mata Kuliah per Semester
            </p>
            <pdf src="./static/Kurikulum.pdf"></pdf>
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
import pdf from 'vue-pdf'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    AboutPanel,
    pdf
  },
  data: () => ({
    judul: "KURIKULUM",
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

</style>
