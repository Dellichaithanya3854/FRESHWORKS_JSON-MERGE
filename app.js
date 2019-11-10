const fs = require("fs");
var folder_path = "./input-folder";
var output_file_name = "myOutput.json";
var result_obj = {};
var cnt = 0;
fs.readdir(folder_path, (err, files) => {
  files.forEach(file => {
    cnt++;
    var obj = JSON.parse(fs.readFileSync(`${folder_path}/${file}`, "utf8"));

    for (var k in obj) {
      if (cnt == 1) {
        result_obj[k] = [];
      }
      obj[k].forEach(entry => {
        result_obj[k].push(entry);
      });
    }
    if (cnt == files.length) {
      var json = JSON.stringify(result_obj);
      fs.writeFile(output_file_name, json, "utf8", () => {
        console.log("Done!");
      });
    }
  });
});
