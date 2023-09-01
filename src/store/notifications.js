import { defineStore } from "pinia";
import { ref } from "vue";

export const useNotificationsStore = defineStore("notifications", () => {
    const showNotification = ref(false)

    function toggleNofication() {
        showNotification.value = !showNotification.value
    }
    
    return { showNotification }
})