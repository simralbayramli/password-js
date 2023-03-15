const eyes=document.querySelector('.fa-eye')
const eye=false
eyes.addEventListener('click',function(){
  
   if(eye){
      document.querySelector('#password').setAttribute('type','password')
      eye=false
   }else{
      document.querySelector('#password').setAttribute('type', 'text')
      eye=true
   }

})
eyes.addEventListener('dblclick',function(){
   if(eye){
      document.querySelector('#password').setAttribute('type','text')
      eye=true
   }else{
      document.querySelector('#password').setAttribute('type', 'password')
      eye=false
   }

})


 