<script>
import { computed } from 'vue';
import { store } from "../store";

export default {
    data() {
        return {
            flag: ["en", "it", "es", "fr"],
            popup: false,
            store,
        }
    },
    props: {
        cardObj: Object,
        cardCast: Number,
        i: Number,
    },
    computed: {
        Image() {
            return `https://image.tmdb.org/t/p/w342${this.cardObj.poster_path}`;
        },
        titleFilm() {
            if (this.cardObj.original_title) {
                return `${this.cardObj.original_title}`;
            } else {
                return `${this.cardObj.original_name}`;
            }
        },
        title() {
            if (this.cardObj.original_title) {
                return `${this.cardObj.title}`;
            } else {
                return `${this.cardObj.name}`;
            }
        },
        valutation() {
            return Math.round(this.cardObj.vote_average / 2);
        },
    },
    methods: {
        getImage(name) {
            if (this.flag.includes(name)) {
                return new URL(`../assets/img/${name}.png`, import.meta.url).href;
            } else {
                return new URL(`../assets/img/int.png`, import.meta.url).href;
            }
        }
    }
}
</script>

<template>
    <div @click="flip = !flip" class="card-container">
        <!-- front -->
        <div class="front-card">
            <img :src="`${Image}`" alt="">
        </div>
        <!-- /front -->

        <!-- back -->
        <div class="back-card">
            <span class="text-red">Titolo originale:</span>
            <span>{{ titleFilm }}</span>
            <span class="text-red">Titolo:</span>
            <span>{{ title }}</span>
            <span class="text-red">Lingua:</span>

            <!--  settare per tutte le bandiere -->
            <img :src="getImage(cardObj.original_language)">
            <!--  /settare per tutte le bandiere -->

            <div v-if="cardObj.overview" class="overview">
                <span class="text-red">Trama:</span>
                <div class="overview-text">
                    {{ cardObj.overview }}
                </div>
            </div>

            <!-- star -->
            <div class="rating">
                <span>Voto:</span>
                <span class="text-red" v-for="i in valutation">
                    <i class="fa-solid fa-star"></i>
                </span>
                <span class="text-red" v-for="i in 5 - valutation">
                    <i class="fa-regular fa-star"></i>
                </span>
            </div>
            <!-- /star -->
            <button class="btn-cast" @click="popup = !popup , $emit('cast',cardObj.id)">vedi cast</button>
            <div class="overlay" v-if="popup">
                {{ store.listcast }}
            </div>
        </div>
        <!-- /back -->

    </div>

</template>

<style lang="scss" scoped>
@use "../style/partials/variable" as *;
@use "../style/partials/mixin" as *;

.card-container {
    position: relative;
    height: 100%;
    width: 100%;
    
    .back-card,
    .front-card {
        transform-style: preserve-3d;
        transition: 1s;
        height: 100%;
        width: 100%;
        border-radius: 20px;
    }
    .front-card{
        position: relative;
        z-index: -1;
    }
    .back-card {
        display: flex;
        flex-direction: column;
        transform: rotateY(180deg);
        background-color: lightblue;
        padding: 10px;
        font-size: 13px;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        
        img {
                width: 30px;
            }

        span {
            font-size: 12px;
            display: block;
        }

        .rating {
            color: $black;
            display: flex;
            position: absolute;
            bottom: 5px;
            right: 5px;
        }

        .overlay {
            width: 100%;
            height: 50%;
            background-color: rgba($color: #000000, $alpha:0.7);
            color:  $white;
            padding: 10px;
            position: absolute;
            z-index: 9999;
            top: 15%;
            left: 0;
            border-radius: 20px;
        }

        .overview-text{
            width: 100%;
            flex-grow: 1;
            max-height: 200px;
            font-size: 12px;
            display: inline-block;
            overflow-y: auto;
        }

        .btn-cast{
            position: absolute;
            top: 5%;
            right: 5%;
        }
    }

    .front-card img {
        width: 100%;
        height: 100%;
        border-radius: 20px;

    }

    &:hover{
        .front-card {
            transform: rotateY(180deg);
            transition: 1s;
            opacity: 0;
        }
        .back-card {
            transform: rotateY(360deg);
            opacity: 1;
            transition: 1s;
        }
    }
}
</style>