<template>
  <div>
    <div class="example">{{ msg }}</div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello world!"
    };
  }
};
</script>

<style>
body {
  background: red;
}
</style>
