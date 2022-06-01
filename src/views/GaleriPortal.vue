<template>
    <div id="portal-galeri">
        <Header></Header>
        <div id="album">
            <div id="judul">{{title}}</div>
            
            <br>
            <div id="judulalbum">{{judulalbum}}</div>
            <v-divider id="divider"></v-divider>
            <div id="subalbum" class="d-flex flex-row justify-start">
                <div>
                    <v-img v-bind:src="require('@/assets/berita-1.jpg')" height="100%" id="berita"></v-img>
                </div>
                <div>
                    <v-img v-bind:src="require('@/assets/class.jpeg')" height="100%" id="class"></v-img>
                </div>
            </div>
            <br>
            <div id="judulalbum">{{judulalbum}}</div>
            <v-divider id="divider"></v-divider>
            <div id="subalbum" class="d-flex flex-row justify-start">
                <div>
                    <v-img v-bind:src="require('@/assets/kelas_ai.png')" height="100%" id="berita"></v-img>
                </div>
                <div>
                    <v-img v-bind:src="require('@/assets/prestasi-1.jpg')" height="100%" id="class"></v-img>
                </div>
                <div>
                    <v-img v-bind:src="require('@/assets/berita-1.jpg')" height="100%" id="berita"></v-img>
                </div>
            </div>

        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'App',
    components: {
        Header,
        Footer,
    },
    data() {
        return {
            title: 'JTK Raih Lulusan D3 Terbaik di Wisuda Polban 2020',
            judulalbum: 'Acara JTK',
            }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

#album{
    margin-top: 2%;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 2%;
    font-family: 'Spectral';
    font-size: 24px;
}

#judul{
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
}

#prof_pict{
    border-radius: 50%;
}

#author{
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
}

#tanggals{
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
}

#content{
    padding-right: 5%;
    text-align: justify;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    white-space: pre-wrap;
}

#thumb{
    margin-bottom: 3rem;
}

#divider{
    border-width: 3px;
    border-color: blue !important;
}

#subalbum{
    height: 20rem;
    border: 1px solid black;
    overflow: hidden;
}
</style>