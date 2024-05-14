<template>
  <div class="main-home">
    <p>Hello {{ user.name }} !!</p>
    <p>Balance: {{ user.balance }}</p>
    <h2>Transactions</h2>
    <ul>
      <li v-for="(transaction, index) in transactions" :key="index">
        To: {{ transaction.to }} Amount: {{ transaction.amount }} Time: {{ transaction.at }}
      </li>
    </ul>
    <button class="transfer" @click="showContactList">Transfer Funds</button>
    <div v-if="showContacts">
      <h3>Contact List</h3>
      <ul>
        <li v-for="(contact, index) in contacts" :key="index" @click="selectContact(contact)">
          {{ contact.name }}
        </li>
      </ul>
    </div>
    <div v-if="selectedContact">
      <h3>Transfer Funds to {{ selectedContact.name }}</h3>
      <input type="number" v-model="transferAmount" placeholder="Enter amount">
      <button class="transfer"@click="transferFundsToContact">Transfer</button>
    </div>
  </div>
</template>

<script>
import { userService } from '../services/user.service.js'; // Corrected import
import { contactService } from '../services/contact.service.js';

export default {
  data() {
    return {
      user: null,
      transactions: [],
      contacts: [],
      showContacts: false,
      selectedContact: null,
      transferAmount: 0,
    };
  },
  created() {
    this.user = userService.getUser();
    this.transactions = userService.getTransactions();
    this.loadContacts();
  },
  methods: {
    async loadContacts() {
      this.contacts = await contactService.query();
    },
    showContactList() {
      this.showContacts = true;
    },
    selectContact(contact) {
      this.selectedContact = contact;
    },
    async transferFundsToContact() {
      if (this.transferAmount > 0) {
        userService.transferFunds(this.selectedContact._id, this.transferAmount);
        console.log(this.selectedContact._id, this.transferAmount)
        this.user = userService.getUser(); // Refresh user details
        this.transactions = userService.getTransactions(); // Refresh transactions
        this.showContacts = false; // Hide contact list
        this.selectedContact = null; // Reset selected contact
        this.transferAmount = 0; // Reset transfer amount
      } else {
        alert('Please enter a valid amount to transfer.');
      }
    },
  },
};
</script>

<style lang="scss">
.main-home{
  display: flex;
  flex-direction: column;
  place-items: center;
}

div{
  color: white
}

main {
  background-color: #181A20;
}

p,h1 {
  text-align: center;
}

.transfer {
  background-color: rgb(240, 185, 11);
  color: white;
  height: 1.5em;
}

</style>


