import { reactive } from "vue";
export const store = reactive({
    arrayFilm: [],
    arraySerie: [],
    listCastArray:[],
    randomWord:["italia","alien","marvel","amore","inter"],
    randomNumber: 0,
    activePopup: 0,
    popup: false,
    searchQuery: "", // v.model
    apiKey: "05a99922144cdd99851de6215573f3f0",
    currentOption: "Default",
    selectOption:[
        {option:"Default", value: "default"},
        {option:"Piu popolari", value: "popular"},
        {option:"Piu votati", value: "top_rated"},
        {option:"Prossimamente", value: "upcoming"},

    ]
})