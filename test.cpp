#include <iostream>
using std::cout;
using std::endl; 
int main() {
    int i = 0;
    while (i < 20) {
        cout << "i: " << i << endl;
        int j = 0; 
        while (j < 50) {
            cout << "    j: " << j << endl;
            j+=10;
            i++; 
            
            if (i == 12) {
                cout << "continue" << endl; 
                continue; 
            }
        }
        

    }


    return 0; 
}