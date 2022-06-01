<template>
  <div class="header-panel">
      <v-toolbar flat height="100">
      <v-toolbar-side-icon class="pl-16">
        <v-img
          @click="$router.push('/')"
          v-bind:src="require('@/assets/polban.png')"
          max-height="80"
          max-width="50"
        ></v-img>
        
      </v-toolbar-side-icon>
      <v-toolbar-items>  
      <v-col></v-col>
        <v-app>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                id="tentang"
                text
                color="#19396C"
                v-bind="attrs"
                v-on="on"
                height="100"
              >TENTANG
              <v-icon
                dark
                right
                size="200%"
              >
                mdi-menu-down
              </v-icon>
              </v-btn>
            </template>
            <v-treeview :items="items_about" class="treeview-menu rounded-0">
              <template slot="label" slot-scope="props">
                <div class="treeview-item-text" >
                  <router-link class="treeview-item-text" :to="props.item.to" v-if="props.item.to">{{ props.item.name }}</router-link>
                  <span v-else>{{ props.item.name }}</span>
                </div>
              </template>
            </v-treeview>
          </v-menu>
        </v-app>
        
        <v-col></v-col>
        <v-btn @click="$router.push('berita')"
          text
          color="#19396C"
          >BERITA</v-btn>
        <v-col></v-col>
        <v-btn @click="$router.push('galeri')"
          text
          color="#19396C"
          >GALERI</v-btn>
        <v-col></v-col>
        <v-btn @click="$router.push('tracer-study')"
          text
          color="#19396C"
          >MAHASISWA</v-btn>

        <v-col></v-col>
        <v-app>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                id="lainnya"
                text
                color="#19396C"
                v-bind="attrs"
                v-on="on"
                height="100"
              >LAINNYA
              <v-icon
                dark
                right
                size="200%"
              >
                mdi-menu-down
              </v-icon>
              </v-btn>
            </template>
            <v-treeview :items="items_other" class="treeview-menu">
              <template slot="label" slot-scope="props">
                <div class="treeview-item-text">
                  <router-link class="treeview-item-text" :to="props.item.to" v-if="props.item.to">{{ props.item.name }}</router-link>
                  <span v-else>{{ props.item.name }}</span>
                </div>
              </template>
            
            </v-treeview>
          </v-menu>
        </v-app>
        
      </v-toolbar-items>
      <v-col></v-col>
      <v-col></v-col>
      <!-- <v-text-field
        flat
        class="rounded-0 mt-4"
        solo
        dark
        placeholder="Cari..."
        append-icon="mdi-magnify"
        background-color="#19396C"
      ></v-text-field> -->
      
      <v-col></v-col>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Header',

  data: () => ({
    items_about: [
      {
        id: 1, 
        name: 'Profil',
        children: [
          {
            id: 101,
            name: 'Jurusan Teknik Komputer dan Informatika',
            to: '/profile-jurusan'
          },
          {
            id: 102,
            name: 'Program Studi',
            children: [
              {
                id: 1021,
                name: 'D3 Teknik Informatika',
                to: '/profile-d3'
              },
              {
                id: 1022,
                name:'D4 Teknik Informatika',
                to: '/profile-d4'
              }
            ]
          }
        ]
      },
      {
        id: 2,
        name: 'Kurikulum',
        to:"/kurikulum"
      },
      {
        id: 3,
        name: 'Sarana Prasarana',
        to:"/sarana-prasarana"
      }
    ],

    items_other: [
      {
        id: 1, 
        name: 'Prestasi',
        to:"/prestasi"
      },
      {
        id: 2,
        name: 'Agenda',
        to: '/agenda'
      },
      {
        id: 3,
        name: 'Pegawai',
        to:"/pegawai"
      },
      {
        id: 4,
        name: 'Info Kerjasama',
        to:"/partnership-info"
      },
      {
        id: 5,
        name: 'Pengajuan Kerjasama',
        to:"/partnership-submission"
      },
    ]

  }),
};
</script>

<style>
  ::placeholder {
    color: white!important;
  }

  .header-panel {
    border-bottom: 7px solid #19396C;
  }

  .treeview-menu {
    background:rgba(255, 255, 255, 0.437);
    backdrop-filter: blur(4px);
  }

  .v-menu__content {
    border-radius: 0px !important;
  }

  .treeview-item-text {
    text-decoration: none;
    color: white !important;
  }

  .v-treeview-node__root:hover {
    background: #2A5697;
  }

  .v-treeview-node__root {
    background: #19396C;
    margin-top: 3px;
    padding-left: 0% !important;
  }

  .v-treeview-node__toggle {
    color: white !important;
  }
</style>