<template>
    <h1>contacts</h1>
    <div class="upper-actions">
        <RouterLink to="/contact/edit"><button>Add a contact</button></RouterLink>
        <ContactFilter @filter="onFilter" />
    </div>
    <ContactList @remove="removeContact" :contacts="contacts" />
</template>

<script>
import { contactService } from '@/services/contact.service.js'
import ContactList from '../cmps/ContactList.vue'
import ContactFilter from '../cmps/ContactFilter.vue'
import { eventBusService, showErrorMsg, showSuccessMsg } from '@/services/event-bus.service'

export default {
    data() {
        return {
            contacts: [],
        }
    },
    async created() {
        this.contacts = await contactService.query()
    },
    methods: {
        async removeContact(contactId) {
            try {
                await contactService.remove(contactId)
    
                const idx = this.contacts.findIndex(contact => contact._id === contactId)
                this.contacts.splice(idx, 1)
    
                // eventBusService.emit('show-user-msg', { txt: `contact ${contactId} deleted`, type: 'success', timeout: 4000 })
                showSuccessMsg(`contact ${contactId} deleted`)
            } catch (err) {
                showErrorMsg('Couldnt delete contact')
            }
        },
        async onFilter(filterBy) {
            this.contacts = await contactService.query(filterBy)
        }
    },
    components: {
        ContactList,
        ContactFilter,
    }
}
</script>

<style lang="scss">
.upper-actions{
    display: flex;
    place-items: center;
    flex-direction: column;
    margin: auto;
}

</style>