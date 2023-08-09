function Access(Username, Password){
    
    if(Username === 'admin' && Password === 'p@ssword'){
        alert('login complete')
     
    } else {
        alert('login fail')
    }
    
}
let Username = prompt('enter username') ;
let Password = prompt('enter password') ;
Access("username", "password")

