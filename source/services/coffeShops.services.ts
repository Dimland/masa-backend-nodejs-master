import { Connection, SqlClient, Error } from "msnodesqlv8";
import { coffeShop, systemError } from "../entities";
import { ErrorCodes, General, DB_CONNECTION_STRING, Queries } from "../constants";
import { ErrorHelper } from "../helpers/error.helpers";
import { SqlHelper } from "../helpers/sql.helpers";


interface localCoffeShop {
    id_coffe_shops: number,
    address: string,
    square: string,
    working_hours: string,
    name: string;
}

interface ICoffeShopsService {
    getCoffeShops(): Promise<coffeShop[]>;
    getCoffeShopById(id: number): Promise<coffeShop>;
    // addStore(adress: string,  square: number, working_hors: string, name: string;);
};



export class CoffeShopsService implements ICoffeShopsService {
    
    public getCoffeShops(): Promise<coffeShop[]> {
        return new Promise<coffeShop[]>((resolve, reject) => {
            const result: coffeShop[] = [];

                SqlHelper.executeQueryArrayResult<localCoffeShop>(Queries.allStores)

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
       
                  
      SqlHelper.executeQuerySingleResult<localCoffeShop>(Queries.store_found_id, id)

        
        .then((queryResult: localCoffeShop) => {
                    resolve(this.parseLocalCoffeShop(queryResult));
                })     
        .catch((error: systemError) => {
            reject(error);
        });
    });
}

    // public getBoardTypes(): Promise<coffeShop[]> {
    //     return new Promise<coffeShop[]>((resolve, reject) => {
    //         const result: coffeShop[] = [];
    //         const sql: SqlClient = require("msnodesqlv8");

    //         const connectionString: string = DB_CONNECTION_STRING;
    //         const query: string = Queries.allStores;

    //         sql.open(connectionString, (connectionError: Error, connection: Connection) => {
    //             // Например, сервер не работает
    //             if (connectionError) {
    //                 reject(ErrorHelper.parseError(ErrorCodes.ConnectionError, General.DbconnectionError));
    //             }
    //             else {
    //                 connection.query(query, (queryError: Error | undefined, queryResult: localWhiteBoardType[] | undefined) => {
    //                     if (queryError) {
    //                         reject(ErrorHelper.parseError(ErrorCodes.queryError, General.SqlQueryError));
    //                     }
    //                     else {
    //                         const result: whiteBoardType[] = [];
    //                         if (queryResult !== undefined) {
    //                             queryResult.forEach(whiteBoardType => {
    //                                 result.push(
    //                                     this.parseLocalBoardType(whiteBoardType)
    //                                 )
    //                             });
    //                         }
    //                         resolve(result);
    //                     }
    //                 })
    //             }
    //         });
    //     })
    // };


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