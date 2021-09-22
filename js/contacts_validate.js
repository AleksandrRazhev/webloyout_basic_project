const contactsValidate = () => {

    const selector = document.querySelector("input[type='tel']");
    const inputmask = new Inputmask ("+7 (999) 999-99-99");

    inputmask.mask(selector);

    new JustValidate('.contacts__form', {
        rules: {
            name: {
                required: true,
                minLength: 3,
                maxLength: 50,
            },
            tel: {
                required: true,
                function: (name, value) => {
                    const phone = selector.inputmask.unmaskedvalue();
                    return Number (phone) && phone.length === 10
                }
            },
        },
        messages: {
            name: {
                minLength: 'Недопустимый формат',
            },
            tel: 'Недопустимый формат',
        },
        colorWrong: '#D11616',
    });
};

contactsValidate()
