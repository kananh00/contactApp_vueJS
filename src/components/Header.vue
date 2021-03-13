<template>
    <div id="nav">
    <div class="logo" >
      <router-link to="/">MyContacts</router-link>
    </div>
    <div id="addBtn">
      <router-link  to="/add">Add</router-link>
    </div>
  </div>
  <router-view/>
</template>

<style>
#nav {
  padding: 30px;
  border: 1px solid transparent;
  border-radius: 20px;
  background-color: #7B68EE;
  justify-content: space-between;
  display: flex;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  font-family:Verdana, Geneva, Tahoma, sans-serif
}
.logo a{
  font-size: 25px;
}
#addBtn a {
  font-size: 18px;
  padding: 5px;
  padding-left: 20px;
  padding-right: 20px;
  border: 2px solid white;
  border-radius: 20px;
}
#addBtn a.router-link-exact-active {
  color: #7B68EE;
  background-color: #F5F5F5;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

} 

</style>