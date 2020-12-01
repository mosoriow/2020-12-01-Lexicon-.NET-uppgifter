'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function reduce(s) {
    if(s.length>1) {
        let result='';
        let i;
        for(i=0;i<s.length-1;i++)
            if(s[i]==s[i+1])
                i++;
            else
                result=result.concat(s[i]);
        if(i==s.length-1)
            result=result.concat(s[i]);
                
        return result;
    }
    else
        return s;
}

// Complete the superReducedString function below.
function superReducedString(s) {
    let reduced=s;
    let actual;
    do {
        actual=reduced
        reduced=reduce(actual);
    } while (reduced.length!=actual.length);
    if(reduced.length==0) return "Empty String";
    return reduced;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = superReducedString(s);

    ws.write(result + '\n');

    ws.end();
}
