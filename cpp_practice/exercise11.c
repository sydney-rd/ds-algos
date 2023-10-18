void swap(int *i, int *j)
{
    int swap = *i;
    *i = *j;
    *j = swap;
}

int main()
{

    int i = 123, j = 456;
    swap(&i, &j);

    return 0;
}