const str = 'radar';

const palindrome = (inStr) => {
    inStr = inStr.replace(/\W/g, '');
    inStr = inStr.toLowerCase();

    return inStr === inStr.split('').reverse().join('');
}

console.log(palindrome(str));