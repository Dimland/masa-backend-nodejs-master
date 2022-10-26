"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlHelper = void 0;
const error_helpers_1 = require("./error.helpers");
const constants_1 = require("../constants");
const constants_2 = require("../constants");
class SqlHelper {
    static SqlConnection() {
        return new Promise((resolve, reject) => {
            SqlHelper.sql.open(constants_1.DB_CONNECTION_STRING, (connectionError, connection) => {
                if (connectionError) {
                    reject(error_helpers_1.ErrorHelper.parseError(constants_2.ErrorCodes.ConnectionError, constants_2.General.DbconnectionError));
                }
                else {
                    resolve(connection);
                }
            });
        });
    }
    static executeQueryArrayResult(connection, query) {
        return new Promise((resolve, reject) => {
            connection.query(query, (queryError, queryResult) => {
                if (queryError) {
                    reject(error_helpers_1.ErrorHelper.parseError(constants_2.ErrorCodes.queryError, constants_2.General.SqlQueryError));
                }
                else {
                    if (queryResult !== undefined) {
                        resolve(queryResult);
                    }
                    else {
                        resolve([]);
                    }
                }
                ;
            });
        });
    }
    static executeQuerySingleResult(connection, query) {
        return new Promise((resolve, reject) => {
            const notFoundError = error_helpers_1.ErrorHelper.parseError(constants_2.ErrorCodes.noData, constants_2.General.noDataFound);
            connection.query(query, (queryError, queryResult) => {
                if (queryError) {
                    reject(error_helpers_1.ErrorHelper.parseError(constants_2.ErrorCodes.queryError, constants_2.General.SqlQueryError));
                }
                else {
                    if (queryResult !== undefined) {
                        switch (queryResult.length) {
                            case 0:
                                reject(notFoundError);
                                break;
                            case 1:
                                resolve(queryResult[0]);
                            default:
                                resolve(queryResult[0]);
                                break;
                        }
                    }
                    else {
                        reject(notFoundError);
                    }
                }
                ;
            });
        });
    }
}
exports.SqlHelper = SqlHelper;
SqlHelper.sql = require("msnodesqlv8");
