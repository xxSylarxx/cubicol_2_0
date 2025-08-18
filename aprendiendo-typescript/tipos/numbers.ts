(()=>{

    let avengers:number=10;

    console.log(avengers)

    const villians:number = 20;

    if (avengers < villians){
        console.log('Estamos en problema')
    }else{
        console.log('Nos Salvamos')
    }

    avengers=Number('123AA');//coonvierte en numero cualquier string
    console.log({avengers})
})()