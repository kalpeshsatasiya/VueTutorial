<template>
  <div id="dynamic-component-demo">
  <button
    v-for="tab in tabs"
    v-bind:key="tab"
    v-bind:class="['tab-button', { active: currentTab === tab }]"
    v-on:click="currentTab = tab"
  >{{ tab }}</button>

  
    <component
      v-bind:is="currentTabComponent"
      class="tab"
    ></component>
  
</div>
</template>

<script>
import Vue from "vue";
Vue.component("tab-demo1", {
  template: "<div>Demo 1 component</div>"
});

Vue.component("tab-demo2", {
  template: "<div>Demo 2 component</div>"
});

import Todos from "@/components/Todos";
export default {
  name: "DynamicComponent",
  data() {
    return {
      currentTab: "demo1",
      tabs: ["Demo1", "Demo2"]
    };
  },
  computed: {
    currentTabComponent: function() {
      return "tab-" + this.currentTab.toLowerCase();
    }
  }
};
</script>
