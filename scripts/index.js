const operate = () => {
    const n1 = parseInt(document.getElementById("n1").value);
    const n2 = parseInt(document.getElementById("n2").value);

    
    const operation = document.getElementById("operation").value;
    let result = 0;
    switch(operation){
        case'suma':
            result=n1 + n2;
            break;
        
        case'resta':
            result=n1 - n2;
            break;
        
        case'mul':
            result=n1 * n2;
            break;
        

        case'div':
            result=n1 / n2;
            break;
        
    }
    document.getElementById("result").textContent = result.toFixed(2);
}
