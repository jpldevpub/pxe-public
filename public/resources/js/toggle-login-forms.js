function serveAdminMessage () {
  if (count) {
    alert('There are ' + count + ' Enquiries that require Quotations.')
  } else {
    alert('There are Pending Enquiries to Show')
  }
}

function loginBlock () {
  document.getElementById('login-block').style.display = 'block'
  document.getElementById('create-account-block').style.display = 'none'
  /**
   * If exists = 9 this is just a standard call to the login page.
   * And will not project a popup to the user.
   */
  if (exists !== 9) {
    if (exists === 0) {
      alert('An Account Already Exist With the Details Provided.\nPlease Login or Register a New Account')
    }
    if (exists === 1) {
      alert('Great News! You can now Login.\nWelcome to phrexi')
    }
    if (exists === 2) {
      alert('Sorry!\nThis is embarressing but somethings gone wrong.\nOur tech team is looking in to the matter.')
    }
    if (exists === 3) {
      alert('Login attempt failed. Password or Email Incorrect\nPlease try again.')
    }
  }
}

function createAccBlock () {
  document.getElementById('login-block').style.display = 'none'
  document.getElementById('create-account-block').style.display = 'block'
  if (exists !== 9) {
    if (exists === 0) {
      alert('An Account Already Exist With the Details Provided.\nPlease Login or Register a New Account')
    }
    if (exists === 1) {
      alert('Great News! You can now Login.\nWelcome to phrexi')
    }
    if (exists === 2) {
      alert('Sorry!\nThis is embarressing but somethings gone wrong.\nOur tech team is looking in to the matter.')
    }
    if (exists === 3) {
      alert('Login attempt failed. Password or Email Incorrect\nPlease try again.')
    }
  }
}

function switchToLogin () {
  document.getElementById('login-block').style.display = 'block'
  document.getElementById('create-account-block').style.display = 'none'
  if (exists !== 9) {
    if (exists === 0) {
      alert('An Account Already Exist With the Details Provided.\nPlease Login or Register a New Account')
    }
    if (exists === 1) {
      alert('Great News! You can now Login.\nWelcome to phrexi')
    }
    if (exists === 2) {
      alert('Sorry!\nThis is embarressing but somethings gone wrong.\nOur tech team is looking in to the matter.')
    }
    if (exists === 3) {
      alert('Login attempt failed. Password or Email Incorrect\nPlease try again.')
    }
  }
}
