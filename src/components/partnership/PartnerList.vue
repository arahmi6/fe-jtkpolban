<template>
    <div>
        <!-- <v-row
        class="mb-6"
        no-gutters
        v-for=" n in this.partners.length/4"
        :key="n"
        > -->
        <v-col
            v-for="item in this.partners"
            :key="item"
            cols="12"
            sm="8"
        >
        <a :href="item.LinkToPartnerSite">
            <v-img 
                id="image-partnership-info"
                :src="item.PartnerLogo.url"
                :alt="item.PartnerLogo.alternativeText"     
                width="20%"
                max-height="10%"
                float="left"
            ></v-img>
        </a>
        </v-col>
        <!-- </v-row> -->
    </div>
</template>

<script>
import http from "./../../http.js";

export default {
  data: () => ({
   partners: [],
   partner_count: 0,
  }),

  mounted() {
    const url = "/partnerships" ;
  
    http.get(url).then(response => {
      this.partners = response.data;
      this.partner_count = this.partners.length;
      for(let i=0; i<this.partners.length; i++){
            let link = process.env.VUE_APP_CMS_API;
            this.partners[i].PartnerLogo.url = link.concat(this.partners[i].PartnerLogo.url);
        }
    });
  }
};
</script>

<style>

</style>