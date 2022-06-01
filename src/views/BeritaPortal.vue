<template>
	<div class="ma-0 pa-0">
		<Header></Header>
		<div class="mb-7">
			<h1>BERITA</h1>
		</div>
		<v-row class="card-container">
			<v-col
				v-for="item in beritas"
				:key="item"
				cols="4"
			>
				<v-card
            flat
            link
            class="rounded-0 mx-auto my-2"
						max-width="350"
          >
            <v-img
              max-height="200"
              v-bind:src="`${ item.image }`"
            ></v-img>
						<div class="title-card-portal">
							<v-tooltip bottom color="#19396C">
								<template v-slot:activator="{ on, attrs }">
									<span
										v-bind="attrs" v-on="on"
									>
									<v-card-text class="px-0 pt-1 pb-5 center-panel-text">
										<strong> {{ item.Title }}</strong>
									</v-card-text>
									</span>
								</template>
								<span> {{ item.Title }} </span>
							</v-tooltip>
						</div>
          
            <v-card-text class="px-0 center-panel-text">
              <v-row
                class="mx-0"
              ></v-row>
              <div class="desc-card-portal"> {{ item.Description }}</div>
            </v-card-text>

						<v-card-text class="pa-0 center-panel-text">{{ item.tanggal }} {{ item.bulan }} {{ item.tahun }}</v-card-text>
          </v-card>
			</v-col>
		</v-row>
		<div>
			<v-pagination
				v-model="page"
				:length="10"
				:total-visible="6"
				circle
			>
			</v-pagination>
		</div>
		<Footer></Footer>
	</div>
	
</template>

<script>
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
		months: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', "Desember"],
    beritas:[],
		page: 1,
	}),

	mounted() {
    const url = "/beritas" ;
    http.get(url).then(response => {
      this.beritas = response.data;
      for(let i=0; i<this.beritas.length; i++){
        console.log("MASUK");
        let link = process.env.VUE_APP_CMS_API;
        link = link.slice(0, -1);
        let tanggal_str = new Date(this.beritas[i].updatedAt);
        this.beritas[i].tanggal = tanggal_str.getDate();
        this.beritas[i].bulan = this.months[tanggal_str.getMonth()];   
        this.beritas[i].tahun = tanggal_str.getFullYear(); 
        this.beritas[i].image = link.concat(this.beritas[i].Image.url);
      }
    });
  }
}
</script>

<style>
.card-container {
	margin-left: 15%;
	margin-right: 15%;
	margin-bottom: 10%;
}

.title-card-portal {
	text-overflow: ellipsis; 
	overflow: hidden; 
	white-space: nowrap;
}

.desc-card-portal {
	overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 3; /* number of lines to show */
           line-clamp: 3; 
   -webkit-box-orient: vertical;
}
</style>
