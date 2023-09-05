// Aug 27, 2023
// Solution by: Ann Miyaguchi  
#include <iostream>
#include <vector> 
using std::vector; 
using std::cout; 
using std::endl;  

class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        
        vector<vector<int>> solution = {{1}};

        for (int i = 1; i < numRows; i++) {
            vector<int> row(i+1); // each row is i+1 long since we're using 0 index (row 0 is already initialized)
            
            for (int j = 0; j < i+1; j++) {
                // first and last hexagon is always 1 
                if (j == 0 || j == i) {
                    row.at(j) = 1; 
                } 
                else {
                    // every inner hexagon is a combo of the above hexagon to their right and left 
                    row.at(j) = solution.at(i-1).at(j-1) + solution.at(i-1).at(j); 
                }
            }
            solution.push_back(row); 
        }

        // output solution 
        for (int i = 0; i < solution.size(); i++) {
            cout << "row " << i+1 << ": "; 
            for (int j = 0; j < solution.at(i).size(); j++) {
                cout << solution.at(i).at(j) << " "; 
            }
            cout << endl; 
        }

        return solution; 
        
    }
};

int main() {

    int rows1 = 5;
    int rows2 = 1;
    int rows3 = 7;
    int rows4 = 3;

    Solution mySolution; 
    cout << "test1-----------" << endl; 
    mySolution.generate(rows1); 
    cout << "test2-----------" << endl; 
    mySolution.generate(rows2); 
    cout << "test3-----------" << endl; 
    mySolution.generate(rows3); 
    cout << "test4-----------" << endl; 
    mySolution.generate(rows4); 

    return 0;
}