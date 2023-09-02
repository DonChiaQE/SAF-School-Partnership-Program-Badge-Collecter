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
        name: 'Alpha',
        qrCodeValue: "a",
        image: "alpha", 
        color: "bg-red-400",
        collected: false,
    },
    {
        id: 2,
        name: 'Bravo',
        qrCodeValue: "b",
        image: "alpha",
        color: "bg-blue-400",
        collected: false,
    },
    {
        id: 3,
        name: 'Charlie',
        qrCodeValue: "c",
        image: "alpha",
        color: "bg-green-400",
        collected: false,
    },
    {
        id: 4,
        name: 'Delta',
        qrCodeValue: "d",
        image: "alpha",
        color: "bg-yellow-400",
        collected: false,
    },
    {
        id: 5,
        name: 'Echo',
        qrCodeValue: "e",
        image: "alpha",
        color: "bg-orange-400",
        collected: false,
    },
    {
        id: 6,
        name: 'Foxtrot',
        qrCodeValue: "f",
        image: "alpha",
        color: "bg-pink-400",
        collected: false,
    },
    {
        id: 7,
        name: 'Golf',
        qrCodeValue: "g",
        image: "alpha",
        color: "bg-purple-400",
        collected: false,
    },
    {
        id: 8,
        name: 'Hotel',
        qrCodeValue: "h",
        image: "alpha",
        color: "bg-indigo-400",
        collected: false,
    },
    {
        id: 9,
        name: 'India',
        qrCodeValue: "i",
        image: "alpha",
        color: "bg-rose-400",
        collected: false,
    },
    {
        id: 10,
        name: 'Juliet',
        qrCodeValue: "j",
        image: "alpha",
        color: "bg-teal-400",
        collected: false,
    },
    ]);

    const recentlyCollected = ref(null);

    function toggleCollected(id) {
        const badge = badges.value.find((b) => b.id === id);
        if (badge) {
            badge.collected = true
            persistData(badges.value);
            recentlyCollected.value = badge;
        }
    }

    return { badges, toggleCollected };
});
