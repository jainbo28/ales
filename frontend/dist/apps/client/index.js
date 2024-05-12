let btn = document.getElementById('add-task');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let age = document.getElementById('age');
let gender = document.getElementById('gender');
let email = document.getElementById('email');
let typeTrening = document.getElementById('typeTrening');

btn.addEventListener('click', function() {

    let data ={
        firstName: firstName.value,
        lastName: lastName.value,
        age: age.value,
        gender: gender.value,
        email: email.value,
        typeTrening: typeTrening.value
    }
    
    enableDisableInputs( true )

    fetch(' /client/add' ,{
        method: 'post',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify( data )
    })
    .then( function(res){
        return res.json();
    })
    .then( function(data){

        enableDisableInputs( false )


        // Empty all inouts
        firstName.value = '';
        lastName.value = '';
        age.value = '';
        gender.value = '';
        email.value = '';
        typeTrening.value = '';


        // Focus the first input
        firstName.focus();

        // Alert the user
        alert('Client added successfully');


        console.log(data);
    })
    .catch( function(err){

        enableDisableInputs( false )


        // Alert the user
        alert('An error happend, please try again later');

        console.log(err);
    })
    
});

function enableDisableInputs( value )
{
    btn.disabled = value;
    firstName.disabled = value;
    lastName.disabled = value;
    age.disabled = value;
    gender.disabled = value;
    email.disabled = value;
    typeTrening.disabled = value;
}


let arr = [1,2,3,4,5,6,7];