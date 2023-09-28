#include <stdio.h>

int main()
{
    int n;
    printf("enter a num: ");
    scanf("%d", &n);

    // multiply by 2
    printf("multiplying %d by 2 is %d", n, n << 2);

    return 0;
}

// int main()
// {
//     int n = 5;
//     int power = 3;

//     printf("%d << %d = %d", n, power, n << power);

//     return 0;
// }

// 10 * 2^2