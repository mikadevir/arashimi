<template>
  <v-card class="mx-auto my-12" max-width="374">


    <v-img cover height="250" src="/images/map11.jpg"></v-img>

    <v-card-item>
      <v-card-title>تماس با ما</v-card-title>

    </v-card-item>

    <v-form @submit.prevent="submitForm">
      
      <v-text-field name="name" v-model="name" label="نام" class="ma-3"></v-text-field>
      <v-text-field name="email" v-model="email" label="ایمیل" class="ma-3"></v-text-field>
      <v-textarea name="message" v-model="message" label="پیام" class="ma-3"></v-textarea>
      <div class=text-center>
    <v-btn type="submit" color="success" class="my-2">ارسال</v-btn>
      </div>
  </v-form>
  </v-card>
</template>

<script>
const FORMSPARK_ACTION_URL = "https://submit-form.com/Fiyrjk69";

export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    async submitForm() {
      await fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          message: this.name,
          message: this.email,
          message: this.message,
        }),
      });
      alert("Form submitted");
    },
  },
};
</script>