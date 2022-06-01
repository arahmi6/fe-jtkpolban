<template>
  <div id="saranaprasarana">
    <Header></Header>

    <div class="content">
      <v-row >
        <v-col cols="4">
          <AboutPanel></AboutPanel>
        </v-col>
        <v-col class="pa-0 ma-0">
          <h1 class="mx-0">SARANA DAN PRASARANA</h1>

          <h3 class="mt-8">Sarana</h3>
          <v-sheet
            class="mx-auto"
            max-width="920"
          >
            <v-slide-group
              v-model="model"
              class="pa-0"
              show-arrows
            >
              <v-slide-item
                v-for="item in facilities"
                :key="item"
                v-slot="{ active, toggle }"
              >
                <v-card 
                  @click="toggle"
                  flat
                >
                  <v-img
                    :color="active"
                    class="ma-4 pa-0 rounded-0"
                    max-height="155"
                    max-width="250"
                    v-bind:src="`${item.image}`"
                  >
                  </v-img>
                  <v-card-text class="mt-n5 center-panel-text">{{ item.Name }}</v-card-text>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>

          <h3 class="mt-8">Prasarana</h3>
          <v-sheet
            class="mx-auto"
            max-width="920"
          >
            <v-slide-group
              v-model="model"
              class="pa-0"
              show-arrows
            >
              <v-slide-item
                v-for="item in infrastructures"
                :key="item"
                v-slot="{ active, toggle }"
              >
                <v-card 
                  @click="toggle"
                  flat
                >
                  <v-img
                    :color="active"
                    class="ma-4 pa-0 rounded-0"
                    max-height="155"
                    max-width="250"
                    v-bind:src="`${item.image}`"
                  >
                  </v-img>
                  <v-card-text class="mt-n5 center-panel-text">{{ item.Name }}</v-card-text>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
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
import http from "./../http.js";

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    AboutPanel,
  },
  data: () => ({
    facilities:[],
    infrastructures:[],
    
  }),
  mounted() {
    const url = "/facilities" ;
    http.get(url).then(response => {
      this.facilities = response.data;
      for(let i=0; i<this.facilities.length; i++){
        console.log("MASUK");
        let link = process.env.VUE_APP_CMS_API;
        link = link.slice(0, -1);
        this.facilities[i].image = link.concat(this.facilities[i].Image.url);
      }
    });

    const url2 = "/infrastructures";
    http.get(url2).then(response => {
      this.infrastructures = response.data;
      for(let i=0; i<this.infrastructures.length; i++){
        console.log("MASUK");
        let link = process.env.VUE_APP_CMS_API;
        link = link.slice(0, -1);
        this.infrastructures[i].image = link.concat(this.infrastructures[i].Image.url);
      }
    });
  }
}
</script>

<style>