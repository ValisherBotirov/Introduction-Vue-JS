console.log("hello world");
console.log(Vue);

const app = Vue.createApp({

  data(){
    return {
      name : "Valisher",
      age : 20,
      email : "valisherbotirov1218@gmail.com",
      text : "This is toggle text",
      toggle : true,
      x : 0,
      y : 0,
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
    },

    mouseEnter(e){
      console.log(e);
      console.log("ishladi");
    },
    
    mouseMove(e){
      console.log(e.offsetX , e.offsetY);
      this.x = e.offsetX,
      this.y = e.offsetY
    }


  }
})

app.mount("#app")