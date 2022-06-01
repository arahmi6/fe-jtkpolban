<template>
    <div
        class="mx-auto"
        >
        <v-list-item class="partnership-info-item">
            <v-img 
                id="image-partnership-info"
                v-bind:src="require('@/assets/kerja-sama.jpg')"      
                max-width="40%"
                max-height="100%"
                float="left"
            ></v-img>
            <v-list-item-content id="description">
            <p >   
                {{description}}
            </p>
            </v-list-item-content>
        </v-list-item>
        </div>

</template>

<script>
import http from "./../../http.js";

export default {
  data: () => ({
   description: ""
  }),

  mounted() {
    const url = "/partnership-info" ;
  
    http.get(url).then(response => {
      this.description = response.data.Description;
    });
  },
};
</script>

<style>
#description{ 
    margin-left: 2%;
    margin-right: 2%;
}

.partnership-info-item{ 
    padding: 2%;
}
</style>