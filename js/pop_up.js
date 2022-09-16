const openPopUpPhone=document.getElementById('open_pop_up_phone');
const closePopUpPhone=document.getElementById('pop_up_phone_close');
const popUpPhone=document.getElementById('pop_up_phone');
const popUpPhoneBody=document.getElementById('pop_up_phone_body');
const popUpPhoneBodyP=document.getElementById('pop_up_phone_body_p');
const popUpPhoneBodyInput1=document.getElementById('pop_up_phone_body_input1');
const popUpPhoneBodyInput2=document.getElementById('pop_up_phone_body_input2');
const popUpPhoneBodyInputBl=document.getElementById('pop_up_phone_body_inputBl');
const popUpPhoneBodyButton=document.getElementById('pop_up_phone_body_button');
 

openPopUpPhone.addEventListener('click',function(e){
    e.preventDefault();
    popUpPhone.classList.add('active');
});
closePopUpPhone.addEventListener('click',()=>{
    popUpPhone.classList.remove('active');
});

popUpPhone.addEventListener('click',(e)=>{
    if(e.target!==popUpPhoneBody && e.target!==popUpPhoneBodyP && e.target!==popUpPhoneBodyInput1
        && e.target!==popUpPhoneBodyInput2 && e.target!==popUpPhoneBodyInputBl && e.target!==popUpPhoneBodyButton){
        popUpPhone.classList.remove('active');
        popUpPhoneBody.classList.remove('active');
    }
});


const openPopUpApp=document.getElementById('open_pop_up_app');
const closePopUpApp=document.getElementById('pop_up_app_close');
const popUpApp=document.getElementById('pop_up_app');
const popUpAppBody=document.getElementById('pop_up_app_body');
const popUpAppBodyInput1=document.getElementById('pop_up_app_body_input1');
const popUpAppBodyInput2=document.getElementById('pop_up_app_body_input2');
const popUpAppBodyInputBl=document.getElementById('pop_up_app_body_inputBl');
const popUpAppBodyButton=document.getElementById('pop_up_app_body_button');


openPopUpApp.addEventListener('click',function(e){
    e.preventDefault();
    popUpApp.classList.add('active');
});
closePopUpApp.addEventListener('click',()=>{
    popUpApp.classList.remove('active');
});
popUpApp.addEventListener('click',(e)=>{
    if(e.target!==popUpAppBody && e.target!==popUpAppBodyP && e.target!==popUpAppBodyInput1
        && e.target!==popUpAppBodyInput2 && e.target!==popUpAppBodyInputBl && e.target!==popUpAppBodyButton){
        popUpApp.classList.remove('active');
        popUpAppBody.classList.remove('active');
    }
});

const openPopUpVideo=document.getElementById('open_pop_up_video');
const closePopUpVideo=document.getElementById('pop_up_video_close');
const popUpVideo=document.getElementById('pop_up_video');
const popUpVideoEl=document.getElementById('pop_up_video_el');
const popUpVideoBody=document.getElementById('pop_up_video_body');

openPopUpVideo.addEventListener('click',function(e){
e.preventDefault();
popUpVideo.classList.add('active');
});
closePopUpVideo.addEventListener('click',()=>{
popUpVideo.classList.remove('active');
popUpVideoEl.classList.remove('active');
popUpVideoEl.pause();
});
popUpVideo.addEventListener('click',(e)=>{
    if(e.target!==popUpVideoEl){
        popUpVideo.classList.remove('active');
        popUpVideoEl.classList.remove('active');
        popUpVideoEl.pause();
    }
});



