function apply()
{
    var Fname = document.getElementById("fname").value;
    var Lname = document.getElementById("lname").value;
    var Email = document.getElementById("email").value;
    var Num = document.getElementById("num").value;
    var Add = document.getElementById("add").value;
    var State = document.getElementById("state").value;
    var Zip = document.getElementById("zip").value;
    var Ctr = document.getElementById("ctr").value;
    var Edul = document.getElementById("edul").value;
    var Edut = document.getElementById("edut").value;
    var myfile = document.getElementById("myFile").value;
    var Job = document.getElementById("job").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var filter1 =  /^[A-Za-z]+$/;
    
    if(Fname =='')
    {
        alert("First Name Should not be blank");
    }
    else if(Lname == '')
    {
        alert("Last Name Should not be blank");
    }
    else if(Email == '')
    {
        alert("email Should not be blank");
    }
    else if(!filter.test(Email))
    {
        alert("Enter valid email id");
    }
    else if(Num == '')
    {
        alert("Number Should not be blank");
    }
    else if(num.value.length!=10)
    {
        alert("Please enter 10 digit phone number")
    }
    else if(Add=='')
    {
        alert("Address Should not be blank");
    }
    else if(State=='')
    {
        alert("State Should not be blank");
    }
    else if(Zip=='')
    {
        alert("Zip Should not be blank");
    }
    else if(Ctr== 0)
    {
        alert("Country Should not be None");
    }
    else if(Edul== 0)
    {
        alert("Education Level Should not be None");
    }
    else if(Edut== 0)
    {
        alert("Education Type Should not be None");
    }
    else if(myfile == '')
    {
        alert("Please upload Resume");
    }
    else if(Job == '')
    {
        alert("Select atleast one job");
    }
    else if(!filter1.test(Fname))
    {
        alert("Enter Characters only in First Name field");
    }
    else if(!filter1.test(Lname))
    {
        alert("Enter Characters only in Last Name field");
    }
    else if(!filter1.test(State))
    {
        alert("Enter Characters only in State field");
    }
    else
    {
        alert("You Applied Successfully.");
        }
}

function ShowHideDiv(check) {
    var enumber = document.getElementById("Enumber");
    var empnum = document.getElementById("Yoe");
    Enumber.style.display = check.checked ? "block" : "none";
    Yoe.style.display = check.checked ? "block" : "none";
}