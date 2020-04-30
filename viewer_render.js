const fs = require("fs");
let _content = fs.readdirsync(__dirname+"/");
console.log(_content);

// obj
if(!global)global={}

// functions
global.exit = function(reason=0) {
  if(reason!==0)this.alert(reason),this.close();
}