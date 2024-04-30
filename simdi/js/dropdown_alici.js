//ŞİMDİ ALICI OL SAYFASINDAKİ AÇILIR MENU DOSAYSI

const selectBox5 = document.querySelector('.select-box5');
const selectOption5 = document.querySelector('.select-option5');
const soValue5 = document.querySelector('#soValue5');
const options5 = document.querySelector('.options5');
const optionsList5 = document.querySelectorAll('.options5 li');

selectOption5.addEventListener('click',function(){
    selectBox5.classList.toggle('active');
});

optionsList5.forEach(function(optionsListSingle5) {
    optionsListSingle5.addEventListener('click' , function(){
        text = this.textContent;
        soValue5.value = text;
        selectBox5.classList.remove('active');

    })
});