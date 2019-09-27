<template>
  <div>
    <div class="example">{{ msg }}</div>
    <img src='./img/d670af31ly1g5qzgll29nj20u01fwx6p.jpg'/>
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
let a = new Promise(function(resolve, reject){
  setTimeout(() => {
      resolve(1)
  }, 1000);
});
let b = async function(){
  await a;
  console.log(1123123);
}
b()
</script>

<style>
body {
  background: red;
}
</style>
