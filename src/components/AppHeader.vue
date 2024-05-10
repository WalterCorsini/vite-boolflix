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
                <label for="search">trova un film </label>
                <div class="select">
                    <select @change="$emit('changeOption')" v-model="store.currentOption" name="selectType">
                        <option id="selectType" :value="curOption.value" v-for="curOption in store.selectOption">{{ curOption.option }}</option>
                    </select>
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

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 90%;
        margin: 0 auto;

        span {
            color: $red;
            font-weight: 800;
            font-size: clamp(1.5rem, 3vw, 2rem);
        }

        .search-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 10px;
            border: 2px solid $red;
            border-radius: 10px;
            height: 60%;
            select{
                margin-right: 3px;
            }
            .select{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0;
                margin: 0;
                div{
                    display: flex;
                    flex-direction: column;
                }
            }
            label {
                color: $red;
                margin: 0 4px;
            }

            input {
                border: 1px solid black;
                border-right: 0;
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
                outline: 0;
                padding: 1px 11px;
                width: 100px;
            }

            button {
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