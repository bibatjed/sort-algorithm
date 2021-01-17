function bubbleSort(value = []){
    while(swapped){
        for(let i = 0; i < value.length; i++){
            if(value[i] > value[i + 1]){
                let temp = value[i];
                value[i] = value[i+1];
                value[i+1] = temp;
            }
        }
    }
}