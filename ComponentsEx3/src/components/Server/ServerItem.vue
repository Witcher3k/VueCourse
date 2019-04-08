<template>
  <div style="cursor:pointer">
    <li @click="showDetail" class="list-group-item">Server number #{{server.id}}</li>
  </div>
</template>
<script>
import { EventBus } from "../../main.js";
export default {
  props: ["server"],
  methods: {
    showDetail: function() {
      EventBus.$emit("showDetail", this.server);
    }
  }
};
</script>