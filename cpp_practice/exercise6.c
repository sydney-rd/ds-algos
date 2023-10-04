// shifting operator

#include <stdio.h>

int main()
{
    int n;
    int shifter = 1;
    // logical shift

    printf("please enter a number: ");
    scanf("%d", &n);

    printf("arithmetic shift of n=%d i.e. %d << %d is: %d\n", n, n, shifter, n << shifter);
    // 10 << 1,
    // 0000 1010 // binary for 10
    // 0001 0100 // shift each bin digit to the left for 10 << 1
    // with correlated ^2, it adds up to 20

    // 2^0 = 1;
    // 2^1 = 2;
    // 2^2 = 4;
    // 2^3 = 8;
    // 2^4 = 16;
    // 2^5 = 32;
    // 2^6 =

    printf("logical shift of n=%d i.e. %d >> %d is: %d\n", n, n, shifter, n >> shifter);

    // 10 >> 1
    // 0000 0101
    // 1 + 4 = 5
    return 0;
}
