export const monthArray = [
    {name: 'Jan', value: '0'},
    {name: 'Feb', value: '1'},
    {name: 'Mar', value: '2'},
    {name: 'Apr', value: '3'},
    {name: 'May', value: '4'},
    {name: 'Jun', value: '5'},
    {name: 'Jul', value: '6'},
    {name: 'Aug', value: '7'},
    {name: 'Sep', value: '8'},
    {name: 'Oct', value: '9'},
    {name: 'Nov', value: '10'},
    {name: 'Dec', value: '11'}
]
export const yearArray = [
    2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030
]

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
