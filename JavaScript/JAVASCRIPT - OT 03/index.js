
let number = 0;
for (let i=0; i<11; i++) {
    console.log(number ++)
}
for (let i=0; i<20; i++){
    if (i%2 != 0){
    console.log(i)//
    }
}

let i=0; while (i < 10) {
    console.log(i); i++
}

for (i=0; i<100; i++){
    console.log(i);
    if (i==50){
        break;
    }
}

for (let i=0; i<20; i++ ){
    if(i === 13){
        continue
    }
    console.log(i);
}

let nomes = ['barbara', 'jose', 'cleiton']
for (nome of nomes){
    console.log(nome);
}