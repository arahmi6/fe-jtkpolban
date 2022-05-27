<template>
  <v-card>
    <v-row>
      <v-col><PrestasiCard></PrestasiCard></v-col>
      <v-col><PrestasiCard></PrestasiCard></v-col>
      <v-col><PrestasiCard></PrestasiCard></v-col>
      <v-col><PrestasiCard></PrestasiCard></v-col>
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
