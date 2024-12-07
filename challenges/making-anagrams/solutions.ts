function makingAnagrams(s1: string, s2: string): number {
    let str1: string = s1, str2: string = s2;

    for(let i = 0; i < str1.length; i++) {
        let ndx = str2.indexOf(str1[i]);
        if(ndx !== -1) {
            str1 = str1.substring(0, i) + str1.substring(i + 1);
            str2 = str2.substring(0, ndx) + str2.substring(ndx + 1);
            i--; //setback
        }
    }
    return str1.length + str2.length;
}
