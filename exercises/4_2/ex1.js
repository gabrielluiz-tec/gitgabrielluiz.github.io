let base = 8;
array1 = [];

for(i=base-1; i< base; i++){
    for(u=base ; u>0 ; u--){
        array1[i] += "*";
        console.log(array1[i]);
    }    
}




//     let parOuImpar = baseDaPiramide%2;
//     if (i%2 == parOuImpar){
//             for(u=baseDaPiramide; u>i; u--){
//                 console.log("*");
//             };
//             //console.log("\n");
//         let espaços = (u/2)-1
//         for (y = 0; y < ((espaços)-1); y++) {
//             console.log(" ");
//         };
//     };
// };