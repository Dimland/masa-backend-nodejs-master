import { Request, Response, NextFunction } from 'express';
import { resolveProjectReferencePath } from 'typescript';
import { ErrorCodes, General } from '../constants';
import { systemError, coffeShop } from '../entities';
import { ErrorHelper } from '../helpers/error.helpers';
import { RequestHelper } from '../helpers/request.helper';
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
    const numericParamOrError: number | systemError = RequestHelper.ParseNumericInput(req.params.id);

    if (typeof numericParamOrError === "number") {
        if (numericParamOrError > 0) {
            coffeShopsService.getCoffeShopById(numericParamOrError)
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

    }
    else {
        // TODO: Error handling
        return ResponseHelper.handleError(res, numericParamOrError);
    }
};

const updateCoffeShopId = async (req: Request, res: Response, next: NextFunction) => {

    const numericParamOrError: number | systemError = RequestHelper.ParseNumericInput(req.params.id);
    if (typeof numericParamOrError === "number") {
        if (numericParamOrError > 0) {
            coffeShopsService.getCoffeShopById(numericParamOrError)
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
        }
        else {
            return ResponseHelper.handleError(res, numericParamOrError);
        }
    };







export default { getCoffeShops, getCoffeShopById, updateCoffeShopId};