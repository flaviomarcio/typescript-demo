

// function start(){
//     var lista1=[1,2,3,4,10];
//     var lista2=[2,4,8,10,12,15,18];
//     var lista3=[];
//     for(let v1 of lista1){
//         for(let v2 of lista2){
//             if(v1===v2){
//                 lista3.push(v1);
//             }        
//         }   
//     }
//     console.log(lista3);
// };

function tiposPrimitivos(){

    let objeto='{"jwt":"{2345234-52345234-523452-3452345-2345234}"}'
    let list='[1,2,3,4,5,{"jwt":"{2345234-52345234-523452-3452345-2345234}"}]'

    let obj=JSON.parse(list)
    //console.log(obj[5]["jwt"])

    let i=0

    while(i++<100){
        console.log(i)
    }

    console.log("[-] = [ " + String(1 - 5) + " ]")
    console.log("[+] = [ " + String(1 + 5) + " ]")
    console.log("[*] = [ " + String(1 * 5) + " ]")
    console.log("[/] = [ " + String(1 / 5) + " ]")

    let text=String("Flavio").replace("a","á")
    console.log(text.toLowerCase())
    console.log(text.toUpperCase())
    console.log(text+" Portela")

    let dt="2018-01-01"

    console.log(dt)
    console.log(Date(dt).toString("yyyy-mm-dd"))
    // console.log(dt.getMonth())
    // console.log(dt.getUTCFullYear())
    // console.log(dt.getDay())
    // console.log(dt.getDate())

    //console.log(obj["jwt"])

    var parseDataLong = Date.parse ("Jan 29, 2020");
    console.log(parseDataLong);
    // saída: 1580266800000
    var parseDataISO = Date.parse ("2020-01-29");
    console.log(parseDataISO);
    // saída: 1580256000000
    var parseDataShort = Date.parse ("01/29/2020");
    console.log(parseDataShort);
    // saída: 1580266800000


};


async function log(message)
{
    console.log(message)
}

async function testeCustomer()
{
    let customerList=[];

    for(let customer=1000; customer <= 1100; customer++ ){
        customerList.push(customer);
    }

    let dayList=[];
    for(let day=1; day <= 365; day++ ){
        for(let month=1; month <= 12; month++ ){
            for(let year=2020; year <= 2023; year++ ){
                dayList.push(new Date(year, month, day))
            }        
        }
    }

    for(let customerId of customerList){
        for(let day of dayList){
            await log('customerId: '+ customerId +', day:'+ day)
        }
    }
}

function main(){
    testeCustomer()
};

main()