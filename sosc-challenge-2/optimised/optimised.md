Optimized Problem 1 – Grid Rotation




1. The original version rotated rows using multiple loops and temporary arrays.  
2. The optimized version uses **in-place rotation** with `memmove`, which reduces memory usage and runtime.  
3. Right rotations move the last character to the front; left rotations move the first character to the end.  
4. Only non-empty rows are processed.  
5. The middle row is summed directly to produce Clue 1.  

This approach is faster and more memory-efficient, especially for large grids.




