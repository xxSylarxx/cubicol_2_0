(()=>{
 
    let flash:{name:string,age:number,powers:string[],getName?: () => string} ={
        name:"Barry Molina",
        age:20,
        powers:['Súper velocidad','Viajar en el tiempo']
    }


    flash = {
        name: 'Otro nombre',
        age:60,
        powers: ["super fuerza"],
        getName(){
            return this.name
        }
    }

    console.log(flash.getName)


})()