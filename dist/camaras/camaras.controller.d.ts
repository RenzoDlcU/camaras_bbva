import { CamarasService } from './camaras.service';
import { findCamaraDTO } from './dto/findCamaraDTO';
export declare class CamarasController {
    private readonly camarasService;
    constructor(camarasService: CamarasService);
    findOne(body: findCamaraDTO): {
        sedeId: string;
        aforo: number;
        slots: number;
        camaraId: any;
    };
}
