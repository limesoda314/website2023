#include <iostream>
#include <vector> 
#include <algorithm>

int maxProfit(std::vector<int>& prices); 

int main() {

    std::vector<int> test1 = {7,1,5,3,6,4};
    std::vector<int> test2 = {7,6,4,3,1};
    std::vector<int> test3 = {1,2};
    int output1 = 5;
    int output2 = 0; 
    int output3 = 1; 
    std::cout << maxProfit(test1) << std::endl;
    std::cout << maxProfit(test2) << std::endl; 
    std::cout << maxProfit(test3) << std::endl; 
    return 0; 
}



// Solution 2: should have a runtime of O(n)
int maxProfit(std::vector<int>& prices) {

    int best_result = 0; 
    int todays_best = 0; 
    int buy_value = prices.at(0); 

    for (unsigned i = 0; i < prices.size(); i++) {

        // check if today's is smaller, if it is then when we compare it to tomorrow's price, today's would be best :) 
        // also if today's is smaller then we can't even sell yesterday's price today 
        if (prices.at(i) < buy_value) {
            buy_value = prices.at(i); 
        }

        // what value would it sell today? 
        todays_best = prices.at(i) - buy_value; 

        // check if today's difference is better than total, if it is we change it 
        if (todays_best > best_result) {
            best_result = todays_best; 
        }
    }
    return best_result;
}

