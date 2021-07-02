
  
   let allSiblings = document.querySelectorAll('li');
       console.log(allSiblings.length);
    
   let arr = [];
       for(let elem of allSiblings){
         arr.push(elem.innerHTML);
       }
   
       console.log(arr);
   