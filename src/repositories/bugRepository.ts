import { Bug } from "../entities/Bug";

interface IBugRepository {
 save(bug: Bug): Promise<Bug>;
 findAll(): Promise<Object>;
}

export { IBugRepository }