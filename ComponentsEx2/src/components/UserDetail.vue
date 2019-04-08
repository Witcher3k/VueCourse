<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name:{{name}} {{changeName()}}</p>
    <p>{{name}}</p>
    <p>{{userAge}}</p>
    <button @click="resetName">Reset Name</button>
  </div>
</template>

<script>
import {eventBus} from "../main.js"

export default {
  props: {
    name: String,
    userAge:Number
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
    },
    created(){
      eventBus.$on('ageWasEdited',(data)=>{
        this.userAge = age;
      });
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
