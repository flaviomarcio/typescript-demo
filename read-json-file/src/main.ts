function parserJSONFile(){
    const fs = require('file-system');
    fs.readFile('./jsonfile.json', 'utf8' , (err, stdout) => {
        if (err) {
          console.error(err);
          return
        }
        console.log("list A")
        var jsonObject=JSON.parse(stdout);        
        let listA=jsonObject.listA;
        if(listA!==undefined){
            for(let value of jsonObject.listA){
                console.log(`   list ${value}`)
            };
        }

        console.log("list B")
        let listB=jsonObject.listB;
        if(listB!==undefined){
            for(let value of jsonObject.listB){
                console.log(`   list ${value}`)
            };
        }

      });
    return [];
}
  
function start(){
    parserJSONFile();
};

start();