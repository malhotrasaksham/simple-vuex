<template>
  <div id="app">
    <input type="text" v-model="userId">
    <button @click="GetUsername">Fetch</button>
    <div>Username is: {{username}}</div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapState(["username"])
  },
  data() {
    return {
      userId: undefined
    };
  },
  methods: {
    ...mapActions(["SetUsername"]),
    GetUsername() {
      this.SetUsername(this.userId);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
