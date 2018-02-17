<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
  }
};
</script>
<style scoped>
h1{color:green}
</style>

