<template>
  <div id="profiledetail">
    <Header></Header>
    <v-row>
      <Banner></Banner>
    </v-row>

    <div class="content">
      <v-row >
      <v-col cols="4">
        <AboutPanel></AboutPanel>
      </v-col>

      <v-col class="auto">
        <p id="judul-profile">{{judul}}</p>
        <p id="tanggal-profile">{{tanggal}}</p>

        <v-container >
          <v-img 
            id="image-profile"
            v-bind:src="require('@/assets/kelas_ai.png')"      
            width="50%"
            max-height="100%"
            float="left"
          ></v-img>

          <p id="description">   
            {{description}}
          </p>
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
import Banner from '../components/Banner.vue'
import AboutPanel from '../components/about/AboutPanel.vue'
import Footer from '../components/Footer.vue'
import http from "./../http.js";

export default {
  name: 'App',
  components: {
    Header,
    Banner,
    Footer,
    AboutPanel
  },
  data: () => ({
    months: ['JAN', 'FEB', 'MAR', 'APR', 'MEI', 'JUN', 'JUL', 'AGS', 'SEP', 'OKT', 'NOV', "DES"],
    judul: "",
    tanggal: "",
    description: ""
  }),

  mounted() {
    const url = "/profil-jurusan" ;
  
    http.get(url).then(response => {
      this.description = response.data.DeskirpsiJurusan;
      this.judul = response.data.Jurusan;
      let date = response.data.updatedAt;
      this.tanggal = date.getDate() + " " + this.months[date.getMonth()] + " " + date.getYear();
      });
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#judul, #tanggal-profile{ 
  text-align: left;
}

#judul-profile{
  font-size: 200%;
  font-weight: 500;
}

.content{ 
  margin: 1%;
  margin-top: 3%;
  margin-right: 8%;
}

#tanggal-profile{ 
  font-size: 100%;
  font-weight: bolder;
  color: #E5842D;
}

#description{
  text-align: justify;
}

#image-profile{ 
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3%;
  width: 50%;
}

</style>
