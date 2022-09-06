import { Technology } from "../entities/Technology";

interface ITechnologyRepository {
 save(technology: Technology): Promise<Technology>;
 findAll(): Promise<Object>;
}

export { ITechnologyRepository }