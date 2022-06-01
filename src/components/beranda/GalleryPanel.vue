<template>
  <v-card
    flat
    class="py-7"
    >
    <v-row class="pa-0 ma-0">
      <h2 class="pa-0 ma-0 center-panel-text ">GALLERY</h2>
    </v-row>
    <v-row class="pa-0 ma-0">
      <v-sheet
        class="mx-auto"
        max-width="100%"
      >
        <v-slide-group
          v-model="model"
          class="pa-0"
          active-class="success"
          show-arrows
        >
          <v-slide-item
            v-for="n in 12"
            :key="n"
            v-slot="{ active, toggle }"
          >
            <v-img
              :color="active"
              class="ma-4 pa-0"
              max-height="250"
              max-width="400"
              v-bind:src="`${albums[1].Medias[n].image}`"
              @click="toggle"
            >
            </v-img>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-row>
    <v-row class="ma-0 pa-0">
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
    albums: [],
  }),

  mounted() {
    const url = "/albums" ;
    http.get(url).then(response => {
      this.albums = response.data;
      for(let i=0; i<this.albums[1].Medias.length; i++){
        console.log("MASUK");
        let link = process.env.VUE_APP_CMS_API;
        link = link.slice(0, -1);
        this.albums[1].Medias[i].image = link.concat(this.albums[1].Medias[i].url);
      }
    });
  }
}
</script>


<style>
.center-button {
  display: flex;
  justify-content: center;
  align-items: center;
}

.more-btn {
  border-color: #19396C;
  color: #19396C;
}

.more-btn:hover {
  background: #19396C;
  color: white;
}
</style>