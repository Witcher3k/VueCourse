<template>
  <div class="row">
    <div class="col-xs-12">
      <footer @click="hello">
        <p>All Servers are managed here</p>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    hello: function() {
      console.log("say hello");
    }
  }
};
</script>