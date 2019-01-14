var fs = require('fs');

try {
    fs.renameSync('new.txt','new2.txt');
} catch (error) {
    alert('this is the erroe', error);
}