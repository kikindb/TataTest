function validate(name, email, comments){
    var validate = true;
    let regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regExpName = /^[a-zA-Z ]*$/;

    if(name.length<3){
        alert("The name might be at least 3 characters.");
        validate = false;
    } else if(!regExpName.test(String(name).toLowerCase())){
        alert("The name can only contain alphabetic characters or spaces.");
        validate = false;
    } else if(!regExpEmail.test(String(email).toLowerCase())){
        alert("Type a valid email.");
        validate = false;
    } else  if(comments.length==0){
        alert("Please leave your comments.");
        validate = false;
    }

    return validate;
}

function cleanModal(){
    $("#InputName").val("");
    $("#InputEmail").val("");
    $("#TextMessage").val("");
}