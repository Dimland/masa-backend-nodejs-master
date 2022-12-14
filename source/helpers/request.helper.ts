import { ErrorHelper } from "./error.helpers";
import { ErrorCodes, NON_EXISTENT_ID } from "../constants";
import { General } from "../constants"
import { systemError } from "../entities";


export class RequestHelper {
    public static ParseNumericInput(input: string): number | systemError {
        let result: number = NON_EXISTENT_ID;

        if (isNaN(Number(input))) {
            return ErrorHelper.parseError(ErrorCodes.NonNumericInput, General.NonNumericInput);
        }

        if (input !== null && input !== undefined) {
            result = parseInt(input);
        }
        else {
            return ErrorHelper.parseError(ErrorCodes.InputParameterNotSupplied, General.InputParameterNotSupplied);
        }
        return (result);
    }
}