<template>
  <div class="hello">
    <h1>{{ header }}</h1>
    <input type="text" v-model="msg" />
    <br />
    <br />
   <b>Normal string -</b> {{msg}}
   <br />
    <br/>
    <b>Capitalize string -</b> {{msg | capitalizeGlobal}}
     <div v-bind:id="msg | capitalize" >{{msg | capitalize}}</div>
    <br />
    <br/>
    <b>UpperCase string -</b> {{msg | uppercase}}
    <br />
    <br />
    <b>Multiple filter -</b> {{msg | uppercase | lowercase}}
     </div>
</template>

<script>
export default {
  name: "FiltersDemo",
  data() {
    return {
      header: "Filters Demo",
      msg: ""
    };
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    uppercase: function(value) {
      if (!value) return "";
      value = value.toString().toUpperCase();
      return value;
    },
    lowercase: function(value) { //TEST -- test
      if (!value) return "";
      value = value + "--" + value.toString().toLowerCase();
      return value;
    }
  }
};
</script>

