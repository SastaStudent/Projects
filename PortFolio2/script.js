//overlay
let dot=document.querySelector("#sp1");
    let ct=1;
    let ok=setInterval(function(){
        dot.textContent+='.';
        ct++;
        if(ct===4){
            dot.textContent="";
            ct=0;
          
            
        }
     },1000);

setTimeout(function(){
    let Monu = new String("It's Me, Monu Chauhan");
           
    let sm=Monu.length;
  
    let nxt=document.querySelector("#nx");
    
  
    nxt.textContent="";
    
    function lay(index)
    {
        if(index>=sm) return
        // console.log(nxt);
        setTimeout(function(){
            nxt.textContent+=Monu[index];
            console.log(Monu[index]);
            lay(index+1)

        },1000);
        
    }
    lay(0)
},1000)
 
 