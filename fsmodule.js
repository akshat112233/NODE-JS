const fs = require("fs");

fs.readFile("./new.txt", 'utf8' ,(err, data) => {
    if (err) throw err;
    else console.log(data);
});

fs.writeFile('./new.txt', 'this is data from writeFile', () => {
    fs.readFile("./new.txt", 'utf8', (err, data) => {
        if (err) throw err;
        else console.log(data);
    });
});

fs.appendFile('./new.txt', ' this is appended line through appendFile', () => {
    fs.readFile("./new.txt", 'utf8', (err, data) => {
        if (err) throw err;
        else console.log(data);
    });
});

fs.open('newfile', 'w', (err) => {
    if (err) throw err;
    else console.log("created!!");
    
});

fs.unlink('./newfile', (err) => {
    if (err) throw err;
    else console.log("./newfile is deleted");
})