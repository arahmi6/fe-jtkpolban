<template>
  <div id="agenda">
    <Header></Header>
    <h1 class="mb-4">AGENDA</h1>

    <div class="mt-4 agendas">
                
                    <v-list class="mt-3 ml-3 mr-3">
                       <v-list-item
                            class="mt-2 "
                            v-for="item in agendas"
                            :key="item"
                            link
                        >
                          <v-card class="mt-3 ml-3 mr-3" >
                            <v-row class="mt-1 mb-1 agenda-card">
                              <v-col cols="auto" id="tanggal-agenda">
                                <p>{{ item.tanggal }}</p>
                                <p>{{ item.bulan }}</p>
                                <p>{{ item.tahun }}</p>
                                 <!-- <p>{{ item.Date }}</p> -->
                              </v-col>

                              <v-col cols="auto">
                                <div class="verticalLine"></div>
                              </v-col>
                                
                              <v-col >
                                <p id="nama-acara">{{ item.Name }}</p>
                                
                                <v-row>
                                  <v-col cols="auto">
                                    <v-icon id="map-marker">mdi-map-marker</v-icon>
                                  </v-col>
                                  <v-col>
                                    <p id="nama-lokasi">{{ item.Location }}</p>
                                  </v-col>
                                </v-row>
                                
                                <p >{{ item.Description }}</p>
                              </v-col>

                            </v-row>
                          </v-card>
                              
                        </v-list-item>
                
                    </v-list>
                    
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
/* eslint-disable */
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import http from "./../http.js";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data: () => ({
      months: ['JAN', 'FEB', 'MAR', 'APR', 'MEI', 'JUN', 'JUL', 'AGS', 'SEP', 'OKT', 'NOV', "DES"],
      agendas: [],
    }),

  mounted() {
    // console.log("MASUK");
    const url = "/agendas" ;
    http.get(url).then(response => {
      this.agendas = response.data;
      for(let i=0; i<this.agendas.length; i++){
        console.log("MASUK");
        let tanggal_str = this.agendas[i].Date;
        this.agendas[i].tanggal = tanggal_str.substring(8);
        this.agendas[i].bulan = this.months[tanggal_str.substring(6,7)];   
        this.agendas[i].tahun = tanggal_str.substring(0,4);   
      }
    });
    
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

h1{
    margin-left: 4%;
    margin-top: 2%;
}

.agendas{
  margin-left: 4%;
  margin-right: 4%;
  
}

.verticalLine {
    border-left: 4px solid #19396C;
    height: 100%;
}

#tanggal-agenda{
  font-size: 230%;
  font-weight: 4000;
  color: #E5842D;
  text-align: center;
  padding-left: 3%;
  padding-right: 3%;
}

#nama-acara{ 
  font-size: 160%;
  color: #19396C;
  font-weight: bold;
}

#nama-lokasi{ 
  font-weight: bold;
  color: #878787;
}

#map-marker{
  color: #FF3D00;
}

.agenda-card{ 
  padding-left: 2%;
  padding-right: 4%;
}
</style>
