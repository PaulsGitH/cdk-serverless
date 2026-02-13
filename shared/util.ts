import { marshall } from "@aws-sdk/util-dynamodb";
import { Movie, MovieCast } from "./types";

type Entity = Movie | MovieCast;

export const generateItem = (entity: Entity) => ({
  PutRequest: { Item: marshall(entity) },
});

export const generateBatch = (data: Entity[]) =>
  data.map((e) => generateItem(e));

