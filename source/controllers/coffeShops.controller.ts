import { Request, Response, NextFunction } from 'express';
import { ErrorCodes } from '../constants';
import { systemError, coffeShop } from '../entities';
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

            switch (error.code) {
                case ErrorCodes.ConnectionError:
                    return res.status(408).json({
                        errorMessage: error.message
                    });
                case ErrorCodes.queryError:
                    return res.status(406).json({
                        errorMessage: error.message
                    });
                default:
                    return res.status(400).json({
                        errorMessage: error.message
                    });
            }
        });
};

const getCoffeShopById = async (req: Request, res: Response, next: NextFunction) => {
    let id: number = -1;
    const sId: string = req.params.id;

    if (isNaN(Number(req.params.id))) {
        // ToDO: Error handling
    }

    if (sId !== null && sId !== undefined) {
        id = parseInt(sId);
    }
    else {
        // TODO: Error handling
    }

    if (id > 0) {
        coffeShopsService.getCoffeShopById(id)
            .then((result: coffeShop) => {
                return res.status(200).json({
                    result
                });
            })
            .catch((error: systemError) => {
                switch (error.code) {
                    case ErrorCodes.ConnectionError:
                        return res.status(408).json({
                            errorMessage: error.message
                        });
                    case ErrorCodes.queryError:
                        return res.status(406).json({
                            errorMessage: error.message
                        });
                    default:
                        return res.status(400).json({
                            errorMessage: error.message
                        });
                }
            });
    }
    else {
        // TODO: Error handling
    }


};





export default { getCoffeShops, getCoffeShopById };