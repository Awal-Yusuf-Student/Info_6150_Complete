'use strict';

// eslint-disable-next-line no-unexpected-multiline
(function () {
  const errormessage = 'This field is required.'
  const errormatch = 'Email does not match.'
  const formEl = document.querySelector('.jsform')
  //const submitEl = document.queryselector('.register_button')
  const registeruserEl = document.querySelector('.Usernameinput')
  //document.forms["jsform"]["username"].value
  const registeremailEl = document.querySelector('.Emailinput')
  //document.forms["jsform"]["email"].value
  
  const emailmatchEl = document.querySelector('.ConfirmEmailinput')
  //document.forms["jsform"]["emailmatch"].value

  formEl.addEventListener('submit', (event) => {
    console.log('Testing!')
    //event.preventDefault()
    let isInvalid = false

    if (!registeruserEl.value){
      document.querySelector('.registerusername__error').innerText = errormessage
      //alert("This field is required.")
      isInvalid = true
    }

    // eslint-disable-next-line no-cond-assign
    if (registeremailEl.value !== emailmatchEl.value){
      document.querySelector('.emailmatch__error').innerText = errormatch
      //alert("This field does not match.")
      isInvalid = true
    }

    if (!registeremailEl.value ){
      
      document.querySelector('.registeremail__error').innerText = errormessage
      //alert("This field is required.")
      isInvalid = true
    }
   
   
    if (isInvalid){
      event.preventDefault()
    }
  })    
}
)()