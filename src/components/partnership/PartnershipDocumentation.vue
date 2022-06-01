<template>
    <div>
        <v-carousel
                :show-arrows="false"
            >
                <v-carousel-item 
                    class="dokumentasi-kerjasama"
                    v-for="(item,i) in dokumentasi"
                    :key="i"
                    :src="item.url"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                >
                
                </v-carousel-item>
            </v-carousel>
    </div>
</template>

<script>
import http from "./../../http.js";

export default {
  data: () => ({
   dokumentasi: []
  }),

  mounted() {
    const url = "/partnership-info" ;
  
    http.get(url).then(response => {
      this.dokumentasi = response.data.dokumentasi;
        for(let i=0; i<this.dokumentasi.length; i++){
            let link = process.env.VUE_APP_CMS_API;
            this.dokumentasi[i].url = link.concat(this.dokumentasi[i].url);
        }
    });

    
  }
};
</script>

<style>

</style>