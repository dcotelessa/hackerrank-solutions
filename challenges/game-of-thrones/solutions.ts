function gameOfThrones(s: string): string {
    // Write your code here
    //sort all to groups of chars
    // I know if all are even, then palindrone
    const obj:{ [key: string]: number } = {};
    const len = s.length;
    
    for (let i = 0; i < len; i++){
        const charAt = s.charAt(i);
        obj[charAt] = (obj[charAt] ?? 0) + 1;
    }
    const odd = Object.values(obj).filter((count) => count % 2);
    
    // if no uneven letters, or if uneven, there is only one off
    // this odd letter serves as a pivot point for the anagram
    const isPalindrome = odd.length === 0
        || (odd.length === 1 && odd[0] % 2 === 1);
    
    return isPalindrome ? "YES" : "NO";
}
