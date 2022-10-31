import { Connection, SqlClient, Error } from "msnodesqlv8";
import { coffeShop, systemError } from "../entities";
import { ErrorCodes, General, DB_CONNECTION_STRING, Queries } from "../constants";
import { ErrorHelper } from "../helpers/error.helpers";
import { SqlHelper } from "../helpers/sql.helpers";


interface localCoffeShop {
    id_coffe_shops: number,
    address: string,
    square: number,
    working_hours: string,
    name: string;
}

interface ICoffeShopsService {
    getCoffeShops(): Promise<coffeShop[]>;
    getCoffeShopById(id: number): Promise<coffeShop>;
    updateCoffeShopId(coffe_shop: coffeShop): Promise<void>;
    // addStore(adress: string,  square: number, working_hors: string, name: string;);
};



export class CoffeShopsService implements ICoffeShopsService {
    
    public getCoffeShops(): Promise<coffeShop[]> {
        return new Promise<coffeShop[]>((resolve, reject) => {
            const result: coffeShop[] = [];

                SqlHelper.executeQueryArrayResult<localCoffeShop>(Queries.allCoffeShops)

                        .then((queryResult: localCoffeShop[]) => {
                                queryResult.forEach((coffeShop: localCoffeShop) => {
                                result.push(this.parseLocalCoffeShop(coffeShop));
                                //console.log(result);
                                });
                                resolve(result);
                            })
                    
                
                .catch((error: systemError) => {
                    reject(error)
                });
        });
    }


    public getCoffeShopById(id: number): Promise<coffeShop> {
     
        return new Promise<coffeShop>((resolve, reject) => {
       
                  
      SqlHelper.executeQuerySingleResult<localCoffeShop>(Queries.coffeShopsId, id)

        
        .then((queryResult: localCoffeShop) => {
                    resolve(this.parseLocalCoffeShop(queryResult));
                })     
        .catch((error: systemError) => {
            reject(error);
        });
    });
}




    public updateCoffeShopId(coffe_shop: coffeShop): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            SqlHelper.executeQueryNoResult<localCoffeShop>(Queries.updCoffeShop, coffe_shop.address, coffe_shop.square, coffe_shop.work, coffe_shop.name, coffe_shop.id)
                .then(() => {

                    resolve();
                })
                .catch((error: systemError) => {

                    reject(error);
                });
        })
    }


    private parseLocalCoffeShop(local: localCoffeShop): coffeShop {
        return {
            id: local.id_coffe_shops,
            address: local.address,
            square: local.square,
            work: local.working_hours,
            name: local.name
        }
    }
}







// interface localAddStore {
//     adress: string;
//     square: number;
//     working_hors: string;
//     name: string;
// }




// var adress: string;
// var square: number;
// var working_hors: string;
// var name: string;