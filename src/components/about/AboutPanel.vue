<template>
  <div class="about-panel d-flex">

      <v-card class="mt-3 ml-3" width="340">
      <v-list>
        <v-list-group :value="true">
          <template v-slot:activator>
            <v-list-item-title>Profil</v-list-item-title>
          </template>

          <v-list-item link @click="$router.push('/profile-jurusan')">
            <v-list-item-title
              >Jurusan Teknik Komputer dan Informatika</v-list-item-title
            >
          </v-list-item>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Program Studi</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="([title, route], i) in cruds"
              :key="i"
              link
              @click="$router.push(route)"
            >
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list-group>

        <v-list-item link>
          <v-list-item-title>Kurikulum</v-list-item-title>
        </v-list-item>

        <v-list-item link>
          <v-list-item-title>Sarana Prasarana</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>

    <div id="divider">
      <v-divider vertical class="divider"></v-divider>
    </div>
    
    
  </div>
</template>

<script>
export default {
  data: () => ({
    cruds: [
      ["D3 Teknik Informatika", "profile-d3"],
      ["D4 Teknik Informatika", "profile-d4"],
    ],
  }),
};
</script>

<style>
.verticalLine {
  border-left: 8px solid #e5842d;
  height: 100%;
}

.expansion-panel {
  margin: 3%;
}

#divider {
  padding-top: 3%;
  padding-left: 1rem;
  margin-top: 0%;
  margin-left: 0%;
  margin-bottom: 0%;
  margin-right: 3rem;
}

.divider{
  height: 100%;
  border-width: 5px;
  border-color: #E5842D !important;
}

.about-panel {
  margin: 0%;
}

</style>
