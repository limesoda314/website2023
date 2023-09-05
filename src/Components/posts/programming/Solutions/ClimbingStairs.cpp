// Aug 27, 2023
// Solution by: Ann Miyaguchi  
#include <iostream>
#include <cmath>
#include <vector> 
using std::pow; 
using std::vector; 
using std::cout; 
using std::endl;  

class Solution {
public:
    int climbStairs(int n) {
        // basic recursive solution 
        // if (n <= 2) {
        //     return n; 
        // }
        // return climbStairs(n-1) + climbStairs(n-2); 

        // after solving the linear recurrence we get the below mathmatical formula 
        // cout << 0.4472135955 * (pow(1.61803398875, n+1) - pow(-0.61803398875, n+1)) << endl; 
        // return 0.4472135955 * (pow(1.61803398875, n+1) - pow(-0.61803398875, n+1)); 

        // basic iterative solution 
        if (n<=2) {
            cout << n << endl;
            return n; 
        } 

        // index n-1 represents the value associated with n
        vector<int> dp(n); 
        dp.at(0) = 1; 
        dp.at(1) = 2;
          

        for (int i = 2; i < n; i++) {
            dp.at(i) = dp.at(i-1) + dp.at(i-2); 
        }      
        cout << dp.at(n-1) << endl; 
        return dp.at(n-1); 
    }
};

int main() {

     // given test cases 
    int test1 = 2;
    int test2 = 3; 
    int test3 = 4; 
    // outputs
    // output1: 2
    // output3: 3

    Solution mySolution; 
    cout << "test1-------"  << endl; 
    mySolution.climbStairs(test1); 
    cout << "test2-------"  << endl;  
    mySolution.climbStairs(test2); 
    cout << "test2-------"  << endl;  
    mySolution.climbStairs(test3); 

    return 0; 
}