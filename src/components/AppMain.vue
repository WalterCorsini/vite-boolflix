<script>
import AppCard from "./AppCard.vue";
import axios from "axios";
import { store } from '../store';
import { popScopeId } from "vue";
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
        searchCastSerie(curElem, curInd) {
            let FioSe = "";

            // condition api for film or series...
            if (curElem.title) {
                FioSe = "movie";
            } else {
                FioSe = "tv"
            }
            // condition api for film or series...

            // show or not pop up
            curElem.popup = !curElem.popup;
            if (curInd !== this.store.activePopup) {
                if (FioSe = "movie") {
                    this.store.arrayFilm[this.store.activePopup].popup = false;
                } else {
                    this.store.arraySerie[this.store.activePopup].popup = false;
                }
                curElem.popup = true;
                store.activePopup = curInd;
            }
            // show or not pop up


            console.log(curElem.id);
            const paramsobj = {
                api_key: this.store.apiKey,
            }
            axios.get(`https://api.themoviedb.org/3/${FioSe}/${curElem.id}/credits`, {
                params: paramsobj
            }).then((resp) => {
                this.store.listCastArray = resp.data.cast;
                console.log(resp.data.cast);
            });
            // condition api for film or series...


        }
    }
}
</script>

<template>
    <div class="container-film-serie">
        <div v-if="store.arrayFilm.length > 0">
            <div class="header-container">
                <span>Film</span>
                <span>Trovati {{ store.arrayFilm.length }} Elementi</span>
            </div>
            <div class="container" v-show="this.store.arrayFilm.length !== 0">
                <div v-show="curFilm.poster_path" class="card" v-for="curFilm, index in store.arrayFilm">
                    <AppCard @cast="searchCastSerie" :cardObj="curFilm" :ind="index" />
                </div>
            </div>
        </div>
        <div v-if="store.arraySerie.length > 0">
            <div class="header-container">
                <span>Serie</span>
                <span>Trovati {{ store.arrayFilm.length }} Elementi</span>
            </div>
            <div class="container" v-show="this.store.arrayFilm.length !== 0">
                <div v-show="curSerie.poster_path" class="card" v-for="curSerie, index in store.arraySerie">
                    <AppCard @cast="searchCastSerie" :cardObj="curSerie" :ind="index" />
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

    .header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        span:last-child {
            font-size: 23px;
        }
    }

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

            @media screen and (max-width: 968px) {
                width: calc(100% / 3 - 20px / 3);
            }

            @media screen and (max-width: 768px) {
                width: calc(100% / 2 - 10px);
            }
        }
    }
}
</style>