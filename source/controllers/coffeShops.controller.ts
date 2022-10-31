import { Request, Response, NextFunction } from 'express';
import { resolveProjectReferencePath } from 'typescript';
import { ErrorCodes, General, NON_EXISTENT_ID } from '../constants';
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

const deleteCoffeShopId = async (req: Request, res: Response, next: NextFunction) => {

    const numericParamOrError: number | systemError = RequestHelper.ParseNumericInput(req.params.id);
    if (typeof numericParamOrError === "number") {
        if (numericParamOrError > 0) {
            coffeShopsService.deleteCoffeShopId(numericParamOrError)
                .then(() => {
                    return res.sendStatus(200);
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





const updateCoffeShopId = async (req: Request, res: Response, next: NextFunction) => {
    const numericParamOrError: number | systemError = RequestHelper.ParseNumericInput(req.params.id);
    console.log("Я тут!");
    if (typeof numericParamOrError === "number") {
        if (numericParamOrError > 0) {


            const body: coffeShop = req.body;
            console.log("Я тут!2");
            coffeShopsService.updateCoffeShopId({
                id: numericParamOrError,
                address: body.address,
                square: body.square,
                work: body.work,
                name: body.name
                      })
                      .then((result: coffeShop) => {
                        return res.status(200).json(result);
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

    const addCoffeShop = async (req: Request, res: Response, next: NextFunction) => {
        const body: coffeShop = req.body;

        coffeShopsService.addCoffeShop({
            id: NON_EXISTENT_ID,
            address: body.address,
            square: body.square,
            work: body.work,
            name: body.name
        })
            .then((result: coffeShop) => {
                console.log('Я тут1!');
                return res.status(200).json(result);
            })
            .catch((error: systemError) => {
                console.log('Я тут2!');
                return ResponseHelper.handleError(res, error);
            });
        console.log('Я тут3!');
    }


export default { getCoffeShops, getCoffeShopById, updateCoffeShopId, addCoffeShop, deleteCoffeShopId};