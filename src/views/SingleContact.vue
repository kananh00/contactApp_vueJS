<template>
    <div>
        <p>{{name}}</p>
        <p>{{surname}}</p>
        <p>{{email}}</p>
        <p>{{adress}}</p>
        <p>{{birthday}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            name: this.$route.params.name,
            surname: this.$route.params.surname,
            email: this.$route.params.email,
            adress: this.$route.params.adress,
            birthday: this.$route.params.birthday,
        }
    },
}
</script>

<style>

</style>