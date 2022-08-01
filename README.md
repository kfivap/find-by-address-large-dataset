# Postgres benchmark
## usecase: all block`s addresses from db

#### create 10mln rows
```bash
node src/generate.js
```

### get one address
```bash
node src/getByAddressOne.js
```

### get batch address
```bash
node src/getByAddressBatch.js
```


### CREATE INDEX
```sql
create index address on addresses(address);

drop index address on addresses ;
```



### My performance on ryzen 5 3500x, ssd, 16ram in docker on 10 mln rows
### NO INDEX
```bash
node ./src/getByAddressOne.js
0 0 random address found in 331 ms
1 0 random address found in 247 ms
2 0 random address found in 252 ms
3 0 random address found in 250 ms
4 0 random address found in 251 ms
5 0 random address found in 250 ms
6 0 random address found in 252 ms
7 0 random address found in 252 ms
8 0 random address found in 248 ms
9 0 random address found in 251 ms
gDYiXHAufr3yfyRmyGKJr2KlNFBUZMgmmgv1 true exist address found in 367 ms
fD4P67yp2NcUaONK6jKiNpWg0oHIvPjbmIsU true exist address found in 366 ms
CCwdFGkqnrqGigZw2Cx9qDa9GDb3aeda1yF9 true exist address found in 366 ms
1k9bvB3BwrvvTv2SPJJldwVhDKHnkTW9MRfE true exist address found in 366 ms
N55j5znCVkS0a4HqYQsehXYd4nS0HeEfw8MH true exist address found in 362 ms
VqqOszp9DyvnsBBI17I907EfhfMSbS5D750m true exist address found in 364 ms
nhmzWhHqnKnMyHyqIXshgQRLmYxBelQ6J02g true exist address found in 362 ms
eWLKmJSZn3xkhnANwQFkBFNvs4qqg9XXQruS true exist address found in 369 ms
5Uee3lvBlZwayHXVHDzIR9EqeYqk8pXv7iDS true exist address found in 369 ms
Dz7MPuzJD27Dg1bnmmGLHa1KQ0Gg6Ge0RfI5 true exist address found in 368 ms
```
### NO INDEX
```bash
node .\src\getByAddressBatch.js
0 0 of 1000 random address found in 409 ms
1 0 of 1000 random address found in 322 ms
2 0 of 1000 random address found in 320 ms
3 0 of 1000 random address found in 321 ms
4 0 of 1000 random address found in 322 ms
5 0 of 1000 random address found in 321 ms
6 0 of 1000 random address found in 319 ms
7 0 of 1000 random address found in 318 ms
8 0 of 1000 random address found in 323 ms
9 0 of 1000 random address found in 324 ms
0 1000 of 1000  exist address found in 372 ms
1000 1000 of 1000  exist address found in 368 ms
2000 1000 of 1000  exist address found in 370 ms
3000 1000 of 1000  exist address found in 368 ms
4000 1000 of 1000  exist address found in 371 ms
5000 1000 of 1000  exist address found in 367 ms
6000 1000 of 1000  exist address found in 365 ms
7000 1000 of 1000  exist address found in 367 ms
8000 1000 of 1000  exist address found in 367 ms
9000 1000 of 1000  exist address found in 366 ms
```
### WITH INDEX
```bash
node ./src/getByAddressOne.js
0 0 random address found in 64 ms
1 0 random address found in 1 ms
2 0 random address found in 1 ms
3 0 random address found in 1 ms
4 0 random address found in 1 ms
5 0 random address found in 2 ms
6 0 random address found in 1 ms
7 0 random address found in 1 ms
8 0 random address found in 1 ms
9 0 random address found in 1 ms
Cec2oc9kgLhePzRca7xNQtyUXQNoAxqknFCE true exist address found in 2 ms
m39EUs1UwDV955Bzryy7PRakB8i3hxVsy0p7 true exist address found in 1 ms
BqahOqefmsvAzaISs4efsERTJ0hCeWvf9jEi true exist address found in 1 ms
XOxTH9xJ8fZ2ZdXGf6HIyED5W8y0sxNnt3Ko true exist address found in 1 ms
ryfuAqtkNXywvgmavD3DFtJVTtfL2buZmfYC true exist address found in 1 ms
5yFd5vsoLTTZoZhjQlUb5pAm01iQzqZXWaDw true exist address found in 1 ms
ju1eoBHGm3oIS20KwOgZ9EmzlGRcIsIl10UW true exist address found in 2 ms
7sJgnVttHXcUdDV2anc5L3c54h87drJ9m6oz true exist address found in 2 ms
L8yHsy4KQYrARiuhMbg0SM8agQpPySDbDyJb true exist address found in 1 ms
41haCYLIi7AoRo8nRcUIywPLyBjPjOP0HkC7 true exist address found in 2 ms
```
### WITH INDEX
```bash
node .\src\getByAddressBatch.js
0 0 of 1000 random address found in 69 ms
1 0 of 1000 random address found in 7 ms
2 0 of 1000 random address found in 6 ms
3 0 of 1000 random address found in 6 ms
4 0 of 1000 random address found in 5 ms
5 0 of 1000 random address found in 5 ms
6 0 of 1000 random address found in 3 ms
7 0 of 1000 random address found in 3 ms
8 0 of 1000 random address found in 3 ms
9 0 of 1000 random address found in 3 ms
0 1000 of 1000  exist address found in 19 ms
1000 1000 of 1000  exist address found in 16 ms
2000 1000 of 1000  exist address found in 15 ms
3000 1000 of 1000  exist address found in 20 ms
4000 1000 of 1000  exist address found in 18 ms
5000 1000 of 1000  exist address found in 15 ms
6000 1000 of 1000  exist address found in 14 ms
7000 1000 of 1000  exist address found in 13 ms
8000 1000 of 1000  exist address found in 12 ms
9000 1000 of 1000  exist address found in 12 ms
```


