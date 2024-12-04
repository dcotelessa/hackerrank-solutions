function beautifulBinaryString(b: string): number {
    // Write your code here
    // regex finds match then goes to next (not matchAll)
    return (b.match(/010/g) ?? []).length;
}
