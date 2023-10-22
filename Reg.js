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
var RegformDB=firebase.database().ref('Reg_form');

document.getElementById('Reg_Info').addEventListener('submit',submitForm);

function submitForm(e)
{
  e.preventDefault();

  var Fname=getElementVal('Fname');
  var Lname=getElementVal('Lname');
  var contact=getElementVal('Number');
  var email=getElementVal('emailId');
  var password=getElementVal('passWord');

 saveInfo(Fname,Lname,contact,email,password);
  //enable alert
 document.querySelector('.alert').style.display='block';
 //remove alert
 setTimeout(()=>{
  document.querySelector('.alert').style.display='none'; },3000);

  //reset the form
  document.getElementById("Fname").value = "";
  document.getElementById("Lname").value = "";
 document.getElementById("passWord").value = "";
  document.getElementById('Number').value="";
  document.getElementById('emailId').value="";
}

const saveInfo=(Fname,Lname,contact,email,password) =>{
  var newRegForm=RegformDB.push();
  newRegForm.set({
    Fname:Fname,
    Lname:Lname,
    contact:contact,
    email:email,
    password:password,
  });
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
}

