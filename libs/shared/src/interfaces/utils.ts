import { Repository } from 'typeorm';

export type RepositoryFunction<Entity> = () => Promise<Repository<Entity>>;
