//ŞİMDİ ALICI OL SAYFASINDAKİ TÜM ÖĞELERİN DOLDURULMASI ZORUNLUDUR İÇİN YAZILAN BUTON FONKSİYONU

document.addEventListener("DOMContentLoaded", function () {


    // Get the form element
    const contactForm = document.getElementById("contactForm");

    // Get all the manual input elements inside the form
    const manualInputs = contactForm.querySelectorAll("input[type='text'], input[type='email'], select, textarea");

    // Get all the radio button groups
    const radioGroups = contactForm.querySelectorAll('input[type="radio"][name]');

    // Get the submit button by its ID
    const refresh = document.getElementById("refresh");
    
    // Function to check if all manual input fields are filled
    function areManualInputsFilled() {
        let allManualInputsFilled = true;

        manualInputs.forEach((input) => {
            if (input.hasAttribute("required") && input.value.trim() === "") {
                allManualInputsFilled = false;
                input.classList.add("required-field");
            } else {
                input.classList.remove("required-field");
            }
        });

        return allManualInputsFilled;
    }

    // Function to check if all radio button groups have a selection
    function areRadioGroupsFilled() {
        let allRadioGroupsFilled = true;

        radioGroups.forEach((group) => {
            const groupName = group.getAttribute("name");
            const radioButtons = contactForm.querySelectorAll(`input[type="radio"][name="${groupName}"]`);

            let groupFilled = false;

            radioButtons.forEach((radio) => {
                if (radio.checked) {
                    groupFilled = true;
                }
            });

            if (!groupFilled) {
                allRadioGroupsFilled = false;
            }
        });

        return allRadioGroupsFilled;
    }

    // Function to check overall validity and enable/disable the submit button
    function checkValidity() {
        const manualInputsFilled = areManualInputsFilled();
        const radioGroupsFilled = areRadioGroupsFilled();

        if (manualInputsFilled && radioGroupsFilled) {
            refresh.removeAttribute("disabled");
        } else {
            refresh.setAttribute("disabled", "disabled");
        }
    }

    // Add event listeners for form input and radio buttons
    contactForm.addEventListener("input", checkValidity);
    radioGroups.forEach((group) => {
        group.addEventListener("change", checkValidity);
    });

    // Check initial validity
    checkValidity();
});

