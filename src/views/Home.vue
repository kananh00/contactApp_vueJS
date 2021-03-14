<template>
  <div class="home">
    <ul>
      <li class="contact" v-for="contact in contacts">
        <router-link :to="{ name: 'SingleContact', params: {id: contact.id, name: contact.name, surname: contact.surname, phone: contact.phone, email: contact.email, adress: contact.adress, birthday: contact.birthday} }">
           <h3 class = "avatar">{{contact.name.charAt(0)}}{{contact.surname.charAt(0)}}</h3>
           <span class="info">{{contact.name}} {{contact.surname}}</span>
        </router-link>
        <button class="deleteBtn" @click="deleteContact(contact)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {},
  computed: {
    contacts(){
      return this.$store.state.contacts;
    }
  },
  methods: {
    deleteContact(contact) {
      this.$store.dispatch('deleteContact', contact);
    }
  }
}
</script>

<style>

  .home {
    display: block;
    width: 30%;
    margin-left: 70px;

  }
  .home ul {
    list-style-type: none;
  }
  .home li {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .contact a{
    text-decoration: none;
    display: flex;
    border: 2px solid transparent;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: rgb(255,215,0);
    border-radius: 10px;
    margin: 10px;
  }

  .info {
    display: flex;
    color: black;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-left: 20px;
    min-width: 300px;
  }

  .avatar {
    display: flex;
    border: 1px solid transparent;
    border-radius: 100%;
    color: white;
    width: 50px;
    height: 50px;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: #228B22;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-left: 20px;
  }

  .deleteBtn {
    border: 1px solid transparent;
    background-color: #b22222;
    border-radius: 100%;
    cursor: pointer;
    outline: none;
    height: 40px;
    margin-left: -30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  }
</style>