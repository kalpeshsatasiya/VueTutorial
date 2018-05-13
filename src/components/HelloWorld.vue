<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="msg" />
    <br/>
    {{msg | capitalize}}
    <br/>
    {{msg | capital}}
    <todos></todos>
  </div>
</template>

<script>
import Todos from "@/components/Todos";
export default {
  components: {
    todos: Todos
  },
  name: "HelloWorld",
  data() {
    return {
      msg: "Main Component"
    };
  },
  filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1);
  },
  capital: function (value) {
    if (!value) return ''
    value = value.toString().toUpperCase()
    return value;
  }
}
};
</script>
<style scoped>
h1{color:green}
</style>

