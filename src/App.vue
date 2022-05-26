<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
// import "./assets/tailwind.css";
// import "leaflet/dist/leaflet.css";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
});
</script>
