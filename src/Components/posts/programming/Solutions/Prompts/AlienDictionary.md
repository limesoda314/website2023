# Verifying an Alien Dictionary
Date: 8-26-2023
Solution by: Ann Miyaguchi
[Leetcode link](https://leetcode.com/problems/verifying-an-alien-dictionary/)
## Prompt
In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

 

#### Example 1:
```
Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
```

#### Example 2:
```
Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
```

### #Example 3:
```
Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
```

Constraints:
```
1 <= words.length <= 100
1 <= words[i].length <= 20
order.length == 26
All characters in words[i] and order are English lowercase letters.
```


## Solution 

Time Complexity: O(M+N) -> O(M)

* where N is storing the letter order and M is the total number of characters in the list. 
* Since N is fixed at 26, the time complexity is just O(M) since at worst we'll iterate through every letter in every word in the list

In this problem, we need to ensure that the list is lexicographically in the alien language. Examples will use the normal roman alphabet

If we were to compare two words, we can iterate through both words and compare each letter.

1) if at the index, both letters are the same, we move on 
2) if at the index, the first word's letter occurs earlier in the alphabet, we know that the ordering is fine between the two words
3) if at the index, the first word's letter occurs later in the alphabet, we know that the ordering is wrong between the two words 

In the case that the two words do not have the same length and we reach the end of one of the words BUT all letters so far were the same then: 

4) if the first word is smaller than the second, the ordering is correct
5) if the second word is smaller than the first, the ordering is wrong 

Examples: 

1) ["Apple", "Apps"] == true: for "Apple" and "Apps" at the first letter, we ignore the first three letters and compare the 4th (l and s) 
2) ["Apple", "Apps"] == true: for "Apple" and "Apps" we compare (l and s), l comes before s so the ordering is correct
3) ["Apps", "Apple"] == false:  for "Apps" and "Apple" we compare (s and l), l comes before s so the ordering is wrong
4) ["App", "Apple"] == true: the first three letters in "App" and "Apple" are the same. Since App has fewer letters than Apple, the ordering is correct
5) ["Apple", "App"] == false: the first three letters in "App" and "Apple" are the same. Since App has fewer letters than Apple, the ordering is wrong
