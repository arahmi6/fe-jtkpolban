<template>
  <v-card flat id="prestasi-panel" class="py-7">
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
</style>