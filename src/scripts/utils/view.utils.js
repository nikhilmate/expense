export const generateDays = (dateInstance) => {
    if (dateInstance instanceof Date) {
        let days = [],
            totalDays = new Date(
                dateInstance.getFullYear(),
                dateInstance.getMonth() + 1,
                0
            ).getDate()
        if (totalDays > 0) {
            for (let i = 1; i <= totalDays; i++) days.push(i)
        }
        return days
    } else return false
}

export const isValidEmail = (_email) => {
    let _pattern = /^([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
        _test = _pattern.test(_email)
    if (_test === true) return true
    else return false
} 

export const uuid_r = () => {
    let randomString = (length, chars) => {
        var result = ''
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)]
        return result
    }
    let rString = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
    return rString
}

// Date utils
export const monthArray = [
    { name: 'January', value: '0' },
    { name: 'February', value: '1' },
    { name: 'March', value: '2' },
    { name: 'April', value: '3' },
    { name: 'May', value: '4' },
    { name: 'June', value: '5' },
    { name: 'July', value: '6' },
    { name: 'August', value: '7' },
    { name: 'September', value: '8' },
    { name: 'October', value: '9' },
    { name: 'November', value: '10' },
    { name: 'December', value: '11' }
];

const monthArr = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
export const getMonthName = (monthIndex) => {
    return monthArr[monthIndex]
};

export const getMonthIndex = (monthName) => {
    for (let i = 0; i < monthArr.length; i++) {
        if (
            monthName.toString().toLowerCase() ==
            monthArr[i].toString().toLowerCase()
        ) return i
    }
    return null
}

export const getYear = (date) => {
    return date.getFullYear()
}

export const setNewExp = () => {
    return new Date().getTime() + 86400000
}

export const getCookie = (name) => {
    let matches = document.cookie.match(
        new RegExp(
            '(?:^|; )' +
                name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
                '=([^;]*)'
        )
    )
    return matches ? decodeURIComponent(matches[1]) : undefined
}

export const getWeeksInMonth = (year, month) => {
    let weeks = 0,
        firstDate = new Date(year, month, 1),
        lastDate = new Date(year, month + 1, 0),
        numDays = lastDate.getDate()

    let start = 1,
        end = 7 - firstDate.getDay()
    while (start <= numDays) {
        weeks += 1
        start = end + 1
        end = end + 7
        if (end > numDays) end = numDays
    }
    return weeks
}

export const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate()
}

const HRS = []
const MTS = []
const YEAR = []
const FORMAT = ['AM', 'PM']
for (let i = 1; i <= 12; i++) HRS.push(i > 9 ? i : '0' + i)
for (let i = 0; i <= 59; i++) MTS.push(i > 9 ? i : '0' + i)
for (let i = 2021; i <= 2050; i++) YEAR.push(i)

export const getHourArr = () => (HRS)
export const getMinArr = () => (MTS)
export const getYearArr = () => (YEAR)
export const getFormatArr = () => (FORMAT)

export const getHour = (_dateInstance) => {
    let hours = _dateInstance.getHours()
    hours = hours % 12
    return hours > 9 ? hours : hours == 0 ? 12 : '0' + hours
}

export const getMins = (_dateInstance) => {
    let mins = _dateInstance.getMinutes()
    return mins < 10 ? '0' + mins : mins
}

export const getFormat = (_dateInstance) => {
    return _dateInstance.getHours() >= 12 ? 'PM' : 'AM'
}

export const getFormatedHour = (hour, format) => {
    let tempHour
    if (format == 'AM') tempHour = hour == 12 ? 0 : hour
    else tempHour = hour == 12 ? hour : hour + 12
    return tempHour
};

export const getTitleDate = (_dateInstance) => {
    return _dateInstance.toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}
