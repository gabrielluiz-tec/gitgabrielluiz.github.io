
let baseDaPiramide = 5;

for(i=baseDaPiramide; i>0; i--){
    let parOuImpar = baseDaPiramide%2;
    if (i%2 == parOuImpar){
        
            for(u=0; u<i; u++){
                if(i!=baseDaPiramide){
                    let espaços = (baseDaPiramide-i)/2
                    for(y=0; y<espaços; y++){
                        console.log(" ");
                    }
                    
                }
                
                console.log("*");
            };
            console.log("<br>");
            
    };
};
