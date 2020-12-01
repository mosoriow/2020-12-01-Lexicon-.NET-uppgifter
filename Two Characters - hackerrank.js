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

function testAlt(s) {
    if(s.length<=1)
        return false;

    let alt=[s[0],s[1]];

    if(alt[0]==alt[1])
        return false;

    for(let i=0;i<s.length;i++) {
        if(alt[i%2]!=s[i])
            return false;
    }
    return true;
}

function single(s) {
    let result='';
    
    for(let i=0;i<s.length;i++) {
        let toInsert=true;
        for(let j=0;j<result.length;j++)
            if(s[i]==result[j])
                toInsert=false;
        if(toInsert)
            result=result.concat(s[i]);
    }
    return result;
}

/*
function delChar(s, c) {
    return s.split(c).join('');
}
*/

function leaveTwo(s,c1,c2) {
    let generate='';
    for(let i=0;i<s.length;i++)
        if( (s[i]==c1) || (s[i]==c2) )
            generate=generate.concat(s[i]);
    return generate;
}

// Complete the alternate function below.
function alternate(s) {
    if(testAlt(s)) return s.length;
    else {
        let toExtract=single(s);
        let maxLength=0;
        for(let i=0;i<toExtract.length-1;i++) {
            for(let j=i+1;j<toExtract.length;j++) {
                let sTest=leaveTwo(s,toExtract[i],toExtract[j]);
                if(testAlt(sTest) && (maxLength<sTest.length))
                    maxLength=sTest.length;
            }
        }
        return maxLength;
    }

    /*
    if(testAlt(s)) return s.length;
    else {
        let toExtract=single(s);
        let maxLength=0;
        for(let i=0;i<toExtract.length;i++) {
            let testValue=alternate(delChar(s,toExtract[i]));
            if(maxLength<testValue)
                maxLength=testValue;
        }
        return maxLength;
    }
    */
    return testTwo(s,'c','x');
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const l = parseInt(readLine().trim(), 10);

    const s = readLine();

    const result = alternate(s);

    ws.write(result + '\n');

    ws.end();
}
