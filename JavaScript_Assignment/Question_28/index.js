const printTrianglePattern = (n) =>{
    for(let i=1;i<=n;i++){
        let temp = "";
        for(let j=1;j<=i;j++){
            temp +="*";
        }
        console.log(temp);
    }
}

const printSquarePattern = (n) =>{
for(let i=1;i<n+1;i++){
    let temp = "";
    for(let j=1;j<n+1;j++){
        temp +="*";
    }
    console.log(temp);
}
}


const printPyramidPattern = (n)=> {
    for(let i=1;i<n+1;i++){
        let cnt = 2*i -1;
        let temp= "";
        for(let k=n+1-i;k>=0;k--){//add required space
            temp +=" ";
        }
        for(let j=0;j<cnt;j++){//add star
            temp +="*";
        }
        console.log(temp);
    }
}

printTrianglePattern(5);
console.log("--------------------------");
printSquarePattern(5);
console.log("--------------------------");
printPyramidPattern(5);