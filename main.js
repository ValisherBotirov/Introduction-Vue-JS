console.log("hello world");
console.log(Vue);

const app = Vue.createApp({
  template : `<h1>Hello Vue JS</h1>`
})

app.mount("#app")