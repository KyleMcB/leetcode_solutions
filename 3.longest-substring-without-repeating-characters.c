/*
 * @lc app=leetcode id=3 lang=c
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
#include <string.h>
//0 <= s.length <= 5 * 104
//s consists of English letters, digits, symbols and spaces.
#define true 1
#define false 0
struct Window
{
    char* left;
    char* right;
    int size;
};
void advance_right(struct Window* win, char* end) {
    if (win->right == end) {

    } else {
        win->right++;
        win->size++;
    }
}
void advance_left(struct Window* win, char* end){
    if (win->left == end) {

    }   
    else {
        win->size--;
        win->left++;
    } 
}
void init_bool_set(int* set, int size){
    for (int i =0; i < size; i++){
        set[i]=0;
    }
}
const int setsize= 128;
int gen_algo(char* string, char* end) {
    struct Window window;
    int charset[setsize];
    init_bool_set(charset, setsize);
    window.left=string;
    window.right=string;
    window.size=0;
    int global_max=0;
    while (window.right != end){
        int num_of_char_in_set=charset[*window.right];
        if (num_of_char_in_set > 0){
            //contract the window
            charset[*window.left] -=1;
            advance_left(&window,end);
            continue;
        } else {
            //expand the window
            charset[*window.right]+=1;
            advance_right(&window, end);
            if (global_max < window.size){
                global_max= window.size;
            }
        }
    }
    return global_max;
}

int lengthOfLongestSubstring(char * s){
    int length = strlen(s);
    printf("hello\n");
    //handle cases of length 0, 1, and 2 then implement general algorithm
    if (length == 0) {
        return 0;
    } else if (length == 1) {
        return 1;
    } else if (length == 2) {
        if (s[0] == s[1]) {
            return 1;
        }
        return 2;
    }

    return gen_algo(s, &s[length]);
}
// @lc code=end

/*
987/987 cases passed (32 ms)
Your runtime beats 22.26 % of c submissions
Your memory usage beats 7.66 % of c submissions (6.2 MB)
And then I remember to take out printf for debugging...

987/987 cases passed (4 ms)
Your runtime beats 84.67 % of c submissions
Your memory usage beats 7.66 % of c submissions (5.9 MB)
*/