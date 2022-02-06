export interface Weather {
    name: string;
    
    sys:{
        country:string;
    }
    weather:{
        [0]:{
            icon:string;
        }
    }

    main:{
        temp:string;
    }

}