"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeShopsService = void 0;
const constants_1 = require("../constants");
const sql_helpers_1 = require("../helpers/sql.helpers");
;
class CoffeShopsService {
    getCoffeShops() {
        return new Promise((resolve, reject) => {
            const result = [];
            sql_helpers_1.SqlHelper.SqlConnection()
                .then((connection) => {
                sql_helpers_1.SqlHelper.executeQueryArrayResult(connection, constants_1.Queries.allStores)
                    .then((queryResult) => {
                    queryResult.forEach((coffeShop) => {
                        result.push(this.parseLocalCoffeShop(coffeShop));
                    });
                });
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
    // public getBoardType(id: number): Promise<whiteBoardType> {
    //     let result: whiteBoardType;
    //     return new Promise<whiteBoardType>((resolve, reject) => {
    //         const sql: SqlClient = require("msnodesqlv8");
    //         const connectionString: string = DB_CONNECTION_STRING;
    //         const query: string = Queries.WhiteBoardTypeById;
    //         SqlHelper.SqlConnection()
    //             .then((connection: Connection) => {
    //                 SqlHelper.executeQuerySingleResult<localWhiteBoardType>(connection, `${Queries.WhiteBoardTypeById} ${id}`)
    //                     .then((queryResult: localWhiteBoardType) => {
    //                         resolve(this.parseLocalBoardType(queryResult));
    //                     })
    //                     .catch((error: systemError) => {
    //                         reject(error);
    //                     });
    //             })
    //             .catch((error: systemError) => {
    //                 reject(error);
    //             });
    //     });
    // }
    // public getBoardTypes(): Promise<whiteBoardType[]> {
    //     return new Promise<whiteBoardType[]>((resolve, reject) => {
    //         const result: whiteBoardType[] = [];
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
    parseLocalCoffeShop(local) {
        return {
            id: local.id_coffe_shops,
            address: local.adress,
            square: local.square,
            work: local.working_hours,
            name: local.name
        };
    }
}
exports.CoffeShopsService = CoffeShopsService;
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
