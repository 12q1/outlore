const randomNumber = (min, max) => {
    return Math.round(min + Math.random() * (max - min));
}

const parseDate = (date) => {
    return Date(date)
}
