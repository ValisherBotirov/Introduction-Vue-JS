console.log("hello world");
console.log(Vue);

const app = Vue.createApp({
  data(){
    return {
      name : "Valisher",
      age : 20,
      email : "valisherbotirov1218@gmail.com"
    }
  }
})

app.mount("#app")