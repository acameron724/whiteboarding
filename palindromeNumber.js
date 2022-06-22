/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    let palindrome = false
    let forwardsNum = x.toString().split("")
    let lengthOfArray = forwardsNum.length
    let backwardsNum = []
    
    for (let i = lengthOfArray-1; i>= 0; i--) {
        backwardsNum.push(forwardsNum[i])
    }
    
    if (forwardsNum.join("") == backwardsNum.join("")) {
        palindrome = true
    }
    
    return palindrome
};
