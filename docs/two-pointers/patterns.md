---
sidebar_position: 2
---

# Common Patterns

## Opposite Direction Pointers

Two pointers start at opposite ends and move toward each other.

**Use cases:**
- Finding pairs in a sorted array (e.g., Two Sum)
- Palindrome checking
- Reversing arrays/strings
- Container with most water type problems

**Movement logic:**
- Move left pointer right when current sum/value is too small
- Move right pointer left when current sum/value is too large
- Stop when pointers meet or cross

## Same Direction (Sliding Window Style)

Two pointers start together and move in the same direction, maintaining a window.

**Use cases:**
- Finding subarrays/substrings that meet conditions
- Removing duplicates
- Longest substring without repeating characters
- Minimum window substring

**Movement logic:**
- Fast pointer (right) expands the window
- Slow pointer (left) contracts the window
- Adjust based on whether current window is valid

## Fast and Slow Pointers

One pointer moves faster than the other (often 2x speed).

**Use cases:**
- Finding middle of linked list
- Detecting cycles
- Finding kth element from end

