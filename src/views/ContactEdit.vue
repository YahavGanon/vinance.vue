<template>
    <h2 v-if="!contact">Loading...</h2>
    <form v-else @submit.prevent="save" class="contact-edit">
        <input v-model="contact.name" type="text" placeholder="Name">
        <input v-model="contact.phone" type="text" placeholder="Phone">
        <button>Save</button>
    </form>
</template>

<script>
import { contactService } from '@/services/contact.service';
import { showSuccessMsg } from '@/services/event-bus.service';

export default {
    data() {
        return {
            contact: null,
        }
    },
    methods: {
        async save() {
            await contactService.save(this.contact)
            showSuccessMsg('contact saved.')
            this.$router.push('/contact')
        }
    },
    async created() {
        const { contactId } = this.$route.params

        if (contactId) {
            this.contact = await contactService.get(contactId)
        } else {
            this.contact = contactService.getEmptyContact()
        }
    }
}
</script>

<style lang="scss">
.contact-edit {
    display: flex;
    flex-direction: column;
    place-items: center;
    height: 100vh;

    gap: 10px;

    padding: 10px;
    background-color: rgb(240, 185, 11);
}
</style>