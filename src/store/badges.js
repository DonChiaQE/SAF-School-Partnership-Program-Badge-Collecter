import { defineStore } from "pinia";
import { ref } from "vue";

function persistData(data) {
    localStorage.setItem("badgesData", JSON.stringify(data));
}

function loadPersistedData() {
    const savedData = localStorage.getItem("badgesData");
    return savedData ? JSON.parse(savedData) : null;
}

export const useBadgesStore = defineStore("badges", () => {
    const badges = ref(loadPersistedData() || [
    {
        id: 1,
        qrCodeValue: "a",
        color: "bg-red-400",
        collected: false,
    },
    {
        id: 2,
        qrCodeValue: "b",
        color: "bg-blue-400",
        collected: false,
    },
    {
        id: 3,
        qrCodeValue: "c",
        color: "bg-green-400",
        collected: false,
    },
    {
        id: 4,
        qrCodeValue: "d",
        color: "bg-yellow-400",
        collected: false,
    },
    {
        id: 5,
        qrCodeValue: "e",
        color: "bg-orange-400",
        collected: false,
    },
    {
        id: 6,
        qrCodeValue: "f",
        color: "bg-pink-400",
        collected: false,
    },
    {
        id: 7,
        qrCodeValue: "g",
        color: "bg-purple-400",
        collected: false,
    },
    {
        id: 8,
        qrCodeValue: "h",
        color: "bg-indigo-400",
        collected: false,
    },
    {
        id: 9,
        qrCodeValue: "i",
        color: "bg-rose-400",
        collected: false,
    },
    {
        id: 10,
        qrCodeValue: "j",
        color: "bg-teal-400",
        collected: false,
    },
    ]);

    function toggleCollected(id) {
        const badge = badges.value.find((b) => b.id === id);
        if (badge) {
            badge.collected = true
            persistData(badges.value);
        }
    }

    return { badges, toggleCollected };
});
