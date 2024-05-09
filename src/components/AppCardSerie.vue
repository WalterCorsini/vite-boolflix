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
    height: 80%;
    width: 100%;

    .front-card,
    .back-card {
        padding: 10px;
        height: 100%;
        width: 100%;
    }

    img {
        height: 100%;
    }

    .back-card {
        font-size: 13px;
        opacity: 0;
    }

    &:hover {
        transition: 1s;
        background-color: $white;

        .front-card {
            transform: rotateY(180deg);
            transition: 1s;
            opacity: 0;
        }

        .back-card {
            opacity: 1;
            transition: 2s;
            position: absolute;
            top: 0;
            left: 0;
        }
    }

    span {
        display: block;

        img {
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
</style>