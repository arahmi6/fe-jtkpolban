<template>
  <div id="agenda">
    <Header></Header>
    <h2 id="judul-formulir">FORMULIR PENGAJUAN KERJASAMA</h2>
    <div class="partnership-submission">
        <v-container fluid >
          <v-row>
            <v-col cols="4">
              <p class="font-weight-bold">Mitra Kerja Sama</p>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="6"
            >
              <v-text-field
                class="rounded-0 ml-4"
                label="Mitra Kerja Sama"
                solo
                v-model="PartnerName"
              ></v-text-field>
            </v-col>
          </v-row>

           <v-row>
            <v-col cols="4">
              <p class="font-weight-bold"
              >Data PIC Mitra</p>
            </v-col>
          </v-row>

           <v-row>
            <v-col cols="4">
              <p class="sub-data-pic"
              >Nama</p>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="6"
            >
              <v-text-field
                class="rounded-0 ml-4"
                label="Nama"
                solo
                v-model="PIC_Name"
              ></v-text-field>
            </v-col>
          </v-row>

           <v-row>
            <v-col cols="4">
              <p class="sub-data-pic"
              >Nomor Telepon</p>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="6"
            >
              <v-text-field
                class="rounded-0 ml-4"
                label="Nomor telepon"
                solo
                v-model="PIC_PhoneNumber"
              ></v-text-field>
            </v-col>
          </v-row>

           <v-row>
            <v-col cols="4">
              <p class="sub-data-pic"
              >Email</p>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="6"
            >
              <v-text-field
                class="rounded-0 ml-4"
                label="Email"
                solo
                v-model="PIC_Email"
              ></v-text-field>
            </v-col>
          </v-row>


           <v-row>
            <v-col cols="4">
              <p class="sub-data-pic"
              >Lingkup Kerja Sama</p>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="6"
            >
              <v-textarea
                class="rounded-0 ml-4"
                solo
                name="input-7-4"
                label="Lingkup kerjasama antara mitra dengan JTK"
                v-model="ScopeOfCoorperation"
              ></v-textarea>
            </v-col>
          </v-row>

           <v-row>
            <v-col cols="4">
              <p class="sub-data-pic"
              >Rencana Kegiatan</p>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="6"
            >
              <v-textarea
                class="rounded-0 ml-4"
                solo
                name="input-7-4"
                label="Rencana kegiatan kerjasama antara mitra dengan JTK"
                v-model="Plan"
              ></v-textarea>
            </v-col>
          </v-row>

           <v-row>
            <v-col cols="4">
              <p class="sub-data-pic"
              >Surat Permohonan Kerjsama</p>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="6"
            >
               <v-file-input
                  class="rounded-0 ml-4"
                  label="Upload file permohonan kerja sama"
                  outlined
                  dense
                  v-model="FileSubmission"
                ></v-file-input>
            </v-col>
          </v-row>

        </v-container>

      <v-row>
        <v-col></v-col>
        <v-col cols="12" md="auto">
              <v-btn
                @click = submitAction
                dark
                class="rounded-0 ml-4 btn-kirim"
                color="#19396C"
              >Kirim</v-btn>
        </v-col>
        <v-col col lg="2"></v-col>
      </v-row>

    </div>
    <Footer></Footer>
  </div>
</template>

<script>
/* eslint-disable */
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import http from "./../http.js";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data: () => ({
    dialog: false,
    PartnerName: "" ,
    PIC_Name: "" ,
    PIC_PhoneNumber: "" ,
    PIC_Email: "" ,
    ScopeOfCoorperation: "" ,
    Plan: "" ,
    FileSubmission,
  }),
  methods: {
    submitAction(){
      let formData = {
        PartnerName: this.PartnerName ,
        PIC_Name: this.PIC_Name,
        PIC_PhoneNumber: this.PIC_PhoneNumber ,
        PIC_Email: this.PIC_Email,
        ScopeOfCoorperation: this.ScopeOfCoorperation,
        Plan: this.Plan,
        // FileSubmission: this.FileSubmission,
      };
      const jsonData = JSON.stringify(formData);
      const url = "/partner-submissions";
      alert(formData.PartnerName);
      http
        .post(url, formData)
        .then((response) => {
          alert("Pengajuan Kerjasama berhasil dikirim, kami akan menghubungi anda untuk info lebih lanjut");
        })
        .catch((error) => {
          alert("Failed \n" + error);
        });
      
      clear();
      
    },
    clear(){
      this.PartnerName= "" ;
      this.PIC_Name= "" ;
      this.PIC_PhoneNumber= "" ;
      this.PIC_Email= "" ;
      this.ScopeOfCoorperation= "" ;
      this.Plan= "" ;
    }


    }
  }

</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#judul-formulir{
    text-align: center;
    margin-top: 2%;
    margin-bottom: 2%;
}

.partnership-submission{
  margin-top: 4%;
  margin-left: 10%;
  margin-right: 10%;
}

.sub-data-pic{ 
  margin-left: 15%;
  font-weight: 400;
}

</style>
