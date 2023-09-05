## Climbing Stairs
Date: 8-27-2023
Solution By: Ann Miyaguchi
[Leetcode Link](https://leetcode.com/problems/climbing-stairs/)

### Prompt
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

#### Example 1:
```
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
```

#### Example 2:
```
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 
```


Constraints:
```
1 <= n <= 45
```


## Linear Recurrence Solution 

For this problem, we can solve for the particular solution which would leave us with a formula that we can just plug n into. 

The steps we need to take in order to get the particular solution is listed below:

1) find the recurrence formula
2) solve for characteristic equation 
3) solve for roots
4) find general solutin
5) solve for initial conditions
6) plug in initial conditions into general solution 


### Find the Recurrence Formula 
To find the recurrence formula, we must first identify the base cases and the recursive step. 

In this problem, we know that if n=1, then there is only 1 distinct way, if n=2 there are 2 distinct ways, if n=3 there are 3 distinct ways, if n=4 there are 5 distinct ways and so forth.  

After n=2, we can use what we know from the previous steps in order to solve for the number of distinct ways at n.

If we were to do this in code, a basic solution is:

```c++
int climbStairs(int n) {
    if (n == 1) {
        return 1; 
    }
    if (n == 2) {
        return 2;
    }
    return climbStairs(n-1) + climbStairs(n-2); 
}
```

The first two if statements are the base cases and the bottom return statement is our recursive step. 

If were were to write out the recurrence formula, we are left with the following

Recurrence Formula: 
```
tn = t_{n-1} + t_{n-2} for n>2 
t1 = 1
t2 = 2
```

If we were to plug in n, we can see that we were right: 
```
t3 = t2+t1 = 3
t4 = t3+t2 = 5
t5 = t4+t3 = 8 
t6 = ... 
```

Furthermore, when n=0, then tn=1 since n=0 represents no steps which is one distinct way. 


### Solving for characteristic equation

The next step is to solve for the characteristic equation, this means that we are trying to find the *exact* formula. To do so, we must first convert our recurrence formula in the form of Fn.
```
Fn = F_{n-1} + F_{n-2} 
F1 = 1 
F2 = 2
```

Now, we know that Fn grows exponentially, we can assume that Fn = x^n. If we are to sub that in we get the following: 

```
Fn = x^n, sub in x^2
Fn = F_{n-1} + F_{n-2}
x^n = x^{n-1} + x^{n-2}

divide both sides by x^{n-2} 

x^n = x^{n-1} + x^{n-2} 
x^2 = x + 1 
```

Now that we are left with our characteristic equation, we can solve for the roots 
```
Characteristic Equation: x^2 - x - 1 = 0
```

### Solve for roots: 
Since our characteristic equation is a polynomial equation, we can use the quadratic formula to solve for the roots. 

```

    quadratic formula: x = (-b + sqrt(b^2-4ac))/2a; (-b - sqrt(b^2-4ac))/2a; 

    x = (-(-1) + sqrt((-1)^2-4(1)(-1)) )/2(1); -(-1) - sqrt((-1)^2-4(1)(-1))/2(1) 
    x = ( 1 + sqrt(5) ) / 2; ( 1 - sqrt(5) ) / 2 

```


### Finding the General Solution

Now assuming that g(n) satisfies our recurrence: g(n) = g1(n-1) + g2(n-2)

Then for any constant a, a*g(n) must also satisfy the recurrence. That means for all functions a1x_1^n and a2x_2^n satisfy our recurrence (where g1(n)=x_1^n and g2(n)=x_2^n)

If g1(n) and g2(n) are solutions of the recurrence, then so is their sum g(n)
g(n)=g1(n)+g2(n)

If so, we know that the following equation satisfies the recurrence and is our general solution:

```
Fn = a1x_1^n + a2x_2^n
```

### Solving for the initial conditions:     

Now that we know what the general solution is, we can now solve for the initial conditions 

We know that when: 
```
    n = 0 
    a1x_1^0 + a2x_2^0 = 1 -> a1 + a2 = 1
    n = 1 
    a1x_1^1 + a2x_2^1 = 1 -> a1(( 1 + sqrt(5) ) / 2) + a2(( 1 - sqrt(5) ) / 2 ) = 1

    Solve for a1 and a2: 
        If a2 = 1 - a1:

        Sub in 1-a1:        
            a1(( 1 + sqrt(5) ) / 2) + (1- a1)(( 1 - sqrt(5) ) / 2 ) = 1 
        Expand (1- a1)(( 1 - sqrt(5) ) / 2 )
            a1(( 1 + sqrt(5) ) / 2) + ( 1 - sqrt(5) ) / 2 + a1(-( 1 - sqrt(5) ) / 2) = 1 
        Combine like terms (a1): 
            ( 1 - sqrt(5) ) / 2 + a1 [-(1-sqrt(5))/2 + (1+sqrt(5))/2 ] = 1 
        commutative rule ( 1 - sqrt(5) ) / 2:  
            a1 [ (-1+sqrt(5))/2 + (1+sqrt(5))/2 ] = 1 - ( 1 - sqrt(5) ) / 2  
        Combine like terms: 
            a1 [ (-1+sqrt(5) + 1+sqrt(5))/2 ] = 2/2- ( 1 - sqrt(5) ) / 2      
            a1 [ (2sqrt(5))/2] = [1+sqrt(5)]/2
        divide by [ (2sqrt(5))/2]
            a1 = [1+sqrt(5)]/2 / [ (2sqrt(5))/2]
            a1 = [1+sqrt(5)] / [ (2sqrt(5))]

    a1 = [1+sqrt(5)] / [ (2sqrt(5))]; a2 = [-1+sqrt(5)] / [ (2sqrt(5))]

    Solve for Particular Solution 
        Plug in a1 and a2 into General Solution 
            Fn = a1x_1^n + a2x_2^n -> 
            Fn = [ (1+sqrt(5)) / (2sqrt(5)) * [( 1 + sqrt(5) )/2]^n ] + [(-1+sqrt(5)) / (2sqrt(5)) *  [( 1 - sqrt(5) )/2]^n
            Fn = 1/(sqrt(5)) ([1+sqrt(5)/2 * [(1+sqrt(5))/2]^n] + [-(1-sqrt(5))/2 * [(1-sqrt(5))/2]^n]) 
            Fn= 1/sqrt(5)(  [(1+sqrt(5))/2]^(n+1) - [(1-sqrt(5))/2]^(n+1)])

        
        Solution: 
            Fn = 1/sqrt(5)(  [(1+sqrt(5))/2]^(n+1) - [(1-sqrt(5))/2]^(n+1)])
```