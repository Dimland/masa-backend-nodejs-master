export interface coffeShop {
    id: number;
    address: string;
    square: number;
    work: string;
    name: string
    
}




export interface systemError {
    code: number;
    message: string;
}

export interface sqlParameter {
    name: string;
    type: any;
    value: string | number;
}

// export interface coffeShop {
//     'ID магазина': number;
//     'Adres': string;
//     'square': string;
//     'Work hours': string;
//     'Name store': string;
    
// }