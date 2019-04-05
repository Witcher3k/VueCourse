<template>
  <div>
    <h1>status:{{status}}</h1>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return { status: "Critical" };
  },
  methods: {
    changeStatus() {
      if (this.status === "Critical") {
        this.status = "Normal";
      } else {
        this.status = "Critical";
      }
    }
  }
};
</script>