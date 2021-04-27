const init = ()=>{
   console.log('init');
   window.addEventListener('scroll', function() { 
      console.log(window.scrollY);
      if (window.scrollY > 50) { 
         document.querySelector('#appNavBar').classList.add('fixed-top');
       }
       if (window.scrollY <= 50) { 
         document.querySelector('#appNavBar').classList.remove('fixed-top')
       }
    });
}