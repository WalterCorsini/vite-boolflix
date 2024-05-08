<script>
export default {
    props:{
        cardObj: Object,
    }
}
</script>

<template>
    <div class="card-container">
        
        <img :src="`https://image.tmdb.org/t/p/w342${cardObj.poster_path}`" alt="">
        <!-- {{ cardObj.poster_path }} -->
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variable" as *;
@use "../style/partials/mixin" as *;
.card-container{
    height: 100%;
    img{
        min-height: 100%;
    }
}
</style>