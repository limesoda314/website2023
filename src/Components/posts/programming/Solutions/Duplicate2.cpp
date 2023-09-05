// Aug 25, 2023
// Solution by: Ann Miyaguchi  
#include <vector>
#include <iostream>
#include <unordered_map>
using std::cout;
using std::endl; 
using std::vector; 
using std::unordered_map;

class Solution {
public:
    bool containsNearbyDuplicate(vector<int>& nums, int k) {
        unordered_map<int,int> solution_map; 

        for (int i=0; i < nums.size(); i++) {
            unordered_map<int, int>::iterator got = solution_map.find(nums.at(i)); 
            // if we don't find the item from the array in the solution map, we insert it into the map
            if (got == solution_map.end()) {
                solution_map.insert({nums.at(i), 1}); 
            } else {
                // if we find the item from the array in the solution map we can end the for loop 
                cout << "true" << endl; 
                return true; 
            }
            // if solution_map has a size of k, we need to delete the first item since they'll be too far away for us to consider
            if (solution_map.size() > k) {
                // using nums.at(i-k) instead of solution_map.begin() since it's likely that the unordered map stores the values in a way that does not align with the nums array; we would need to use an ordered map to ensure that they're stored in the same order
                solution_map.erase(solution_map.find(nums.at(i-k))); 
            }
        }
        cout << "false" << endl;
        return false; 
    }
};

int main() {
    // given test cases
    vector<int> test1 = {1,2,3,1}; 
    vector<int> test2 = {1,0,1,1}; 
    vector<int> test3 = {1,2,3,1,2,3}; 
    int k1 = 3;
    int k2 = 1;
    int k3 = 2;

    Solution mySolution; 
    cout << "test1-----------" << endl; 
    mySolution.containsNearbyDuplicate(test1, k1); 
    cout << "test2-----------" << endl; 
    mySolution.containsNearbyDuplicate(test2, k2); 
    cout << "test3-----------" << endl; 
    mySolution.containsNearbyDuplicate(test3, k3);

    return 0; 
}