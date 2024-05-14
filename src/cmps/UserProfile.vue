<template>
    <div>
      <h2>User Profile</h2>
      <p>Name: {{ user.name }}</p>
      <p>Balance: {{ user.balance }}</p>
    </div>
  </template>
  
  <script>
import { userService } from '@/services/user.service.js'
  
  export default {
    data() {
      return {
        user: null
      };
    },
    mounted() {
      userService.getUser().then(user => {
        this.user = user;
      });
    }
  };
  </script>