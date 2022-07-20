console.log("hello world");
console.log(Vue);

const app = Vue.createApp({

  data(){
    return {
      name : "Valisher",
      age : 20,
      email : "valisherbotirov1218@gmail.com",
      text : "This is toggle text",
      toggle : true

    }
  },

  methods : {
    changeAge(newAge){
      this.age = this.age+1
    },

    changeName(){
      this.name = "Valisher Botirov"
    },

    toogleText(){
      this.toggle = !this.toggle
    }



  }
})

app.mount("#app")