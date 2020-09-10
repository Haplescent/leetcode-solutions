This is a little non-obvious, but the problem can be solved in O(n) time. Just move forward the head cursor, and "shrink the tail" when duplicate chars appear, while maintaining the max substring length.

Need to take care of some special cases, like the start and end of string.


Implementing sliding window.  The boundries of the window will be start and end.  End will increment with iteration and start will be calculated based on what chacteracters have been seen.  If we have seen the character before, we will calculate a new start based on the last instance of that chacter's index + 1.  If we have not seen that character before, we will use previous start. We track what has been seen using a hash table, where the input is the character and the output is the index where the character was last seen.  While the window is sliding, we calculated the length of the window at each iteration. and assign it to max_len if that length is greater than the previous length.  we then return max_len

https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/