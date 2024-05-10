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
    methods:{
        SearchFilmSeries(){
                const paramsobj = {
                    api_key: this.store.apiKey,
                    query: this.store.searchQuery,
                }
            const CallMovie = axios.get("https://api.themoviedb.org/3/search/tv",{
                params: paramsobj});
            const CallSerie = axios.get("https://api.themoviedb.org/3/search/movie",{
                params: paramsobj});

            axios
                .all([CallMovie,CallSerie])
                .then((resp) => {
                    this.store.arrayFilm = resp[0].data.results;
                    this.store.arraySerie = resp[1].data.results;
                })
            }
        }
    }
</script>

<template>

<AppHeader @searchFilm="SearchFilmSeries"/>
<AppMain />
</template>

<style lang="scss">

</style>