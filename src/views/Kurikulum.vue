<template>
  <div id="kurikulum">
    <Header></Header>
    <div class="d-flex">
      <AboutPanel></AboutPanel>
      <div>
        <div id="judul">Kurikulum</div>
        <div id="tanggals">21 April 2022</div>
        <br />
        <div style="font-style: normal; font-weight: 700; font-size: 20px">
          Struktur Mata Kuliah per Semester
        </div>
        <div>
          <pdf
            v-for="i in numPages"
            :key="i"
            :src="src"
            :page="i"
            style="display: inline-block; width: 100%"
          ></pdf>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
/* eslint-disable */
import Header from "../components/Header.vue";
import AboutPanel from "../components/about/AboutPanel.vue";
import Footer from "../components/Footer.vue";
import pdf from "vue-pdf";

var loadingTask = pdf.createLoadingTask(
  "./sample.pdf"
);

export default {
  name: "App",
  components: {
    Header,
    Footer,
    AboutPanel,
    pdf,
  },
  data: () => ({
    judul: "KURIKULUM",
    tanggal: "21 April 2022",
    src: loadingTask,
    numPages: undefined,
  }),
  mounted() {
    this.src.promise.then((pdf) => {
      this.numPages = pdf.numPages;
    });
  },
};
</script>

<style>
#kurikulum {
  font-family: "Spectral";
}
* {
  margin: 0;
  padding: 0;
}

h1 {
  text-align: left;
}

.content {
  margin: 1%;
  margin-top: 3%;
  margin-right: 8%;
}

#tanggal {
  font-weight: bolder;
}
</style>
