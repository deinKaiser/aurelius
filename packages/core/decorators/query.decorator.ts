export const QUERY_KEY = Symbol("QUERY_METADATA_KEY");

export function Query();
export function Query(fieldName: string);
export function Query(fieldNames: string[]);
export function Query(field?: string | string[]) {
  return (
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number
  ) => {
    let existingParameters: ([string[] | string, number] | number)[] =
      Reflect.getOwnMetadata(QUERY_KEY, target, propertyKey) || [];
    existingParameters.push(field ? [field, parameterIndex] : parameterIndex);
    Reflect.defineMetadata(QUERY_KEY, existingParameters, target, propertyKey);
  };
}
