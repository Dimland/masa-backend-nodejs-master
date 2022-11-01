export class ErrorCodes {
    // static noData(noData: any, noDataFound: any): import("./entities").systemError {
    //     throw new Error("Method not implemented.");
    // }

    public static ConnectionError: number = 100;
    public static queryError: number = 101;
    public static noData: number = 102;
    public static NonNumericInput: number = 103;
    public static InputParameterNotSupplied: number = 104;
    public static DeletionConflict: number = 105;
}

export class General {
    // static noDataFound(noData: (noData: any, noDataFound: any) => import("./entities").systemError, noDataFound: any): import("./entities").systemError {
    //     throw new Error("Method not implemented.");
    // }
    public static DbconnectionError: string = "DB server connection error";
    public static SqlQueryError: string = "Incorrect query";
    public static noDataFound: string = "No data found";
    public static NonNumericInput: string = "Non numeric input supplied";
    public static InputParameterNotSupplied: string = "Input parameter not supplied";
    public static DeletionConflict: string = "Delete failed due to conflict";

}

export class SqlParameters {
    public static Id: string = 'id';
}



export const DB_CONNECTION_STRING: string = "server=.;Database=Dimland_store;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
export const NON_EXISTENT_ID: number = -1;
export const TEMP_USER_ID: number = 1;

var address: string;
var square: number;
var working_hors: string;
var name: string;

export class Queries {
  

    public static allCoffeShops: string =  "SELECT * FROM coffe_shops WHERE status_id = ?";
    public static coffeShopsId: string = `SELECT * FROM coffe_shops where id_coffe_shops = ?  AND status_id = ?`;
    public static updCoffeShop: string = `UPDATE coffe_shops SET address = ?, square = ?, working_hours = ?, name = ? WHERE id_coffe_shops = ?`;
    public static AddCoffeShop: string = "INSERT INTO coffe_shops (address, square, working_hours, name) VALUES (?, ?,?,?)";
    public static SelectIdentity: string = "SELECT SCOPE_IDENTITY() AS id";
    public static DeleteCoffeShop: string = "UPDATE coffe_shops SET update_date = ?, update_user_id = ?, status_id = ? WHERE id_coffe_shops = ? AND status_id = ?";

    static WhiteBoardTypeById: string;
}