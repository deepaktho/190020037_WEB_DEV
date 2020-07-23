const abc = () => {
 const burger = document.querySelector('.burger');
 const content = document.querySelector('.content');
 burger.addventListner('click',()=>{
   content.classlist.toggle(`nav-active`);
 });



}
 abc();