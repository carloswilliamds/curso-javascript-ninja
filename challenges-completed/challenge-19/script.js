let name = "ca123rlos";
let re = new RegExp("\\d", "g");
let rs;
while(rs = re.exec(name)){
    console.log(rs[0])
}