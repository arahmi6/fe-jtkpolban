<template>
  <div id="footer">
    <v-footer
      dark
      padless
      bottom
    >
      <v-card
        flat
        tile
        width="100%"
        class="white--text"
        color="#19396C"
      >
      <div class="mx-16">
          <v-card-text class="white--text ml-0 pl-0 py-2">
            <strong>Terhubung dengan kami:</strong>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-2"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>
            
          <v-divider class="mt-0 mb-9"></v-divider>
          <v-card-text class="white--text pt-0">
            <v-row>
              <v-col class="ml-0 pl-0">
                <v-row>
                  <div class="mt-1">
                    <table>
                      <tr>
                        <td colspan="2"><h6>PRODI D3 TEKNIK INFORMATIKA</h6></td>
                      </tr>
                      <tr>
                        <td><h1>A</h1></td>
                        <td>Terakreditasi tahun 2018<br>berlaku hingga 09-07-2023</td>
                      </tr>
                    </table>
                  </div>
                </v-row>
                <v-row class="py-3">
                  <h1></h1>
                </v-row>
                <v-row>
                  <div>
                    <table>
                      <tr>
                        <td colspan="2"><h6>PRODI D4 TEKNIK INFORMATIKA</h6></td>
                      </tr>
                      <tr>
                        <td><h1>A</h1></td>
                        <td>Terakreditasi tahun 2021<br>berlaku hingga 21-10-2026</td>
                      </tr>
                    </table>
                  </div>
                </v-row>
              </v-col>
              <v-col>
                <v-row>
                  <strong>Kontak</strong>
                </v-row>
                <v-row>
                  <p>Jurusan Teknik Komputer<br>dan Informatika<br>Politeknik Negeri Bandung</p>
                </v-row>
                <v-row>
                  <p>Jl. Gegerkalong Hilir,<br>Ds. Ciwaruga,<br>Bandung 40559,<br>Jawa Barat<br>Telp. (022) 2013789 ext. 301</p>
                </v-row>
              </v-col>
              <v-col>
                <v-row>
                  <strong>Tautan Langsung</strong>
                </v-row>
                <v-row>
                  <p class="my-0 py-0 cursor-click" link @click="$router.push('/profile-jurusan')">Jurusan</p>
                  <p class="my-0 py-0 cursor-click" link @click="$router.push('/profile-d3')">Program Studi D3</p>
                  <p class="my-0 py-0 cursor-click" link @click="$router.push('/profile-d4')">Program Studi D4</p>
                  <p class="my-0 py-0 cursor-click" link @click="$router.push('/kurikulum')">Kurikulum</p>
                  <p class="my-0 py-0 cursor-click" link @click="$router.push('/berita')">Berita</p>
                  <p class="my-0 py-0 cursor-click" link @click="$router.push('/prestasi')">Prestasi</p>
                  <p class="my-0 py-0 cursor-click" link @click="$router.push('/galeri')">Galeri</p>
                  <p class="my-0 py-0 cursor-click" link @click="$router.push('/sarana-prasarana')">Sarana Prasarana</p>
                  <p class="my-0 py-0 cursor-click" link @click="$router.push('/partnership-info')">Info Kerjasama</p>
                  <p class="my-0 py-0 cursor-click">Tracer Study</p>
                </v-row>
              </v-col>
              <v-col>
                <v-row>
                  <strong>Pilihan Bahasa</strong>
                </v-row>
                <v-row>
                  <div class="my-2">
                    <v-btn
                      color="#2A5697"
                    >
                    <v-img
                      class="mr-2"
                      max-height="12px"
                      max-width="15px"
                      v-bind:src="require('@/assets/id.png')"
                    ></v-img>
                    Indonesia</v-btn>
                  </div>
                </v-row>
                <v-row>
                  <div class="my-2">
                    <v-btn
                      color="#2A5697"
                    >
                    <v-img
                      class="mr-2"
                      max-height="12px"
                      max-width="15px"
                      v-bind:src="require('@/assets/eng.png')"
                    ></v-img>
                    Inggris</v-btn>
                  </div>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
      
          <v-divider></v-divider>
      
          <v-card-text class="white--text text-center">
            <v-row cols="4"></v-row>
            <strong>Copyright © 2022 Jurusan Teknik Komputer dan Informatika Politeknik Negeri Bandung</strong>
          </v-card-text>
      </div>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: [
      "mdi-facebook",
      "mdi-instagram",
      "mdi-twitter",
      "mdi-youtube",
      "mdi-linkedin",
    ],
  }),
};
</script>

<style>
#footer {
  margin-top: 4%;
}

.cursor-click {
  cursor: pointer;
}

table, td, th {
  border: 1px solid;
}

td {
  padding-left:10px;
  padding-right:10px;
  padding-top:3px;
  padding-bottom:3px;
}

table {
  border-collapse: collapse;
}

</style>
