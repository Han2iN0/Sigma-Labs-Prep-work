const minMax = () => {
    let arr = prompt ('Please State the list of numbers you would like to be invistigated').string(',')
    let min = arr[0]
    let max = arr[0]
    let returnArr = []
    
    for (let i=0 ; arr.length>=i ; i++) {
        if (min<arr[i]) {
            min = arr[i]
        }
        if (max > arr[i]) {
            max = arr[i]
        }
    }
    returnArr.push(max)
    returnArr.push(min)
    return returnArr
}

console.log(minMax())
