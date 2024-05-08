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
    <div class="container" v-show="this.store.arrayFilm.length !== 0">
        <span>Film</span>
        <div class="card-container" v-for="curFilm in store.arrayFilm">
            <AppCard :cardObj="curFilm" />
        </div>
        <span>Series</span>
        <div class="card-container" v-for="curSerie in store.arraySerie">
            <AppCard :cardObj="curSerie" />

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variable" as *;
@use "../style/partials/mixin" as *;

</style>