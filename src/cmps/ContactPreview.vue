<template>
        <img class="contact-img" :src="getAvatarUrl(idx)" alt="Contact Avatar">
        <h2 class="contact-name">{{ contact.name }}</h2>
</template>

<script>
export default {
    props: {
        contact: {
            type: Object,
            required: true,
        },
        idx: {
            type: Number,
            required: true,
        }
    },
    methods: {
        getAvatarUrl(idx) {
            return `https://xsgames.co/randomusers/assets/avatars/male/${idx + 1}.jpg`;
        }
    }
}
</script>

<style lang="scss">
.preview-container {
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: center
}

.contact-img {
    width: 100%
}

.contact-name{
    text-align: center;
    white-space: nowrap;
    color: white;
}
</style>