<template>
    <section class="contact-list">
        <ul>
            <li v-for="(contact, idx) in contacts" :key="contact._id">
                <ContactPreview :contact="contact" :idx="idx" />
                <div class="actions">
                    <RouterLink :to="`/contact/${contact._id}`"><button>Details</button></RouterLink>
                    <RouterLink :to="`/contact/edit/${contact._id}`"><button>Edit</button></RouterLink>
                    <button @click="onRemove(contact._id)">x</button>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
import ContactPreview from './ContactPreview.vue';

export default {
    props: {
        contacts: {
            type: Array,
            required: true,
        },
    },
    methods: {
        onRemove(contactId) {
            this.$emit('remove', contactId)
        }
    },  
    components: {
        ContactPreview
    }
}
</script>

<style lang="scss">
.contact-list ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;

    list-style: none;
    padding: 10px;
}

button {
    background-color: #181A20;
    margin-bottom: 1em;
    color: white;
    border-radius: 3px;
    border: none;
}

.contact-list li {
    display: flex;
    flex-direction: column;
    background-color: rgb(240, 185, 11);

    .actions {
        place-self: center;
    }
}
</style>