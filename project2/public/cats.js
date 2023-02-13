'use strict';

// eslint-disable-next-line no-unexpected-multiline
(function () {
  const errormessage = 'This field is required.'
  const errormatch = 'This field must match the provided email address.'
  const erroremail = 'This field must be a valid email including an @.'
  const formEl = document.querySelector('.jsform')
  const registeremailEl = document.querySelector('.Emailinput')
  const emailmatchEl = document.querySelector('.ConfirmEmailinput')
  const modalEL = document.querySelector('.modal')
  //const susbcribeEL = document.querySelector('.subscribe')
  const cancelEL = document.querySelector('.cancel')
  const cardlinkEL = document.querySelector('.card_links')
  var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/
  var dialog = document.querySelector('dialog')
  // eslint-disable-next-line no-undef

  //document.forms["jsform"]["emailmatch"].value

  cardlinkEL.addEventListener('click', () => {
    console.log('Testing')
    dialog.showModal()
  })

  cancelEL.addEventListener('click', () => {
    modalEL.close()
  })

  formEl.addEventListener('submit', (event) => {
    console.log('Testing!')
    //event.preventDefault()
    let isInvalid = false

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
   
    if (registeremailEl.value !== mailformat)
      document.querySelector('.registeremail__error').innerText = erroremail
   
    if (isInvalid){
      event.preventDefault()
    }
  })    
}
)()