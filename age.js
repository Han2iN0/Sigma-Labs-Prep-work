const today  = new Date 
const [month,year,day] = [today.getMonth(),today.getFullYear(),today.getDay()]

const ageCalc = () => {
    const userInput = prompt ('please enter your date of birth (dd/mm/yyyy)
const birthDay = userInput.substring(0,2)
const birthMonth = userInput.substring(3,5)
const birthYear = userInput.substring(6)

let age = year - birthYear
    if (birthMonth>month || birthMonth === month && birthDay<day) {
        age -=1
    }
    return `Your age is: ${age}`
}

console.log(ageCalc())
