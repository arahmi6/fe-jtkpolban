<template>
    <div>
        <v-row>
        <v-col
            cols="3"
            v-for="item in this.partners"
            :key="item"
        >
        <v-card id="partner-list">
            <a :href="item.LinkToPartnerSite">
                <v-img 
                    id="image-partnership-info"
                    :src="item.PartnerLogo.url"
                    :alt="item.PartnerLogo.alternativeText"     
                    float="left"
                ></v-img>
            </a>
        </v-card>
        </v-col>
        </v-row>
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
#partner-list{ 
    padding: 2%;
    width: 65%; 
    margin: 2%;
    height: fit-content;
    align-items: center;
    
}

#image-partnership-info{ 
    max-height: 100px;
    width: auto;
    height: 30%;
}

</style>