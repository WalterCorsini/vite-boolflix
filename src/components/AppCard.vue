<script>
import { computed } from 'vue';

export default {
    data() {
        return {
            number: 0,
            flag: ["en", "it", "es", "fr"]
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
            this.number = Math.round(Math.round(this.cardObj.vote_average) / 2);
            console.log(this.number);
            return this.number;
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
    <div class="card-container">
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

            <div class="overview">
                <span class="text-red">Trama:</span>
                <div class="overview-text">
                    {{ cardObj.overview }}
                </div>
            </div>

            <!-- star -->
            <span class="text-red" v-if="valutation !== 0">Voto:
                <i v-for="i in valutation" class="fa-solid fa-star"></i>
            </span>
            <span v-else>
                non classificato!
            </span>
            <!-- /star -->
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
        height: 100%;
        width: 100%;
        border-radius: 20px;
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

    .front-card img {
        width: 100%;
        height: 100%;
        border-radius: 20px;

    }

    .overview-text{
        overflow-y: hidden;
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
                font-size: 12px;
                display: block;
            }
            
            span:nth-child(8) {
                color: $black;
                position: absolute;
                bottom: 5px;
                right: 5px;
            }
            
            img {
                width: 30px;
            }
            .overview{
                width: 100%;
                height: 100%;
                .overview-text{
                    font-size: 12px;
                    width: 95%;
                    height: 30%;
                    display: inline-block;
                    overflow-y: auto;
                }
            }
        }
    }

}
</style>