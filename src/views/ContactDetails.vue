<template>
    <h2 v-if="!contact">Loading...</h2>
    <section v-else class="contact-details">
        <h2>{{contact.name}}</h2>
        <h2>{{contact.phone}}</h2>
        <RouterLink to="/contact"><button>Back</button></RouterLink>
    </section>
</template>

<script>
import { contactService } from '@/services/contact.service';

export default {
    data() {
        return {
            contact: null,
        }
    },
    async created() {
        const { contactId } = this.$route.params

        this.contact = await contactService.get(contactId)
    }
}
</script>

<style lang="scss">
button {
    background-color: #181A20;
}

.contact-details{
    display: flex;
    flex-direction: column;
    place-items: center;
    height: 100vh;
    background-color: rgb(240, 185, 11);
}

</style>