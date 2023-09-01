import { defineStore } from "pinia";
import { ref } from "vue";

function persistData(data) {
    localStorage.setItem("nameData", JSON.stringify(data));
}

function loadPersistedData() {
    const savedData = localStorage.getItem("nameData");
    return savedData ? JSON.parse(savedData) : null;
}

export const useNameStore = defineStore("name", () => {
    const name = ref(loadPersistedData() ||  "")

    function setName(newName) {
        name.value = newName
        persistData(name.value)
    }

    return { name, setName }
})