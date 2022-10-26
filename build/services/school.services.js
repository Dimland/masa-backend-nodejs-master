"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolService = void 0;
const constants_1 = require("../constants");
const sql_helpers_1 = require("../helpers/sql.helpers");
;
class SchoolService {
    getBoardTypes() {
        return new Promise((resolve, reject) => {
            const result = [];
            const sql = require("msnodesqlv8");
            const connectionString = constants_1.DB_CONNECTION_STRING;
            const query = constants_1.Queries.WhiteBoardTypeById;
            sql_helpers_1.SqlHelper.SqlConnection()
                .then((connection) => {
                sql_helpers_1.SqlHelper.executeQueryArrayResult(connection, constants_1.Queries.WhiteBoardTypeById)
                    .then((queryResult) => {
                    const result = [];
                    if (queryResult !== undefined) {
                        queryResult.forEach(whiteBoardType => {
                            result.push(this.parseLocalBoardType(whiteBoardType));
                        });
                    }
                });
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
    getBoardType(id) {
        let result;
        return new Promise((resolve, reject) => {
            const sql = require("msnodesqlv8");
            const connectionString = constants_1.DB_CONNECTION_STRING;
            const query = constants_1.Queries.WhiteBoardTypeById;
            sql_helpers_1.SqlHelper.SqlConnection()
                .then((connection) => {
                sql_helpers_1.SqlHelper.executeQuerySingleResult(connection, `${constants_1.Queries.WhiteBoardTypeById} ${id}`)
                    .then((queryResult) => {
                    resolve(this.parseLocalBoardType(queryResult));
                })
                    .catch((error) => {
                    reject(error);
                });
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
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
    parseLocalBoardType(local) {
        return {
            'ID магазина': local.id_coffe_shops,
            'Adres': local.adress,
            'square': local.square,
            'Work hours': local.working_hours,
            'Name store': local.name
        };
    }
}
exports.SchoolService = SchoolService;
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
