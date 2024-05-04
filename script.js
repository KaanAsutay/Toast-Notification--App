let toastBox = document.getElementById('toastBox')
let successMsg = 'Successfully submitted'
let errorMsg = 'Please fix the error!'
let invalidMsg = 'Invalid input, check again'


function showToast() {
   let toast = document.createElement('div');
   toast.classList.add('toast');
   toast.innerHTML = 'success';
   toastBox.appendChild(toast);
}