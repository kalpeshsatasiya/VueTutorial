<template>
  <div class="hello">
    <h1>Registration</h1>
    <form class="ui form" @submit.prevent="onSubmit">
      <div class="field" :class="{error: errors.has('name')}">
      <label>Name</label>
      <input type="text" name="name" placeholder="Name" v-validate="'required'" v-model="name">
      <div class="error" v-if="errors.has('name')">{{errors.first('name')}}</div>
    </div>
    <div class="field" :class="{error: errors.has('email')}">
      <label>Email</label>
      <input type="email" name="email" placeholder="Email" v-validate="'required|email'" v-model="email">
      <div class="error" v-if="errors.has('email')">{{errors.first('email')}}</div>
    </div>
    <div class="field" :class="{error: errors.has('phone')}">
      <label>Phone</label>
       <input type="text" name="phone" placeholder="phone"
        v-validate="{required : true, numeric: true, min:10, max:11}" v-model="phone">
       <div class="error" v-if="errors.has('phone')">{{errors.first('phone')}}</div>      
    </div>
    <button type="submit" class="ui submit button">Submit</button>
  </form>
  </div>
</template>

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);

export default {
  name: "Registration",
  data() {
    return {
      name:"",
      email: "",
      phone: ""
    };
  },
  methods: {
    onSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          alert("submit");
        }
      });
    }
  }
};
</script>
<style scoped>
div.error {
  color: #9f3a38;
}
</style>
