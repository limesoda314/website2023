// Aug 26, 2023
// Solution by: Ann Miyaguchi  
#include <iostream>
#include <vector>
#include <unordered_map>
using std::cout; 
using std::endl;  
using std::vector; 
using std::string;
using std::unordered_map; 

class Solution {
public:
    
    bool isAlienSorted(vector<string>& words, string order) {

        unordered_map<char,int> solution_map;  
        for (int i = 0; i < order.size(); i++) { // initialize the unordered map 
            solution_map.insert({order.at(i),i}); 
        }

        // iterate through the word list, using words.size-1 to ensure we don't compare the last word with nothing 
        for (int i = 0; i < words.size()-1; i++) {
            // iterate through each letter in the current word 
            for (int j = 0; j < words.at(i).size(); j++) {
                if (j < words.at(i+1).size()) {
                    // current word is after next word 
                    // at the j-th letter, we know that the next word should be first 
                    if (solution_map.at(words.at(i).at(j)) > solution_map.at(words.at(i+1).at(j))) {
                        cout << "false" << endl; 
                        return false; 
                    }
                    // current word is before next word 
                    if (solution_map.at(words.at(i).at(j)) < solution_map.at(words.at(i+1).at(j))) {
                        break; // end inner for loop and continue to next iteration 
                    }
                    // if the letter is the same, we don't do anything 
                    
                }
                else {
                    // if we end up at this if statement without breaking or returning false, we know that the next word is a subword and should go first 
                    cout << "false" << endl; 
                    return false; 
                    
                }
            }   
        }
        // if we end up having every word being fine in the list, it's true 
        cout << "true" << endl;
        return true; 
    }

    bool test(vector<string>& words, string order) {
        unordered_map<char,int> solution_map;  
        for (int i = 0; i < order.size(); i++) {
            solution_map.insert({order.at(i),i}); 
        }
        for (int i = 0; i < words.size()-1; i++) {
            // make sure we don't compare the last word with nothing 
            cout << i << " " << words.size() << endl; 
            for (int j = 0; j < words.at(i).size(); j++) {
                int status = 0; // 0 if same, 1 if automatically fine, 2 if wrong 
                // make sure j isn't larger than the next word's size 
                if (j < words.at(i+1).size()) {
                    // current word is after next word 
                    if (solution_map.at(words.at(i).at(j)) > solution_map.at(words.at(i+1).at(j))) {
                        cout << "false, next word should be before current word" << endl;
                        cout << "i,j " << i << "," << j << ": "; 
                        cout << words.at(i).at(j) << " " << solution_map.at(words.at(i).at(j)) << ", ";
                        cout << words.at(i+1).at(j) << " " << solution_map.at(words.at(i+1).at(j)) << endl; 
                        return false; 
                    }
                    // current word is before next word 
                    else if (solution_map.at(words.at(i).at(j)) < solution_map.at(words.at(i+1).at(j))) {
                        status = 1; 
                        cout << "current word is fine" << endl; 
                        cout << "i,j " << i << "," << j << ": "; 
                        cout << words.at(i).at(j) << " " << solution_map.at(words.at(i).at(j)) << ", ";
                        cout << words.at(i+1).at(j) << " " << solution_map.at(words.at(i+1).at(j)) << endl; 
                        break; // end inner for loop and continue to next iteration 
                    }
                    // current word is the same as next word 
                    else {
                        cout << "same: "; 
                        cout << i << "," << j << ":"; 
                        cout << words.at(i).at(j) << " " << solution_map.at(words.at(i).at(j)) << ", ";
                        cout << words.at(i+1).at(j) << " " << solution_map.at(words.at(i+1).at(j)) << endl; 
                    }
                }
                else {
                    // current word is the same as next word BUT current word still has more characters
                    if (status == 0) {
                        cout << "false, next word is a subword of current word" << endl; 
                        return false; 
                    }
                }
            }   
           
        }
        cout << "true" << endl; 
        return true; 
    }
    

};

int main() {
    vector<string> words1 = {"hello","leetcode", "lemur"};
    vector<string> words2 = {"word","world","row"};
    vector<string> words3 = {"apple","app"};
    string order1 = "hlabcdefgijkmnopqrstuvwxyz";
    string order2 = "worldabcefghijkmnpqstuvxyz";
    string order3 = "abcdefghijklmnopqrstuvwxyz";
    Solution solution;
    cout << "test1 ------------------"  << endl; 
    solution.isAlienSorted(words1, order1);
    cout << "test2 ------------------"  << endl;  
    solution.isAlienSorted(words2, order2);
    cout << "test3 ------------------"  << endl; 
    solution.isAlienSorted(words3, order3);
    return 0; 

}