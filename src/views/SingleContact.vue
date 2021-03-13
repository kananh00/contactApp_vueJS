<template>
    <div class="container">
        <div class="singleContactInfo">
            <h1 class="avatarIMG">{{name.charAt(0)}}{{surname.charAt(0)}}</h1>
            <h3 class="contact_fullName">{{name}} {{surname}}</h3>
            <p class="contact_phone">{{phone}}</p>
            <p class="contact_email">{{email}}</p>
            <p class="contact_adress">{{adress}}</p>
            <p class="contact_birthday">{{birthday}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            name: this.$route.params.name,
            surname: this.$route.params.surname,
            phone: this.$route.params.phone,
            email: this.$route.params.email,
            adress: this.$route.params.adress,
            birthday: this.$route.params.birthday,
        }
    },
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
</style>