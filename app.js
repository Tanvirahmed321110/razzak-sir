let btnAddToContact = document.getElementById('btn-add-contact')
let btnCall = document.getElementById('btn-call-now');
let btnFollow = document.getElementById('btn-follow');



btnCall.addEventListener('click',()=>{
    let callConfirm = confirm('Are You Sure?')
    if(callConfirm){
        window.location.href='tel:01351515151'
    }
})


// follow facebook button
btnFollow.addEventListener('click',function(){
    window.open('https://facebook.com/tanvir321110','_blank')
})



// btn dark mode 
let btnDark =document.getElementById('btn-dark-mode')

btnDark.addEventListener('click',()=>{
    const mainProfile = document.getElementById('profile')
    
    if(btnDark.innerText==='Dark Mode'){
        btnDark.innerText='Light Mode'
        btnDark.style.backgroundColor='orange';
        
        mainProfile.style.backgroundColor='navy'
        mainProfile.style.color='white'
    }
    else{
        btnDark.innerText='Dark Mode';
        btnDark.style.backgroundColor='black';
        mainProfile.style.backgroundColor='white';
        mainProfile.style.color='black'
    }
    
})