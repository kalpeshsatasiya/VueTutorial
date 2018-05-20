<template>
  <div >
    <child-component :callMethod="parentMethodCall"></child-component>
<br/>
<div class="msg">{{msg}}</div>
</div>
</template>
<script>
import Vue from "vue";
import ChildComponent from "@/components/ChildComponent";
export default {
  components: {
    ChildComponent: ChildComponent
  },
  name: "CallParentMethodFromChild",
  data() {
    return {
      msg: "Parent Method Message"
    };
  },
  methods: {
    parentMethodCall: function(data) {
      this.msg = "Parent Method Message - " + data;
      console.log(this.msg);
    }
  }
};
</script>
<style scoped>

.msg{
  color: green;
  font-size: 15px;
}
</style>
