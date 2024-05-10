<script>
import AppCard from "./AppCard.vue";
import axios from "axios";
import { store } from '../store';
export default {
    components: {
        AppCard,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        searchCastSerie(curElem) {
            this.store.listCast = curElem;
            console.log(this.store.listCast);
            // qui creiamo chiamata del cast con l'id del film o della serie e la rimandiamo nel pop up di app card tramite store
            const paramsobj = {
                api_key: this.store.apiKey
            }
            axios.get("https://api.themoviedb.org/3/tv/31444/credits?api_key=05a99922144cdd99851de6215573f3f0").then((resp) => {
                // this.store.listCastArray = resp.data.results;
                console.log("series", resp.data.cast);
            });
        }
    }
}
</script>

<template>
    <div class="container-film-serie">
        <div v-if="store.arrayFilm.length > 0">
            <span>Film</span>
            <div class="container" v-show="this.store.arrayFilm.length !== 0">
                <div v-show="curFilm.poster_path" class="card" v-for="curFilm, index in store.arrayFilm">
                    <AppCard @cast="searchCastFilm" :cardObj="curFilm" />
                </div>
            </div>
        </div>
        <div v-if="store.arraySerie.length > 0">
            <span>Series</span>
            <div class="container" v-show="this.store.arrayFilm.length !== 0">
                <div v-show="curSerie.poster_path" class="card" v-for="curSerie in store.arraySerie">
                    <AppCard @cast="searchCastSerie" :cardObj="curSerie" :cardCast="store.listCast" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variable" as *;
@use "../style/partials/mixin" as *;

.container-film-serie {
    padding: 20px;
    display: flex;
    flex-direction: column;

    span {
        text-align: right;
        font-size: 40px;
        color: $white;
    }

    .container {

        display: flex;
        justify-content: flex-start;
        gap: 10px;
        flex-wrap: wrap;

        .card {
            width: calc(100% / 5 - 40px / 5);
        }
    }
}
</style>