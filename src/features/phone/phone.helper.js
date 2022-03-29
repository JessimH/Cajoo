export const validatePhone = (phone) => {
    return String(phone)
        .toLowerCase()
        .match(/^\d{9}$/);
};

export default validatePhone;