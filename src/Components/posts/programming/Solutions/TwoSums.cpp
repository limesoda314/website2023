// Date: 8-24-2023
// Solution by: Ann Miyaguchi  
// Optimized Solution: https://leetcode.com/problems/two-sum/solutions/2990807/solution-c-java-python-both-brute-force-optimized-code/

#include <vector>           // used in general solution and testing
#include <unordered_map>    // optimized solution
#include <iostream>         // cout & endl
#include <iomanip>          // set precision
#include <time.h>           // time functionality 

std::vector<int> twoSum(std::vector<int>& nums, int target); 
std::vector<int> optimizedSolution(std::vector<int>&nums, int target); // after seeing optimized solution uses maps
void time_it(std::vector<int>&nums, int target); 

int main() {

    std::vector<int> test1 = {2,7,11,15};
    std::vector<int> test2 = {3,2,4};
    std::vector<int> test3 = {3,3}; 
    int target1 = 9; 
    int target2 = 6; 
    int target3 = 6; 

    std::cout << "------- test 1 ------" << std::endl; 
    time_it(test1, target1);

    std::cout << "------- test 2 ------" << std::endl; 
    time_it(test1, target1);

    std::cout << "------- test 3 ------" << std::endl; 
    time_it(test1, target1);

    return 0; 
}

void time_it(std::vector<int>&nums, int target) {
    // my solution ----------------------------
    time_t start, end;
    time(&start);
    
    twoSum(nums, target); 
    time(&end);
 
    double time_taken = double(end - start);
    std::cout << "brute force: " << std::fixed << time_taken << std::setprecision(9) << std::endl;

    // optimized solution ------------------- 
    time(&start);
    
    optimizedSolution(nums, target); 
    time(&end);
 
    time_taken = double(end - start);
    std::cout << "unordered map:" << std::fixed << time_taken << std::setprecision(9) << std::endl;
}

// brute force method, double for loop 
std::vector<int> twoSum(std::vector<int>& nums, int target) {
    std::vector<int> result(2); 
    for (unsigned int i = 0; i < nums.size()-1; i++) {
        //std::cout << "i: " << i << std::endl; 
        for (unsigned int j = i+1; j < nums.size(); j++ ) {
            //std::cout << "    j:" << j << std::endl; 
            if (nums.at(i) + nums.at(j) == target) {
                result.at(0) = i; 
                result.at(1) = j; 
                std::cout << "results: "<< result.at(0) <<  " " << result.at(1) << std::endl; 
                return result;
            }
        }
    }
    return result; 
}

// not my solution 
std::vector<int> optimizedSolution(std::vector<int>& nums, int target) {
    std::unordered_map<int,int> solution_map; 
    for (int i = 0; i < nums.size(); i++) {
        // A + B = target
        // target - A = B, so if we find B in the map for a certain index we know it exists 
        if (solution_map.find(target-nums.at(i)) == solution_map.end()) {
            // if B is not found for the given A
            solution_map[nums.at(i)] = i; 
        } else {
            // if B is found for the given A 
            // solution_map[target - nums.at(i)] will return the index for B and i would be the index for A 
            return {solution_map[target-nums.at(i)], i};
        }
    }
    return {-1,-1}; 
}