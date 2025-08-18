(()=>{

    const fullName =(firstName: string, ...restArgs:string[]):string =>{
        return `${firstName} ${restArgs.join('')}`
    }


    const superman = fullName('Clark','Demo','Kent','demo1');
    console.log({superman})


})()