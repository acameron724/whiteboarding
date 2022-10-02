// input = a2|b3|c
// output = aabbbc

const printLettersFunction = (inputString) => {
  const arraySplitByPipes = inputString.split('|')

  const finalArray = []

  arraySplitByPipes.forEach((element) => {
    const letterAndNumberArray = element.split("")
    
    if (!letterAndNumberArray[1]) {
      letterAndNumberArray[1] = 1
    }
    
    if (typeof letterAndNumberArray[1] === 'string') {
      const newInteger = parseInt(letterAndNumberArray[1])
      letterAndNumberArray.splice(1, 1, newInteger)
    }
    
    for(let i = 0; i < letterAndNumberArray[1]; i++) {
      finalArray.push(letterAndNumberArray[0])
    }
    
    // console.log(finalArray)
    // console.log(letterAndNumberArray)
  })

  const finalString = finalArray.join("")
  console.log(finalString)
  return finalArray
}

printLettersFunction('a2|b3|c')
