
 document.addEventListener('scroll',(e)=>{
     const header = document.querySelector('.header')
     const{path} = e
     if (path[1].scrollY>100) {
         header.classList.add('triggered')
     }
     else{
         header.classList.remove('triggered')
     }    
 })

 const insWrapper = document.querySelector('.inspiration-wrapper')
 const slider = document.querySelector('.slider-wrapper')
 const reverese = document.querySelector('.reverse')


 observer = new IntersectionObserver((entries)=>{
     const {isIntersecting} = entries[0]
     console.log(entries);
    if (isIntersecting) {
      insWrapper.classList.add("fade");
    }
 })
 observer.observe(insWrapper)

 
 observer = new IntersectionObserver((entries) => {
   const { isIntersecting } = entries[0];
   console.log(entries);
   if (isIntersecting) {
     slider.classList.add('slider-wrapper-fade')
   }
   else{
       slider.classList.remove("slider-wrapper-fade");
   }
 });
 observer.observe(slider);


 observer = new IntersectionObserver((entries) => {
   const { isIntersecting } = entries[0];
   console.log(entries);
   if (isIntersecting) {
     reverese.classList.add("fade");
   } 
 });
 observer.observe(reverese);


 const hamburger = document.querySelector('.hamburger-menu')
 const nav = document.querySelector('.navbar')
 const sidebar = document.querySelector('.sidebar')

 hamburger.addEventListener('click',()=>{
  nav.classList.toggle('close')
  sidebar.classList.toggle('open')
 })

