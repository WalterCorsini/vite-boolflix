<script>
import AppCard from "./AppCard.vue";
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
}
</script>

<template>
    <div class="container-film-serie">
    <span v-if="store.arrayFilm.length > 0">Film</span>
    <div class="container" v-show="this.store.arrayFilm.length !== 0">
        <div v-show ="curFilm.poster_path" class="card" v-for="curFilm,index in store.arrayFilm">
            <AppCard :cardObj="curFilm" />
        </div>
    </div>
    <span v-if="store.arrayFilm.length > 0">Series</span>
    <div class="container" v-show="this.store.arrayFilm.length !== 0">
        <div v-show ="curSerie.poster_path" class="card" v-for="curSerie in store.arraySerie">
          <AppCard :cardObj="curSerie" />
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