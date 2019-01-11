new Vue({
  el: '#exercise',
  data: {
    classNames:
    {
    shrink:true,
    highlight:false,
    },
    borderClass:"border",
    blackClass:"black",
    textClass:"text",
    userClass:'',
    attach:true,
    myStyle:{
      width:'100px',
      height:'50px',
      backgroundColor:'gray',
    },
    progressBar:{
      width:'0px',
      backgroundColor:'red'
    }
  },
  methods: {
    startEffect: function() {
     
     setInterval(() => {
      console.log(this.classNames.shrink)
       this.classNames.shrink=!this.classNames.shrink;
       this.classNames.highlight =!this.classNames.highlight;
     }, 1000);
    
    },
    startProgress:function(){
      let vm = this;
      let width = 0;
      let interval  = setInterval(() => {
          width = width +10;
          vm.progressBar.width = width + 'px';
          if(width >= 200){
            clearInterval(interval);
          }
        }, 500);
    }
  }
});
