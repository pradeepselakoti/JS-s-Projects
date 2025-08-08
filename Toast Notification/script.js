
let toastBox = document.getElementById('toastBox');
let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
let weeoeMsg = '<i class="fa-solid fa-xmark"></i>error';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> 21 Invalid Input';

function showToast(msg){
    let toast = document.createElement('div')
    toast.classList.add('toast')
    toast.innerHTML = msg
    toastBox.appendChild(toast)

    if(msg.includes('error')){
        toast.classList.add('error');
    }

    if(msg.includes('Invalid')){
        toast.classList.add('Invalid');
    }

    setTimeout(()=>{
        toast.remove()
    },6000)

}

