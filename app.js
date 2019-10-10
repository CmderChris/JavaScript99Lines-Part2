let friends = ['Emily', 'Luke', 'Audrey', 'Julian', 'Oliver'];

for (let i = 0; i < friends.length; i++) {
   
    //display each friends name
    console.log(friends[i] + ':')

    for (let j = 99; j > 0; j--) {
        if (j === 1) { 
            //custom lyrics for the last line
            console.log(j + ' line of code in the file, ' + j + ' line of code; ' + friends[i] + ' strikes it out, clears it all out, no more lines of code in the file!'); 
        } else {
            //default lyrics for values of j 99 to 2
            console.log(j + ' lines of code in the file, ' + j + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file.'); 
        }
    }

    console.log('------------------------------------');
}