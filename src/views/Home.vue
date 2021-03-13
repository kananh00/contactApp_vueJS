<template>
  <div class="home">
    <ul>
      <li v-for="contact in contacts">
        <router-link :to="{ name: 'SingleContact', params: {id: contact.id, name: contact.name, surname: contact.surname, email: contact.email, adress: contact.adress, birthday: contact.birthday} }">
          <span>{{contact.name}} {{contact.surname}}</span>
        </router-link>
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
  }
}
</script>
