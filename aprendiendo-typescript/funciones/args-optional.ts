(()=>{

    const fullName = (fisrtName:string , lastName?:string):string => {
        return `${fisrtName} ${lastName || 'no LastName'}`;
    }

    const name = fullName('Tony');

    console.log({name});


})()