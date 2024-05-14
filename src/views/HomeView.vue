<template>
  <div>
    <p>Hello {{ user.name }} !!</p>
    <p>Balance: {{ user.balance }}</p>
    <h2>Transactions</h2>
    <ul>
      <li v-for="(transaction, index) in transactions" :key="index">
        To: {{ transaction.to }} Amount: {{ transaction.amount }} Time: {{ transaction.at }}
      </li>
    </ul>
    <button @click="transferFunds">Transfer Funds</button>
  </div>
</template>

<script>
import { userService } from '../services/user.service.js';

export default {
  data() {
    return {
      user: null,
      transactions: [],
    };
  },
  created() {
    this.user = userService.getUser();
    this.transactions = userService.getTransactions();
  },
  methods: {
    transferFunds() {
      userService.transferFunds('d99e3u2ih329', 10); // Example values
      this.user = userService.getUser(); // Refresh user details
      this.transactions = userService.getTransactions(); // Refresh transactions
    },
  },
};
</script>

<style lang="scss">

main {
  background-color: #181A20;
}

p,h1 {
  text-align: center;
}

</style>
