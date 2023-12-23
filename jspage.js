function passwordVerify(inputValue) {
  var passwordfilter = /^(?=.*[@])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
  if (inputValue.value.match(passwordfilter)) {
    var str2 = 'SmartServTest@123';
    var n = inputValue.value.localeCompare(str2);
    if (n == 0) {
      window.location.href = "dashboard.html";
      return false;
    }
    else {
      alert("Password valid! Not allowed to Login")
    }
    return true;
  }
  else {
    alert('Password should contain atleast 1 Capital, 1 Small letter, Numerical value and only @ as special character.')
    return false;
  }
}

function emailVerify() {

  var email = document.getElementById('email');
  var emailfilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!emailfilter.test(email.value)) {
    alert('Please provide a valid username in form of E-Mail');
    email.focus;
    return false;
  }
}
