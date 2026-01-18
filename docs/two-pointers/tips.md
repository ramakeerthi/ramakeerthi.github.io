---
sidebar_position: 3
---

# Tips and Common Mistakes

## Common Mistakes

1. **Not handling edge cases**: Empty arrays, single element, all elements same
   - Always check array length before starting
   - Consider what happens when pointers meet

2. **Moving pointers incorrectly**: Moving both pointers when only one should move
   - Only move the pointer that makes progress toward the solution
   - Don't move both pointers in the same iteration unless the problem requires it

3. **Off-by-one errors**: Using `<=` vs `<`, or `i` vs `i+1`
   - Be explicit about whether indices are inclusive or exclusive
   - Test boundary conditions mentally before coding

## Practical Tips

1. **Visualize the movement**: Draw the array and trace pointer movements on paper
   - Helps catch logic errors before coding
   - Makes it easier to explain your approach

2. **Start with brute force**: Understand the O(n²) solution first
   - Helps identify what the two pointers should track
   - Makes the optimization clearer

3. **Use descriptive variable names**: `left`/`right` or `slow`/`fast` instead of `i`/`j`
   - Improves readability
   - Makes the algorithm's intent clearer

