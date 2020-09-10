// /**
//  * @param {string} s
//  * @return {number}
//  */


var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let seen = {};
    let max_len = 0;
    for (let end = 0; end < s.length; end++){
        if (s[end] in seen){
            start = Math.max(start, seen[s[end]]+1);
        }
        seen[s[end]] = end;
        max_len = Math.max(max_len, end-start+1)
        console.log(seen, start, end, max_len)
    }
    return max_len
};