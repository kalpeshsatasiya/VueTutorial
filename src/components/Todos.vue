<template>
<div>
  <h1>Sub Component</h1>
 <ul>
   <li v-for="todo in todos">{{todo}}</li>
 </ul>
 </div>
</template>

<script>
export default {
  name: "First",
  data() {
    return {
      todos: ["Team Meeting", "Client Call", "Code Review"]
    };
  }
};
</script>
<style scoped>
h1{color:orange}
</style>
