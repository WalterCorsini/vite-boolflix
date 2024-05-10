import { reactive } from "vue";
export const store = reactive({
    arrayFilm: [],
    arraySerie: [],
    popup:false,
    listCast:0,
    listCastArray:[],
    searchQuery: "ciao", // v.model
    apiKey: "05a99922144cdd99851de6215573f3f0",
})