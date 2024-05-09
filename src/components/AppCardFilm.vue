<script>
import { computed } from 'vue';

export default {
    data() {
        return {
            number: 0,
            flag: ["en","it","es","fr"]
        }
    },
    props: {
        cardObj: Object,
    },
    computed: {
        Image() {
            return `https://image.tmdb.org/t/p/w342${this.cardObj.poster_path}`;
        },
        titleFilm() {
            return `${this.cardObj.original_title}`;
        },
        title() {
            return `${this.cardObj.title}`;
        },
        valutation() {
            this.number = Math.round(Math.round(this.cardObj.vote_average) / 2);
            console.log(this.number);
            return this.number;
        },
    },
    methods:{
        getImage(name){
            if(this.flag.includes(name)){
                return new URL(`../assets/img/${name}.png`, import.meta.url).href;
            } else {
                return new URL(`../assets/img/int.png`, import.meta.url).href;
            }
        }
    }
}
</script>

<template>
    <div class="card-container">
        <div class="front-card">
            <img :src="`${Image}`" alt="">
        </div>
        <div class="back-card">
            <span class="text-red">Titolo originale:</span>
            <span>{{ titleFilm }}</span>
            <span class="text-red">Titolo:</span>
            <span>{{ title }}</span>

            <span class="text-red">Lingua:</span>
            <!--  settare per tutte le bandiere -->
            <img :src="getImage(cardObj.original_language)">

            <!-- star -->
            <span class="text-red" v-if="valutation !== 0">Voto:
                <i v-for="i in valutation" class="fa-solid fa-star"></i>
            </span>
            <span v-else>
                non classificato!
            </span>
            <!-- star -->
    </div>
    </div>

</template>

<style lang="scss" scoped>
@use "../style/partials/variable" as *;
@use "../style/partials/mixin" as *;

.card-container {
    position: relative;
    height: 100%;
    width: 100%;

    .back-card,.front-card {
        height: 100%;
        width: 100%;
    }    
    .back-card {
        transform: rotateY(180deg);
        background-color: lightblue;
        padding: 10px;
        font-size: 13px;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
    }
    .front-card img{
        width: 100%;
        height: 100%;
    }
    
    &:hover {
        transform-style: preserve-3d;
        transition: 1s;
        .front-card {
            transform: rotateY(180deg);
            transition: 1s;
            opacity: 0;
        }
        .back-card {
            transform: rotateY(360deg);
            opacity: 1;
            transition: 1s;
            span {
                display: block;
            }
            img{
                width: 30px;
            }
        
            span:last-child {
                color: $black;
                position: absolute;
                bottom: 5px;
                right: 5px;
            }
        }
    }

}
</style>