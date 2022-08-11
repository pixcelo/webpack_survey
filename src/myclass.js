//const fs = require("fs");
import { fs } from "fs";
//console.log(fs);

// function check(filePath) {
//     let isExist = false;
//     try {
//         fs.statSync(filePath);
//         isExist = true;
//     } catch(err) {
//         isExist = false;
//     }
//     return isExist;
// }

// export function testMkDir() {
//     alert("mkDirメソッドが実行された。");
//     fs.mkdir('test', (err) => {
//         if (err) { throw err; }
//         console.log('testディレクトリが作成されました');
//     });
// }

class MyClass {
    constructor(){
    }

    testMkDir() {
        alert("mkDirメソッドが実行された。");
        fs.mkdir('test', (err) => {
            if (err) { throw err; }
            console.log('testディレクトリが作成されました');
        });
    }
}

if( typeof module === 'object' ){
    module.exports = MyClass;
  }
