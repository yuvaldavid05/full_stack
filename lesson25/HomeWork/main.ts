class Play {
    p : player[] = [ {
        firstName: 'yuval',
        lastName: 'david',
        age: 21,
        level: 1,
        gamesNumber: 3,
    } ,
    {
        firstName: 'yair',
        lastName: 'moshe',
        age: 17,
        level: 7,
        gamesNumber: 3,
    } ,
    {
        firstName: 'alon',
        lastName: 'tom',
        age: 23,
        level: 5,
        gamesNumber: 4,
    } ];

    constructor(){
        
    }


    GetName(){
        return ${this.p.firstName} ${this.p.lastName};
    }

    GetLevel (){
        return this.p.level;
    }

    play(){
        let win = 0;
        let n = Math.round(Math.random());

        if(n == 1 && this.p.gamesNumber >= 10){
            win++;
        } if (win == 3){
            this.p.gamesNumber ++;
        }
        

    }
}



interface player {
    firstName: string;
    lastName: string;
    age: number;
    level: number;
    gamesNumber: number;
}