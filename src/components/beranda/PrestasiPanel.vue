<template>
  <v-card flat id="prestasi-panel" class="py-7">
    <v-row class="pa-0 ma-0 mt-4">
      <h2 class="pa-0 ma-0 center-panel-text">PRESTASI</h2>
    </v-row>
    <v-row class="mx-0">
      <v-col
        v-for="item in 4"
        :key="item"
      >
        <v-card
          flat
          link
          class="rounded-0 mx-auto"
          max-width="280"
        >
          <v-img
            max-height="160"
            v-bind:src="`${achievements[item].image}`"
          ></v-img>
          <v-card-text class="px-0">
            <div><strong>{{ achievements[item].Title }}</strong></div>
          </v-card-text>
        
        </v-card>
      </v-col>
    </v-row>
    <v-row class="ma-0">
      <v-card-action>
        <div class="center-button">
          <v-btn outlined class="more-btn rounded-0">
            Lihat selengkapnya
          </v-btn>
        </div>
      </v-card-action>
    </v-row>
  </v-card>
</template>

<script>
import http from "./../../http.js";

export default {
  name: 'App',
  components: {
    
  },
  data: () => ({
    achievements: [],
  }),

  mounted() {
    const url = "/Achievements" ;
    http.get(url).then(response => {
      this.achievements = response.data;
      for(let i=0; i<this.achievements.length; i++){
        console.log("MASUK");
        let link = process.env.VUE_APP_CMS_API;
        link = link.slice(0, -1);
        this.achievements[i].image = link.concat(this.achievements[i].Image[0].url);
      }
    });
  }
}
</script>

<style>
#prestasi-panel {
  padding-right: 100px;
  padding-left: 100px;
}

.center-panel-text {
  width: 100%;
  text-align:center;
}
</style>