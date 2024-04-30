//ŞİMDİ ALICI OL SAYFASI İÇİN ENTEGRE EDİLEN MAİL GÖNDERME DOSYASI

window.onload = function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('KEYS', 'template_21ico0e', this) //E MAIL JS SITESINDEKİ KEY'LER
        .then(function(res) {
            //alert("Gönderim İşlemi Başarılı!"); 
            location.reload();
        })
    });
}
