<template>
  <div id="agenda">
    <Header></Header>
    <h1>{{gallery_name}}</h1>

    <div class="mt-4 albums">
      <v-list class="mt-3 ml-3 mr-3">
        <v-list-item
          class="mt-2"
          v-for="album in albums"
          :key="album"
        >
          
          <span id="album-name">{{album.Name}}</span>
          
          <v-carousel
            :show-arrows="false"
          >
            <v-carousel-item 
              class="album"
              v-for="(item) in album.Medias"
              :key="item"
              :src="item.url"
              reverse-transition="fade-transition"
              transition="fade-transition"
            >
             
            </v-carousel-item>
          </v-carousel>
                          
                              
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
    Footer,
  },

  data () {
      return {
        gallery_name : "",
        albums:[],
      }
    },
  mounted() {
    const url = "/galleries/6292644335fe1124946d69ce" ;
    let link = process.env.VUE_APP_CMS_API;
    http.get(url).then(response => {
      this.gallery_name = response.data.Name; 
      this.albums = response.data.albums;
      let albums_length = this.partners.length;
      for(let i=0; i<albums_length; i++){
        
        for(let j=0; j<this.albums[i].Medias.length; j++){
          this.albums[i].Medias[j].url = link.concat(this.albums[i].Medias[j].url);
          alert("AAAAAAa");
        }
            
            
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

.album{ 
  margin-top: 3%;
  margin-bottom: 7%;
  min-width: 100%;
}

.albums{ 
  margin-left: 7%;
  margin-right: 7%;
}

#album-name{ 
  font-size: 200%;
  font-weight: 500;
  /* position:absolute; */
}

</style>
