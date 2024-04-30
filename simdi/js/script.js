//BAŞVURU SAYFASINA ENTEGRE EDİLEN MAİL GÖNDERME DOSYASI

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('KEYS', 'KEYS', this) //E MAIL JS SITESINDEKİ KEY'LER
        .then(function(res) {
            //alert("Gönderim İşlemi Başarılı!"); 
            location.reload();
        })
    });
}
