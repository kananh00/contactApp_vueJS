<template>
  <div class="add">
    <div class="form">
        <h1>Edit contact</h1>
        <p>Name</p>
        <input placeholder="Name" class="input" type="text" v-model="contact.name"/>
        <p class="errorMsg" v-if="!contact.name&&clicked">Name is required!</p>
        <p>Surname</p>
        <input placeholder="Surname" class="input" type="text" v-model="contact.surname"/>
        <p class="errorMsg" v-if="!contact.surname&&clicked">Surname is required!</p>
        <p>Phone Number</p>
        <input placeholder="Phone Number" class="input" type="text" v-model="contact.phone"/>
        <p class="errorMsg" v-if="!contact.phone&&clicked">Phone number is required!</p>
        <p>E-mail</p>
        <input placeholder="E-mail" class="input" type="email" v-model="contact.email"/>
        <p>Adress</p>
        <input placeholder="Adress" class="input" type="text" v-model="contact.adress"/>
        <p>Birthday</p>
        <input placeholder="Birthday" class="input" type="text" v-model="contact.birthday"/>
        <button class="btn" @click="editContact">Edit Contact</button>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    data() {
    return {
      clicked: false
    }
  },
    computed: {
        ...mapState(['contacts']),
        contact(){
            return this.contacts.find(c => c.id == this.$route.params.id);
        }
    },
    methods: {
        editContact() {
            this.clicked = true
            if (this.contact.name.length != 0 && this.contact.surname.length != 0 && this.contact.phone.length != 0) {
                this.$store.dispatch('editContact', this.contact);
                this.$router.push({name: 'Home'});
            }
        }
    }
}
</script>

<style>
    
</style>