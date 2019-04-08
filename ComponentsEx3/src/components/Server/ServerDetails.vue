<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server">Please selec a Server</p>
    <p v-else>#{{server.id}} selected, Status:{{server.status}}</p>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
import { EventBus } from "./../../main.js";
export default {
  data: function() {
    return {
      server: null
    };
  },
  created() {
    EventBus.$on("showDetail", data => {
      this.server = data;
    });
  },
  methods: {
    changeStatus() {
      this.server.status = "Normal"; 
    }
  }
};
</script>

<style>
</style>
