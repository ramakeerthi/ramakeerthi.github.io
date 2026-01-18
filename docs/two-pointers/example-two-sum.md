---
sidebar_position: 4
---

# Example: Two Sum (Sorted Array)

## Problem Statement

Given a **sorted** array of integers and a target sum, find two numbers that add up to the target. Return the indices of these two numbers (1-indexed).

**Example:**
```
Input: numbers = [2, 7, 11, 15], target = 9
Output: [1, 2]
Explanation: numbers[0] + numbers[1] = 2 + 7 = 9
```

## Intuition

Since the array is sorted:
- If current sum is too small, we need a larger number → move left pointer right
- If current sum is too large, we need a smaller number → move right pointer left
- If current sum equals target, we found our answer

## Step-by-Step Approach

1. Initialize `left = 0` and `right = array.length - 1`
2. While `left < right`:
   - Calculate `sum = numbers[left] + numbers[right]`
   - If `sum === target`: return `[left + 1, right + 1]` (1-indexed)
   - If `sum < target`: increment `left` (need larger number)
   - If `sum > target`: decrement `right` (need smaller number)
3. If no solution found, return empty array (problem guarantees solution exists)

## Solution

```javascript
function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    
    if (sum === target) {
      return [left + 1, right + 1]; // 1-indexed
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  
  return []; // Should never reach here if solution exists
}
```

## Complexity Analysis

- **Time Complexity**: O(n) - each element visited at most once
- **Space Complexity**: O(1) - only using two pointer variables

## Key Insight

The sorted property allows us to make greedy decisions about which pointer to move, eliminating the need for nested loops.

