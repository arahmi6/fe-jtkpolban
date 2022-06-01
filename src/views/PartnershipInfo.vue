<template>
  <div id="partnership">
    <Header></Header>

    <div class="partnership">


        <div class="partnership-info">
            <p id="judul-kerjasama">INFO KERJASAMA</p>
            <PartnershipInfo></PartnershipInfo>
        </div>

        <div class="partnership-dokumentasi">  
            <p id="judul-kerjasama-2">Dokumentasi</p>
            <PartnershipDocumentation></PartnershipDocumentation>
        </div>

        <div class="partnership-list">  
            <p id="judul-kerjasama-2">Mitra Kami</p>
            <PartnerList></PartnerList>
        </div>

        <div class="">
            <v-btn
                @click="$router.push('/partnership-submission')"
                dark
                class="rounded-0 ml-4 justify-center"
                color="#19396C"
            >Ajukan Kerja Sama</v-btn>
        </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
/* eslint-disable */
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import PartnershipDocumentation from '../components/partnership/PartnershipDocumentation.vue'
import PartnerList from '../components/partnership/PartnerList.vue'
import PartnershipInfo from '../components/partnership/PartnershipInfo.vue'
import http from "./../http.js";

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    PartnerList,
    PartnershipDocumentation,
    PartnershipInfo
  },
  data: () => ({

  }),

  

  
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#judul-kerjasama{
  font-size: 200%;
  font-weight: 500;
  text-align: left;
}

#judul-kerjasama-2{
  font-size: 120%;
  font-weight: 500;
  text-align: left;
  margin-top: 2%;
}

.partnership{ 
  margin-left: 8%;
  margin-top: 3%;
  margin-right: 8%;
}

.btn-ajukan-kerjasama{ 
 
}

#image-partnership-info{ 

}

</style>
