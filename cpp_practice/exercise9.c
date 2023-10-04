#include <stdio.h>
#include <stdbool.h>

int main()
{

    int chars = 0, lines = 0, words = 0;
    char c;
    bool isword = false;

    while ((c = getchar()) != EOF)
    {

        chars++;

        if (c == "\n")
        {
            if (isword)
            {
                words++;
            }
            isword = false;
            lines++;
        }

        if (c == " ")
        {
            if (isword)
            {
                words++;
            }
            isword = false;
        }
      
    }

    return 0;
}