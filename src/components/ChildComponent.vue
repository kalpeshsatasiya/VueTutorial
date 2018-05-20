<template>
  <div>
  <div style="cursor:pointer;" v-on:click="clickEvent('A')">A</div> 
  <div style="cursor:pointer;" v-on:click="clickEvent('B')">B</div> 
  <div style="cursor:pointer;" v-on:click="clickEvent('C')">C</div>
  <div class="msg">{{msg}}</div>
</div>
</template>
<script>
import Vue from "vue";
export default {
  name: "ChideComponent",
  data() {
    return {
      msg: "Child Method Message"
    };
  },
  props: { 
    callMethod:  ""
  },
  methods:{
    clickEvent(data){
      this.msg= "Child Method Message - "+ data
      console.log(this.msg);
      this.callMethod(data);
    }
  }
};

</script>
<style scoped>
.msg{
  color: red;
  font-size: 15px;
}
</style>
