// Aug 25, 2023
// Solution by: Ann Miyaguchi  
#include <iostream>
#include <vector>
#include <unordered_map> 
using std::cout; 
using std::endl;  
using std::vector; 
using std::unordered_map;

class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        unordered_map<int, int> solution_map; 
        for (int i =0; i < nums.size(); i++) {
            unordered_map<int, int>::iterator got = solution_map.find(nums.at(i)); 
            // if we don't find the item in the map, we insert it
            if (got == solution_map.end()) {
                solution_map.insert({nums.at(i), 1});
            } else {
                // we found the item in the map so we can return true
                got->second++; 
                return true; 
            }
        }
        return false; 
    }
};

int main() {
    // given test cases 
    vector<int> test1 = {1,2,3,1}; 
    vector<int> test2 = {1,2,3,4}; 
    vector<int> test3 = {1,1,1,3,3,4,3,2,4,2}; 

    Solution mySolution; 
    cout << mySolution.containsDuplicate(test1) << endl; 
    cout << mySolution.containsDuplicate(test2) << endl; 
    cout << mySolution.containsDuplicate(test3) << endl; 

    return 0; 
}