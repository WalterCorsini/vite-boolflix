<script>
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
            alert("ti sento");
        }
    }
}
</script>

<template>

<AppHeader @searchFilm="SearchFilmSeries"/>
<AppMain />
{{ store.searchQuery }}

</template>

<style lang="scss">

</style>