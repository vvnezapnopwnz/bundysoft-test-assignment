export default arr => {
    if(arr.length === 0) {
        return []
    }
    let firstMin = Number.MAX_VALUE, secondMin = Number.MAX_VALUE;
    arr.forEach((el) => {
        if(el < firstMin && typeof el === "number") {
            secondMin = firstMin;
            firstMin = el;
        } else if((el < secondMin) && el !== firstMin) {
            secondMin = el;
        }
    })
    return  [firstMin, secondMin].reduce((s, e) => s + e, 0);
}
