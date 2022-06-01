<template>
  <div>
    <v-card flat>
      <p></p>
      <v-row>
        <v-col>
          <h2>AGENDA</h2>
        </v-col>
        <v-col>
          <a
            href="#"
            class="text-decoration-underline"
          >Lihat semua</a>
        </v-col>
        <v-col cols="9"></v-col>
      </v-row>
      <v-row
        class="ma-0 mb-1"
        v-for="item in 4"
        :key="item"
      >
        <v-card
          width="90%"
          class="mx-3"
          flat
          link
        >
          <v-row dense>
            <v-col cols="3" class="mx-0">
              <v-card
                color="#E5842D"
                class="rounded-0"
                dark>
                <div class="text-center">
                  <p class="my-0"><strong  id="date-agenda">{{ agendas[item].tanggal }}</strong></p>
                  <p class="my-0"><strong> {{ agendas[item].bulan }} </strong></p>
                  <p class="my-0 caption">{{ agendas[item].tahun }}</p>
                </div>
              </v-card>
            </v-col>
            <v-col>
              <v-card flat>
                <p class="my-0"><strong>{{ agendas[item].Name.substring(0,28) }}</strong></p>
                <p class="my-0"><v-icon color="red">mdi-map-marker</v-icon>{{ agendas[item].Location }}</p>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import http from "./../../http.js";

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    months: ['JAN', 'FEB', 'MAR', 'APR', 'MEI', 'JUN', 'JUL', 'AGS', 'SEP', 'OKT', 'NOV', "DES"],
    agendas: [],
  }),
  
  mounted() {
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