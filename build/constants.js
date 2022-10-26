"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queries = exports.DB_CONNECTION_STRING = exports.General = exports.ErrorCodes = void 0;
class ErrorCodes {
}
exports.ErrorCodes = ErrorCodes;
// static noData(noData: any, noDataFound: any): import("./entities").systemError {
//     throw new Error("Method not implemented.");
// }
ErrorCodes.noData = 102;
ErrorCodes.ConnectionError = 100;
ErrorCodes.queryError = 101;
class General {
}
exports.General = General;
// static noDataFound(noData: (noData: any, noDataFound: any) => import("./entities").systemError, noDataFound: any): import("./entities").systemError {
//     throw new Error("Method not implemented.");
// }
General.DbconnectionError = "DB server connection error";
General.SqlQueryError = "Incorrect query";
General.noDataFound = "No data found";
exports.DB_CONNECTION_STRING = "server=.;Database=Dimland_store;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
var adress;
var square;
var working_hors;
var name;
class Queries {
}
exports.Queries = Queries;
Queries.allStores = "SELECT * FROM coffe_shops";
Queries.store_found_id = "SELECT id_coffe_shops, name FROM coffe_shops where id_coffe_shops = ";
Queries.add_new_store = "exec sp_coffe_shops ";
