<template>
  <div>
    <v-card flat class="my-5">
      <p></p>
      <v-row>
        <v-col>
          <h2>BERITA</h2>
        </v-col>
        <v-col>
          <a
            href="#"
            class="text-decoration-underline"
          >Lihat semua</a>
        </v-col>
        <v-col cols="9"></v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="item in 5"
          :key="item"
        >
          <v-card
            flat
            link
            class="rounded-0 mx-auto"
            max-width="190"
          >
            <v-img
              height="120"
              v-bind:src="`${ beritas[item].image }`"
            ></v-img>
            <v-card-text class="px-0 pt-0 pb-2">{{ beritas[item].tanggal }} {{ beritas[item].bulan }} {{ beritas[item].tahun }}</v-card-text>
          
            <v-card-text class="px-0">
              <v-row
                class="mx-0"
              ></v-row>
              <div><strong>{{ beritas[item].Title }}</strong></div>
            </v-card-text>
          </v-card>
        </v-col>
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
    months: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', "Desember"],
    beritas: [],
  }),

  mounted() {
    const url = "/beritas" ;
    http.get(url).then(response => {
      this.beritas = response.data;
      for(let i=0; i<this.beritas.length; i++){
        console.log("MASUK");
        let link = process.env.VUE_APP_CMS_API;
        link = link.slice(0, -1);
        let tanggal_str = new Date(this.beritas[i].updatedAt);
        this.beritas[i].tanggal = tanggal_str.getDate();
        this.beritas[i].bulan = this.months[tanggal_str.getMonth()];   
        this.beritas[i].tahun = tanggal_str.getFullYear(); 
        this.beritas[i].image = link.concat(this.beritas[i].Image.url);
      }
    });
  }
}
</script>