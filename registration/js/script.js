const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signUp');

signUpButton.addEventListener('click', function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})
document.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.scroll-animation');
    const windowHeight = window.innerHeight;
  
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
  
      if (elementPosition < windowHeight - 100) {
        element.classList.add('visible');
      }
    });
  });
  
