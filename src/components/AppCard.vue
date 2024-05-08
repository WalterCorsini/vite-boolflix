<script>
export default {
    props:{
        cardObj: Object,
    }
}
</script>

<template>
    <div class="container">
        <img :src="`https://image.tmdb.org/t/p/w342${cardObj.poster_path}`" alt="">
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variable" as *;
@use "../style/partials/mixin" as *;

</style>