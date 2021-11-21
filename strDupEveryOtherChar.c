
#include "stdlib.h"
#include "stdio.h"
#include <string.h>

char* strDupEveryOtherChar(const char* s) 
{
//initialize helper variables
int i = 0;
int j = 0;

//find the length of character string 
int count = sizeof(s)/sizeof(s[0]);

//allocate memory plus one for null terminator
count =+1;
char* return_string = (char *)malloc(count * sizeof(char));

//get every other character into memory while characters are present 
while('\0' != s[i]){
    if(0 == i%2){
        return_string[j] = s[i];
        j++;
    }
    i++;
}
return_string[j] = '\0';
return return_string;
}

int main()
{
	char str[] = "1y2u3i4h5b6l7r";
	printf("%s\n", strDupEveryOtherChar(str));
	
	return 0;
}