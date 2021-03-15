<template>
  <div class="add">
    <div class="form">
        <h1>Add new contact</h1>
        <p>Name</p>
        <input  @keyup="checkField" placeholder="Name" class="input" type="text" v-model="contact.name"/>
        <p class="errorMsg" v-if="!contact.name&&clicked">Name is required!</p>
        <p>Surname</p>
        <input  @keyup="checkField" placeholder="Surname" class="input" type="text" v-model="contact.surname"/>
        <p class="errorMsg" v-if="!contact.surname&&clicked">Surname is required!</p>
        <p>Phone Number</p>
        <input  @keyup="checkField" placeholder="Phone Number" class="input" type="text" v-model="contact.phone"/>
        <p class="errorMsg" v-if="!contact.phone&&clicked">Phone number is required!</p>
        <p>E-mail</p>
        <input placeholder="E-mail" class="input" type="email" v-model="contact.email"/>
        <p>Adress</p>
        <input placeholder="Adress" class="input" type="text" v-model="contact.adress"/>
        <p>Birthday</p>
        <input placeholder="Birthday" class="input" type="text" v-model="contact.birthday"/>
        <button class="btn" @click="addContact">Add Contact</button>
    </div>
  </div>
</template>

<script>
import {createID} from '../utils/createID'
export default {
  data() {
    return {
      contact: {
        id: createID(),
        date: Date.now()
      },
      clicked: false
    }
  },
  methods: {
    async addContact() {
      this.clicked = true
      if (this.contact.name.length != 0 && this.contact.surname.length != 0 && this.contact.phone.length != 0) {
      this.$store.dispatch('addContact', this.contact)
      this.$router.push({name: 'Home'});
      }
    }
  }
}
</script>

<style>

  .form {
    background-color: rgb(255,215,0);
    width: 500px;
    border-radius: 10px;
    margin: 50px auto;
    padding: 30px;
    justify-content: center;
    text-align: center;
    align-items: center;
  }

  .input {
    width: 95%;
    background-color: rgb(245,245,245);
    border: 2px solid transparent;
    padding: 10px;
    border-radius: 5px;
    outline: none;
  }
  .btn {
    width: 100%;
    display: block;
    border: 2px solid transparent;
    padding: 10px;
    border-radius: 5px;
    outline: none;
    text-transform: uppercase;
    font-weight: bold;
    background-color: 	#228B22;
    color: white;
    margin-top: 25px;
  }

.errorMsg {
  color: red;
  text-align: left;
}
</style>
