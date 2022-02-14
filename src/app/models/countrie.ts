export interface Country{
    id:string;
    population:string; 
    languages : string;

    currencies :{
         EUR:string;
    }

    name:{
        common:string;
    }
    
    translations :{
        fra:{
            common:string; 
        } 
    } 
     
    timezones:{
       [0]: string;
    }
    
    continents:{
        0 :string;
    }

    capital:{
        0: string;
    }

    car:{
        side : string;
    }


}