/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    let palindrome = false
    const forwardsNum = x.toString().split("")
    const lengthOfArray = forwardsNum.length
    const backwardsNum = []
    
    for (let i = lengthOfArray-1; i>= 0; i--) {
        backwardsNum.push(forwardsNum[i])
    }
    
    if (forwardsNum.join("") == backwardsNum.join("")) {
        palindrome = true
    }
    
    return palindrome
};
