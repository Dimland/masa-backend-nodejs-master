export class ErrorCodes {
    // static noData(noData: any, noDataFound: any): import("./entities").systemError {
    //     throw new Error("Method not implemented.");
    // }
    public static noData: number = 102;
    public static ConnectionError: number = 100;
    public static queryError: number = 101;
}

export class General {
    // static noDataFound(noData: (noData: any, noDataFound: any) => import("./entities").systemError, noDataFound: any): import("./entities").systemError {
    //     throw new Error("Method not implemented.");
    // }
    public static DbconnectionError: string = "DB server connection error";
    public static SqlQueryError: string = "Incorrect query";
    public static noDataFound: string = "No data found";
}

export const DB_CONNECTION_STRING: string = "server=.;Database=Dimland_store;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
 

var adress: string;
var square: number;
var working_hors: string;
var name: string;

export class Queries {
  

    public static allStores: string =  "SELECT * FROM coffe_shops";
    public static store_found_id: string = "SELECT * FROM coffe_shops where id_coffe_shops = ";
    public static addStore: string = "exec sp_coffe_shops ";
    static WhiteBoardTypeById: string;
}