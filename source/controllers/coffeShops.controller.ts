import { Request, Response, NextFunction } from 'express';
import { resolveProjectReferencePath } from 'typescript';
import { ErrorCodes, General } from '../constants';
import { systemError, coffeShop } from '../entities';
import { ErrorHelper } from '../helpers/error.helpers';
import { ResponseHelper } from '../helpers/response.helper';
import { CoffeShopsService } from '../services/coffeShops.services';

const coffeShopsService: CoffeShopsService = new CoffeShopsService();


const getCoffeShops = async (req: Request, res: Response, next: NextFunction) => {
    coffeShopsService.getCoffeShops()
        .then((result: coffeShop[]) => {
            return res.status(200).json({
                For_PostmanCoffe_Shops: result
            });
        })
        .catch((error: systemError) => {
            return ResponseHelper.handleError(res, error);
        });
};

const getCoffeShopById = async (req: Request, res: Response, next: NextFunction) => {
    let id: number = -1;
    const sId: string = req.params.id;

    if (isNaN(Number(req.params.id))) {
        // ToDO: Error handling

        const nonNumericError: systemError = ErrorHelper.parseError(ErrorCodes.NonNumericInput, General.NonNumericInput);
        return ResponseHelper.handleError(res, nonNumericError);
    }

    if (sId !== null && sId !== undefined) {
        id = parseInt(sId);
    }
    else {
        // TODO: Error handling
        const noInputParameterError: systemError = ErrorHelper.parseError(ErrorCodes.InputParameterNotSupplied, General.InputParameterNotSupplied);
        return ResponseHelper.handleError(res, noInputParameterError);
    }

    if (id > 0) {
        coffeShopsService.getCoffeShopById(id)
            .then((result: coffeShop) => {
                return res.status(200).json({
                    result
                });
            })
            .catch((error: systemError) => {
                return ResponseHelper.handleError(res, error);
            });
    }
    else {
        // TODO: Error handling
    }


};





export default { getCoffeShops, getCoffeShopById };