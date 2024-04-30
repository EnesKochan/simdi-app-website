//BAŞVURU SAYFASINDAKİ AÇILIR MENU DOSAYSI

const selectBox = document.querySelector('.select-box');
const selectOption = document.querySelector('.select-option');
const soValue = document.querySelector('#soValue');
const options = document.querySelector('.options');
const optionsList = document.querySelectorAll('.options li');

selectOption.addEventListener('click',function(){
    selectBox.classList.toggle('active');
});

optionsList.forEach(function(optionsListSingle) {
    optionsListSingle.addEventListener('click' , function(){
        text = this.textContent;
        soValue.value = text;
        selectBox.classList.remove('active');

    })
});


const selectBox1 = document.querySelector('.select-box1');
const selectOption1 = document.querySelector('.select-option1');
const soValue1 = document.querySelector('#soValue1');
const options1 = document.querySelector('.options1');
const optionsList1 = document.querySelectorAll('.options1 li');

selectOption1.addEventListener('click',function(){
    selectBox1.classList.toggle('active');
});

optionsList1.forEach(function(optionsListSingle1) {
    optionsListSingle1.addEventListener('click' , function(){
        text = this.textContent;
        soValue1.value = text;
        selectBox1.classList.remove('active');

    })
});

const selectBox2 = document.querySelector('.select-box2');
const selectOption2 = document.querySelector('.select-option2');
const soValue2 = document.querySelector('#soValue2');
const options2 = document.querySelector('.options2');
const optionsList2 = document.querySelectorAll('.options2 li');

selectOption2.addEventListener('click',function(){
    selectBox2.classList.toggle('active');
});

optionsList2.forEach(function(optionsListSingle2) {
    optionsListSingle2.addEventListener('click' , function(){
        text = this.textContent;
        soValue2.value = text;
        selectBox2.classList.remove('active');

    })
});


const selectBox3 = document.querySelector('.select-box3');
const selectOption3 = document.querySelector('.select-option3');
const soValue3 = document.querySelector('#soValue3');
const options3 = document.querySelector('.options3');
const optionsList3 = document.querySelectorAll('.options3 li');

selectOption3.addEventListener('click',function(){
    selectBox3.classList.toggle('active');
});

optionsList3.forEach(function(optionsListSingle3) {
    optionsListSingle3.addEventListener('click' , function(){
        text = this.textContent;
        soValue3.value = text;
        selectBox3.classList.remove('active');

    })
});

const selectBox4 = document.querySelector('.select-box4');
const selectOption4 = document.querySelector('.select-option4');
const soValue4 = document.querySelector('#soValue4');
const options4 = document.querySelector('.options4');
const optionsList4 = document.querySelectorAll('.options4 li');

selectOption4.addEventListener('click',function(){
    selectBox4.classList.toggle('active');
});

optionsList4.forEach(function(optionsListSingle4) {
    optionsListSingle4.addEventListener('click' , function(){
        text = this.textContent;
        soValue4.value = text;
        selectBox4.classList.remove('active');

    })
});