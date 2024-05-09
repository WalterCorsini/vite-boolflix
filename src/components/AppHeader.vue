<script>
import { store } from "../store"
export default {
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="header">
        <div class="container">
            <span>BOOLFLIX</span>
            
            <div class="search-container">
                <label for="search">trova un film</label>
                <div>
                    <input v-model="store.searchQuery" id="search" type="text" placeholder="ricerca..">
                    <button :disabled='store.searchQuery === ""' @click="$emit('searchFilm')">cerca</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variable" as *;
@use "../style/partials/mixin" as *;

.header {
    height: 17vh;
    background-color: $black;
    padding: 10px;

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 80%;
        margin: 0 auto;

        span {
            color: $red;
            font-weight: 800;
            font-size: 30px;
        }

        .search-container {
            display: flex;
            flex-direction: column;
            padding: 10px;
            border: 2px solid $red;
            border-radius: 10px;

            label {
                color: $red;
                margin-left: 20px;
            }

            input {
                border: 1px solid black;
                border-right: 0;
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
                outline: 0;
                padding-left: 10px;
                padding: 1px 10px;
            }

            button {
                // border: 1px solid red;
                border: 0;
                padding: 1px 10px;
                background-color: red;
                color: $white;
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;
            }
        }
    }
}
</style>