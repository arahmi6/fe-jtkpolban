<template>
  <v-card
    flat
    class="py-7"
    >
    <v-row class="pa-0 ma-0">
      <h2 class="pa-0 ma-0 center-panel-text ">GALLERY</h2>
    </v-row>
    <v-row class="pa-0 ma-0">
      <v-sheet
        class="mx-auto"
        max-width="100%"
      >
        <v-slide-group
          v-model="model"
          class="pa-0"
          active-class="success"
          show-arrows
        >
          <v-slide-item
            v-for="n in 15"
            :key="n"
            v-slot="{ active, toggle }"
          >
            <v-card
              :color="active ? undefined : 'grey lighten-1'"
              class="ma-4 rounded-0"
              flat
              height="250"
              width="400"
              @click="toggle"
            >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
              </v-row>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-row>
    <v-row class="ma-0 pa-0">
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

<style>
.center-button {
  display: flex;
  justify-content: center;
  align-items: center;
}

.more-btn {
  border-color: #19396C;
  color: #19396C;
}

.more-btn:hover {
  background: #19396C;
  color: white;
}
</style>