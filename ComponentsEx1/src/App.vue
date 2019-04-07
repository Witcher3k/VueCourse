<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <app-list-group></app-list-group>
    <hr>
    <app-footer></app-footer>
    <user-name></user-name>
  </div>
</template>

<script>
import ListGroup from "./ListGroup.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default {
  components: {
    "app-list-group": ListGroup,
    "app-header": Header,
    "app-footer": Footer
  }
};
</script>

<style>
</style>
