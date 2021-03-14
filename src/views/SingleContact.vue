<template>
    <div class="container">
        <div class="singleContactInfo">
            
            <h1 class="avatarIMG">{{contact.name.charAt(0)}}{{contact.surname.charAt(0)}}</h1>
            <h3 class="contact_fullName">{{contact.name}} {{contact.surname}}</h3>
            <p class="contact_phone">{{contact.phone}}</p>
            <p class="contact_email">{{contact.email}}</p>
            <p class="contact_adress">{{contact.adress}}</p>
            <p class="contact_birthday">{{contact.birthday}}</p>
            <button class="contactBtn" @click="deleteContact(contact)"><img class="contactIcon" alt="trash-bin" src="../assets/delete.png"/></button>
            <button class="contactBtn"><router-link :to="{ name: 'EditContact', params: {id: contact.id}}"><img class="contactIcon" alt="edit" src="../assets/edit.png"/></router-link></button>
            <p v-if="contact.date">Created: {{new Date(contact.date).getDate()}}/{{new Date(contact.date).getMonth()}}/{{new Date(contact.date).getFullYear()}}</p>
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
    deleteContact(contact) {
      let response = confirm(`Are you sure you want to delete contact ${contact.name}`)
      if(response){
        this.$store.dispatch('deleteContact', contact);
        this.$router.push({name: 'Home'});
      }
    }
  }
}
</script>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        z-index: 1000;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .singleContactInfo {
        min-width: 400px;
        margin: 50px;
        padding: 30px;
        text-align: center;
        background-color: #ff7f50;
        color: white;
        font-size: 20px;
        border-radius: 15px;
        position: relative;
        border: 1px solid transparent;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
    }

    .avatarIMG {
        border: 1px solid transparent;
        border-radius: 35px;
        color: #ff7f50;
        background-color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    }
    .contactBtn {
        border: 1px solid white;
        border-radius: 100%;
        margin: 20px;
        padding: 10px;
        background-color: white;
        cursor: pointer;
        outline: none;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    }
</style>