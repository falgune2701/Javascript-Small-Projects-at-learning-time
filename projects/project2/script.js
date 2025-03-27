const form = document.querySelector('form')
form.addEventListener('submit', function (e){
e.preventDefault()  // stop  by default action
const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const result = document.querySelector('#result');
const user_sms = document.querySelector('#user-sms');
if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'please give a vaild height!';
} else if (weight === '' || weight<0 || isNaN(weight)) {
    result.innerHTML = 'please give a vaild weight!';
} else{
    // show result
    const bmi = (weight/((height*height)/10000)).toFixed(2);
   result.innerHTML = `<span> BMI = ${bmi}</span>`;
   if (bmi<18.6) {
    user_sms.innerHTML = "Under Weight";
   } else if (bmi>18.6 && bmi<24.9){
    user_sms.innerHTML = "Normal Range";
   } else {
    user_sms.innerHTML = "Overweight";
   }
}
})
