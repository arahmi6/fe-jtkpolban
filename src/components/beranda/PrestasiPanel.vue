<template>
  <v-card flat id="prestasi-panel" class="py-0 pb-5">
    <v-row class="pa-0 ma-0 mt-4">
      <h2 class="pa-0 ma-0">PRESTASI</h2>
    </v-row>
    <v-row class="mx-0">
      <v-col><PrestasiCard></PrestasiCard></v-col>
      <v-col><PrestasiCard></PrestasiCard></v-col>
      <v-col><PrestasiCard></PrestasiCard></v-col>
      <v-col><PrestasiCard></PrestasiCard></v-col>
    </v-row>
    <v-row class="ma-0">
      <v-card-action>
        <v-btn outlined id="center-button">
          Lihat selengkapnya
        </v-btn>
      </v-card-action>
    </v-row>
  </v-card>
</template>

<script>
import PrestasiCard from './PrestasiCard.vue'

export default {
  name: 'App',
  components: {
    PrestasiCard
  }
}
</script>

<style>
#prestasi-panel {
  padding-right: 100px;
  padding-left: 100px;
}

#button-center {
  margin: auto; 
}
</style>