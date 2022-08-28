import { findCamaraDTO } from './dto/findCamaraDTO';
export declare class CamarasService {
    findOne(body: findCamaraDTO): {
        sedeId: string;
        aforo: number;
        slots: number;
        camaraId: any;
    };
    getRandom(min: any, max: any): number;
}
