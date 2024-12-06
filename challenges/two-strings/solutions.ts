function twoStrings(s1: string, s2: string): string {
    // Write your code here
    const uniqueChars = new Set(s1);
    
    for (const char of uniqueChars) {
        if (s2.includes(char)) {
            return "YES";
        }
    }
    
    return "NO";
}
