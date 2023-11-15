
      let count=0;
      let countValue=document.querySelector("#count-value");
      let btn=document.querySelectorAll('.btn');
      btn.forEach(function(btn){
        btn.addEventListener('click',function(e){
          const styleschange=e.currentTarget.classList;
          if(styleschange.contains('decrease')){
            count--;
          }
          else if(styleschange.contains('increase')){
            count++;
          }
          else{
            count=0
          }
          countValue.textContent=count;
          if(count>0){
          countValue.style.color='red';
        }
        else{
          countValue.style.color='green';

        }
        })
        

      })
