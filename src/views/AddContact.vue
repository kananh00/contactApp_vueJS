<template>
  <div class="add">
    <div class="createWindow">
        <h1>Add new contact</h1>
        <p>Name</p>
        <input placeholder="Name" class="input" type="text" v-model="contact.name"/>
        <p>Surname</p>
        <input placeholder="Surname" class="input" type="text" v-model="contact.surname"/>
        <p>Phone Number</p>
        <input placeholder="Phone Number" class="input" type="text" v-model="contact.phone"/>
        <p>E-mail</p>
        <input placeholder="E-mail" class="input" type="email" v-model="contact.email"/>
        <p>Adress</p>
        <input placeholder="Adress" class="input" type="text" v-model="contact.adress"/>
        <p>Birthday</p>
        <input placeholder="Birthday" class="input" type="text" v-model="contact.birthday"/>
        <button class="addBtn" @click="addContact">Add Contact</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: {}
    }
  },
  methods: {
    async addContact() {
      this.$store.dispatch('addContact', this.contact)
      this.$router.push({name: 'Home'});
    }
  }
}
</script>

<style>

  .createWindow {
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

  .addBtn {
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
</style>
