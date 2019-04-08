<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User! {{name}} age: {{userAge}}</p>
    <hr>
    <button @click="changeName">Change my name</button>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail  :name="name" @resetName="name=$event" :userAge="userAge"></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :userAge="userAge" @ageWasEdited="userAge = $event"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  data: function() {
    return { name: "Kamil", userAge:22};
  },
  methods: {
    changeName: function() {
      this.name = "Anna";
      console.log("zmieniam");
    }
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
