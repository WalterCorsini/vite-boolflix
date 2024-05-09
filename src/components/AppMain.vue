<script>
import AppCardFilm from "./AppCardFilm.vue";
import { store } from '../store';
import AppCardSerie from "./AppCardSerie.vue";
export default {
    components: {
        AppCardFilm,
        AppCardSerie,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="container-film-serie">
    <span v-if="store.arrayFilm.length > 0">Film</span>
    <div class="container" v-show="this.store.arrayFilm.length !== 0">
        <div v-show ="curFilm.poster_path" class="card" v-for="curFilm in store.arrayFilm">
            <AppCardFilm :cardObj="curFilm" />
        </div>
    </div>
    <span v-if="store.arrayFilm.length > 0">Series</span>
    <div class="container" v-show="this.store.arrayFilm.length !== 0">
        <div v-show ="curSerie.poster_path" class="card" v-for="curSerie in store.arraySerie">
          <AppCardSerie :cardObj="curSerie" />
        </div>
    </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variable" as *;
@use "../style/partials/mixin" as *;
.container-film-serie{
    padding: 20px;
    display: flex;
    flex-direction: column;
    span{
        text-align: right;
        font-size: 40px;
        color: $white;
    }
    .container{

        display: flex;
        justify-content: flex-start;
        gap: 10px;
        flex-wrap: wrap;
        .card{
            width: calc(100% / 5 - 40px / 5);
        }
    }
}
</style>