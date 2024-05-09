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
            axios.get("https://api.themoviedb.org/3/search/tv",{
                params: paramsobj
            }).then((resp) => {
                this.store.arraySerie = resp.data.results;
                console.log("series",this.store.arraySerie);
                this.store.searchQuery="";
            });
            axios.get("https://api.themoviedb.org/3/search/movie",{
                params: paramsobj
            }).then((resp) => {
                this.store.arrayFilm = resp.data.results;
                console.log("film",this.store.arrayFilm);
            });
        },

    }
}
</script>

<template>

<AppHeader @searchFilm="SearchFilmSeries"/>
<AppMain/>
</template>

<style lang="scss">

</style>