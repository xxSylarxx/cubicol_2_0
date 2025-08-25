(() => {

    class Avenger {
        /* private name: string;
        public team:string;
        public realName?:string; */
        static avgAge: number = 35;
        static getAvAge(){
            return this.name;
        }

        constructor(
            private name: string,
            private team: string,
            public realName?: string,
        ) {
            /* this.name=name;
            this.team=team;
            this.realName=realName; */

        }

        public bio(){
            return `${this.name}(${this.team})!!!!`;
        }

    }

    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    /* console.log(Avenger.avgAge); */
    console.log(antman);
    console.log(Avenger.avgAge);
    console.log(antman.bio());
    console.log(Avenger.getAvAge);
    

})()