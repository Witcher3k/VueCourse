<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name:{{name}} {{changeName()}}</p>
    <button @click="resetName">Reset Name</button>
  </div>
</template>

<script>
export default {
  props: {
    name: String
  },
  methods: {
    changeName() {
      return this.name
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      this.name = "-";
      this.$emit("nameReset", this.name);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
