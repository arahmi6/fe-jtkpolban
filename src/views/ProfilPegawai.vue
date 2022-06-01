<template>
  <div id="profilpegawai">
    <Header></Header>
    <div class="d-flex">
      <AboutPanel></AboutPanel>
      <div id="profiles">
        <div id="judul">{{ title }}</div>
        <div id="tanggals">21 April 2022</div>
        <v-card style="margin-top: 2rem">
          <div class="d-flex">
            <div
              style="padding: 1rem"
            >
              <v-img
                v-bind:src="require('@/assets/blank_profile_pic.png')"
                max-height="200"
                max-width="200"
                id="pegawai_pict"
              ></v-img>
              <v-card-actions>
                <v-btn text @click="show = !show">
                  {{ show ? "Lihat Lebih Sedikit" : "Lihat Lebih Banyak" }}
                </v-btn>
              </v-card-actions>
            </div>
            <div style="padding-left: 5rem; padding-top: 1rem;" id="cat">{{cat}}</div>
            <div style="padding-left: 5rem; padding-top: 1rem; margin-right: 5rem;" id="cat">{{catval}}</div>
          </div>

          <v-expand-transition>
            <div v-show="show">
              <v-card-text id="expand_content">
                {{ expand_content }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import AboutPanel from "../components/about/AboutPanel.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    AboutPanel,
  },
  data() {
    return {
      title: "DATA DOSEN",
      show: false,
      expand_content:
        "KEAHLIAN\n1. Lorem ipsum dolor sit amet\n2. Lorem ipsum dolor sit amet\n3. Lorem ipsum dolor sit amet\nKelompok Bidang Keahlian (KBK)\n1. Lorem ipsum dolor sit amet\n2. Lorem ipsum dolor sit amet\n3. Lorem ipsum dolor sit amet\nMATA KULIAH YANG DIAMPU\n1. PROYEK 3 : Proyek Pengembangan Aplikasi Enterprise\n2. Matematika Terapan 2\nPENGALAMAN\n1. Penerimaan Pembelajar terhadap Penggunaan Scrimba sebagai Multimedia Pembelajaran Interaktif\n    Jenis produk              : Penelitian\n    Penyandang Dana    : Pribadi\n    Tahun                          : 2021\n2. Artificial Intelligence for Workout Game\n    Jenis produk              : Penelitian\n    Penyandang Dana    : Polban\n    Tahun                          : 2021\nPUBLIKASI PENELITIAN\n 1. Lorem ipsum dolor sit amet\n     Penelitian                  : Lorem ipsum dolor sit amet\n     Publikasi                    : SINTA\n     Tahun                         : 2021",
        cat: "Nama\nNIP\nJenis Kelamin\nJabatan Fungsional\nPendidikan Tertinggi\nStatus Ikatan Kerja\nStatus Aktivitas\nEmail",
        catval: ":	JONNER HUTAHAEAN\n:	131651375\n:	Laki-Laki\n:	Lektor\n:	S2\n:	Dosen Tetap\n:	Aktif\n: +62 8XX-XXXX-XXX"
    };
  },
};
</script>

<style>
#profilpegawai {
  font-family: "Spectral";
}

#sidenav {
  margin: 0% !important;
  padding: 0%;
}

#profile_pegawai {
  width: 100%;
}

#expand_content {
  white-space: pre-wrap;
}

#cat{
    white-space: pre-wrap;
}
</style>
