export const validatePhone = (phone) => {
    return String(phone)
        .match(
            /^((\+)33|0)[1-9](\d{2}){4}$/
        );
};

export default validatePhone;