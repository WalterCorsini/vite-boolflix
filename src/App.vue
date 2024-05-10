<script>
import axios from "axios";
import { store } from './store';
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
    components: {
    AppHeader,
    AppMain,
  },
    data(){
        return{
            store,
        }
    },
    created() {
        this.store.randomNumber = Math.floor(Math.random() * this.store.randomWord.length);
        console.log(this.store.randomNumber);
        this.store.currentOption = "default";
        this.searchType();
    },

    methods:{
        SearchFilmSeries(){
                const paramsobj = {
                    api_key: this.store.apiKey,
                    query: this.store.searchQuery,
                }
            const CallMovie = axios.get("https://api.themoviedb.org/3/search/movie",{
                params: paramsobj});
            const CallSerie = axios.get("https://api.themoviedb.org/3/search/tv",{
                params: paramsobj});

            axios
                .all([CallMovie,CallSerie])
                .then((resp) => {
                    this.store.arrayFilm = resp[0].data.results;
                    this.store.arraySerie = resp[1].data.results;
                })
                this.store.searchQuery = "";
            },
        searchType(){
            console.log(this.store.currentOption);
            const paramsobj = {  api_key: this.store.apiKey  }
            if(this.store.currentOption === "default"){
                paramsobj.query = this.store.randomWord[this.store.randomNumber];
                axios.get("https://api.themoviedb.org/3/search/movie",{
                params: paramsobj})
                .then((resp) => {
                    this.store.arrayFilm = resp.data.results;
                });
            } else{
                axios.get(`https://api.themoviedb.org/3/movie/${this.store.currentOption}`,{
                params: paramsobj})
                .then((resp) => {
                    this.store.arrayFilm = resp.data.results;
                });
            }
        }
    }
}
</script>

<template>

<AppHeader @searchFilm="SearchFilmSeries" @changeOption="searchType" />
<AppMain />
</template>

<style lang="scss">

</style>