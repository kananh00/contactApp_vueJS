<template>
  <div class="add">
    <div class="form">
        <h1>Edit contact</h1>
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
        <button class="btn" @click="editContact">Edit Contact</button>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    computed: {
        ...mapState(['contacts']),
        contact(){
            return this.contacts.find(c => c.id == this.$route.params.id);
        }
    },
    methods: {
        editContact() {
            this.$store.dispatch('editContact', this.contact);
            this.$router.push({name: 'Home'});
        }
    }
}
</script>

<style>
    
</style>