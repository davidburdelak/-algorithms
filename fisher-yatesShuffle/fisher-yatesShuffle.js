var shuffle = ['A','B','C','D','E','F','G','H'];
var i = shuffle.length, j, temp;
while(--i > 0){
    j = Math.floor(Math.random() * (i+1));
    temp = shuffle[j];
    shuffle[j] = shuffle[i];
    shuffle[i] = temp;
}
console.log(shuffle);