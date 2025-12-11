#include <stdio.h>
#include <string.h>
#include <ctype.h>
#define MAX_ROWS 200
#define MAX_COLS 1024

static void strip_crlf(char *s) {
    int n = (int)strlen(s);
    while (n > 0 && (s[n-1] == '\n' || s[n-1] == '\r')) s[--n] = '\0';
}
int main(void) {
   FILE *gf = fopen("C:\\Users\\raksh\\OneDrive\\Desktop\\sosc-challenge-2\\Challenge-2--2nd-Years\\inputs\\grid.txt", "r");
   FILE *df = fopen("C:\\Users\\raksh\\OneDrive\\Desktop\\sosc-challenge-2\\Challenge-2--2nd-Years\\inputs\\directions.txt", "r");


    if (!gf || !df) {
        fprintf(stderr, "Error: inputs/grid.txt or inputs/directions.txt not found\n");
        return 1;
    }
    char grid[MAX_ROWS][MAX_COLS];
    int rowlen[MAX_ROWS];
    int rows = 0;
    while (rows < MAX_ROWS && fgets(grid[rows], MAX_COLS, gf)) {
        strip_crlf(grid[rows]);
        if (grid[rows][0] == '\0') continue;
        rowlen[rows] = (int)strlen(grid[rows]);
        rows++;
    }
    fclose(gf);
    char dirs[MAX_ROWS];
    int dcount = 0;
    int c;
    while ((c = fgetc(df)) != EOF && dcount < MAX_ROWS) {
        if (toupper(c) == 'L' || toupper(c) == 'R') dirs[dcount++] = (char)toupper(c);
    }
    fclose(df);
    for (int i = 0; i < rows; ++i) {
        int n = rowlen[i];
        if (n <= 1) continue; 
        char d = (i < dcount) ? dirs[i] : '\0';
        if (d == 'R') {
            char last = grid[i][n - 1];
            memmove(grid[i] + 1, grid[i], (size_t)(n - 1));
            grid[i][0] = last;
        } else if (d == 'L') {
            char first = grid[i][0];
            memmove(grid[i], grid[i] + 1, (size_t)(n - 1));
            grid[i][n - 1] = first;
        }
    }

    int middle = rows / 2;
    int sum = 0;
    for (int j = 0; j < rowlen[middle]; ++j) {
        sum += (unsigned char)grid[middle][j];
    }
    printf("Optimized Clue 1 = %d\n", sum);
    return 0;
}