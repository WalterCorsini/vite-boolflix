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
    data() {
        return {
            store,
        }
    },
    created() {
        store.randomNumber = Math.floor(Math.random() * store.randomWord.length);
        store.currentOption = "default";
        this.searchType();
    },

    methods: {
        SearchFilmSeries() {  // SEARCH FILM WITH INPUT TEXT



            // CREATE PARAMS
            const paramsobj = {
                api_key: store.apiKey,
                query: store.searchQuery,
            }
            if (store.currentRadio == "All" || store.currentRadio === "Serie") {
                axios.get("https://api.themoviedb.org/3/search/tv", {
                    params: paramsobj
                }).then((resp) => {
                    // SAVE INTO ARRAY IN THE GLOBAL STORE
                    store.arraySerie = resp.data.results;
                    console.log(store.arraySerie.length);
                    if(store.currentRadio === "Serie"){
                        store.arrayFilm = [];
                    }
                })
            }
            if (store.currentRadio == "All" || store.currentRadio === "Film") {
                axios.get("https://api.themoviedb.org/3/search/movie", {
                    params: paramsobj
                }).then((resp) => {
                    // SAVE INTO ARRAY IN THE GLOBAL STORE
                    store.arrayFilm = resp.data.results;
                    if(store.currentRadio === "Film"){
                        store.arraySerie = [];
                        console.log("ok");
                    }
                })
            }
            // CLEAR INPUT TEXT
            store.searchQuery = "";
        },

        searchType() {  // SEARCH FILM WITH SELECT OPTION AND START WITH RANDON SEARCH WHEN THE OPTION IS DEFAULT
            // CREATE PARAMS
            const paramsobj = { api_key: store.apiKey }
            // CONTROL IF OPTION IS DEAFAULT
            if (store.currentOption === "default") {
                // SAVE IN TO QUERY PARAMS RANDOM WORD
                paramsobj.query = store.randomWord[store.randomNumber];
                //  CREATE CALL
                const CallMovie = axios.get("https://api.themoviedb.org/3/search/movie", {
                    params: paramsobj
                });
                const CallSerie = axios.get("https://api.themoviedb.org/3/search/tv", {
                    params: paramsobj
                });
                // TWO CALL IN ONE
                axios
                    .all([CallMovie, CallSerie])
                    .then((resp) => {
                        //  SAVE INTO ARRAY IN THE GLOBAL STORE
                        store.arrayFilm = resp[0].data.results;
                        store.arraySerie = resp[1].data.results;
                    })
                //  IF SELECT OPTION IS POPULAR OR TOP_RATED CALL FOR SERIES AND FILM ESLE ONLY FILM
            } else if (store.currentOption === "popular" || store.currentOption === "top_rated") {
                //   chiamata doppia per serie e per film
                const CallMovie = axios.get(`https://api.themoviedb.org/3/movie/${store.currentOption}`, {
                    params: paramsobj
                });
                const CallSerie = axios.get(`https://api.themoviedb.org/3/tv/${this.store.currentOption}`, {
                    params: paramsobj
                });
                // TWO CALL IN ONE
                axios
                    .all([CallMovie, CallSerie])
                    .then((resp) => {
                        // SAVE INTO ARRAY IN THE GLOBAL STORE
                        this.store.arrayFilm = resp[0].data.results;
                        this.store.arraySerie = resp[1].data.results;
                    })
            } else {
                //  CALL ONLY FOR FILM
                axios.get(`https://api.themoviedb.org/3/movie/${this.store.currentOption}`, {
                    params: paramsobj
                })
                    .then((resp) => {
                        this.store.arrayFilm = resp.data.results;
                    });
            }
        },


    }
}
</script>

<template>

    <AppHeader @searchFilm="SearchFilmSeries" @changeOption="searchType" />

    <AppMain />

</template>

<style lang="scss"></style>