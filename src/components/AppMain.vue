<script>
import { store } from '../store';
export default{
    data(){
        return{
            store,
        }
    }
}
</script>

<template>
<div>
    MAIN
    {{ store.searchQuery }}
</div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variable" as *;
@use "../style/partials/mixin" as *;

div{
    background-color: $darkgrey;
    min-height: 83vh;
}
</style>