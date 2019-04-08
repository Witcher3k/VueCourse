<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
         <server-item v-for="server in servers" :key="server.id" :server="server"></server-item>
        </ul>
    </div>
</template>

<script>
import EventBus from "../../main.js";
import ServerItem from "./ServerItem.vue"
export default {
  data: function() {
    return {
      servers: [
        { id: 1, status: "Normal" },
        { id: 2, status: "Critical" },
        { id: 3, status: "Unkown" },
        { id: 4, status: "Normal" }
      ],
    };
  },
  components:{
      "server-item":ServerItem
  }
};
</script>

<style>

</style>
