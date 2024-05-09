<script>
import { computed } from 'vue';

export default {
    data() {
        return {
            number: 0,
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
            return `${this.cardObj.original_name}`;
        },
        title() {
            return `${this.cardObj.name}`;
        },
        language() {
            switch (this.cardObj.original_language) {
                case "en":
                    return "English"; break;
                case "es":
                    return "Espanol"; break;
                case "fr":
                    return "Francais"; break;
                case "it":
                    return "Italiano"; break;
                default: return "Sconosciuta";
            }
        },
        valutation() {
            this.number = Math.round(Math.round(this.cardObj.vote_average) / 2);
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
            <span class="text-red">Titolo originale:</span>
            <span>{{ titleFilm }}</span>
            <span class="text-red">Titolo:</span>
            <span>{{ title }}</span>

            <span class="text-red">Lingua:</span>
            <span v-if="language">
                <img v-if="language === 'Italiano'" src="../assets/img/italia.svg">
                <img v-if="language === 'English'" src="../assets/img/inghilterra.png">
                <img v-if="language === 'Espanol'" src="../assets/img/spagna.png">
                <img v-if="language === 'Francais'" src="../assets/img/francia.png">
                <img v-if="language === 'Sconosciuta'" src="../assets/img/interrogativo.png">
            </span>

            <!-- star -->
            <span class="text-red" v-if="valutation !== 0">Voto:
                <i v-if="valutation >= 1" class="fa-solid fa-star"></i>
                <i v-if="valutation >= 2" class="fa-solid fa-star"></i>
                <i v-if="valutation >= 3" class="fa-solid fa-star"></i>
                <i v-if="valutation >= 4" class="fa-solid fa-star"></i>
                <i v-if="valutation >= 5" class="fa-solid fa-star"></i>
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
        background-color: $white;
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
                img{
                    width: 30px;
                }
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