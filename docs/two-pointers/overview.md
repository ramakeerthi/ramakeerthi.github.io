---
sidebar_position: 1
---

# Two Pointers Overview

The Two Pointers technique uses two pointers to traverse a data structure (usually an array or string) efficiently, often reducing time complexity from O(n²) to O(n).

## When to Use

- **Sorted arrays**: Finding pairs, triplets, or subarrays that meet certain conditions
- **Strings**: Palindrome checking, substring problems
- **Linked lists**: Finding middle, detecting cycles, merging lists
- **Optimization problems**: When brute force would be O(n²) or worse

## Core Idea

Instead of nested loops, use two pointers that move based on the problem's constraints. The pointers can:
- Start at opposite ends and move toward each other
- Start at the same end and move in the same direction
- Move at different speeds

The key is identifying when and how to move each pointer based on the current values they point to.

