document.getElementById('btn-submit').addEventListener('click', function(){
    const email = document.getElementById('user-mail').value;
    const pass = document.getElementById('user-pass').value;
    
    // N.B = do not match username or password like this just now for learning.
    if(email == 'arif@gmail.com' && pass == '12345'){
        window.location.href = 'bank-main-page.html';
    }
    else{
        alert('Tui password vole gechosh');
    }
})