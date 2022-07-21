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

      users : [
        {name : "Valisher",job : "FullStack Developer",isRes : true},
        {name : "Doniyor" , job : "Java Backend Developer" ,isRes : false},
        {name : "Aziz" , job : "Node JS Backend Developer" , isRes : true}
      ],
      todoList : [],
      inputValues : "",
      link : "https://kun.uz",
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
    },

    addTodoList(e){
      e.preventDefault();
      if(!this.inputValues){
        alert("Malumot kiritilmadi")
      }
      else{
        this.todoList.push(this.inputValues);
        console.log(this.todoList);
        this.inputValues = ""
      }
    }


  }
})

app.mount("#app")