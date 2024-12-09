/*
Using a fixed array allows using 0-26 as key instead of hash
Use the first half to increment array values
Use second half to decrease and/or add to count [O(n)]
*/
function anagram(s: string): number {
    // no odd lengths
    if (s.length % 2) return -1;
    
    const half = s.length/2;
    const charCount = new Array(26).fill(0); // fixed array
    
     // Count characters in first half
    for (let i = 0; i < half; i++) {
        charCount[s.charCodeAt(i) - 97]++; // 97 is base of lowercase
    }
    
    // Decrement characters in second half
    let count = 0;
    for (let i = half; i < s.length; i++) {
        const index = s.charCodeAt(i) - 97;
        if (charCount[index] > 0) {
            charCount[index]--;
        } else {
            count++;
        }
    }
    return count;
}
