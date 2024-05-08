<script>
import { computed } from 'vue';

export default {
    data(){
        return{
            number: 0,
        }
    },
    props:{
        cardObj: Object,
    },
    computed:{
        Image() {
            return `https://image.tmdb.org/t/p/w342${this.cardObj.poster_path}`;
        },
        titleFilm(){
            return `${this.cardObj.original_title}`;
        },

        language() {
            switch(this.cardObj.original_language){
                case "en":
                    return "english";break;
                case "es":
                    return "espanol";break;
                case "fr":
                    return "francais";break;
                case "it":
                    return "Italiano";break;
            }
        },
        valutation(){
            this.number = Math.round(Math.round(this.cardObj.vote_average)/2);
            console.log(this.number);
            return this.number;
        },
    },
}
</script>

<template>
    <div class="card-container">
        <div class="front-card">
            <img :src="`${Image}`" alt="">
        </div>
        <div class="back-card">
            <span>Titolo: {{ titleFilm }}</span>
            <span>Lingua: {{ language }}</span>
            <span v-if="`${valutation}` == 1">Voto:
                <i class="fa-solid fa-star"></i>
            </span>
            <span v-else-if="`${valutation}` == 2">Voto:
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </span>
            <span v-else-if="`${valutation}` == 3">Voto:
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </span>
            <span v-else-if="`${valutation}` == 4">Voto:
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </span>
            <span v-else-if="`${valutation}` == 5">Voto:
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </span>
            <span v-else>Voto: non classificato
            </span>

        </div>
    </div>
    
</template>

<style lang="scss" scoped>
@use "../style/partials/variable" as *;
@use "../style/partials/mixin" as *;
.card-container{
    position: relative;
    height: 80%;
    width: 100%;
    .front-card,
    .back-card{
        height: 100%;
        width: 100%;
    }
    img{
        height: 100%;
    }
    .back-card{
        font-size: 13px;
        opacity: 0;
    }
    &:hover{
        transition: 1s;
        background-color: $white;
        .front-card{
            transform: rotateY(180deg);
            transition: 1s;
            opacity: 0;
        }
        .back-card{
            opacity: 1;
            transition: 2s;
            position: absolute;
            top: 0;
            left: 0;
        }
    }
    span{
        display: block;
    }
    span:nth-child(3){
        position: absolute;
        bottom: 5px;
        right: 5px;
    }
}
</style>