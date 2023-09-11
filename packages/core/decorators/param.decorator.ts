
export const PARAM_KEY = Symbol('PARAM_METADATA_KEY');

export function Param(fieldName: string) {
  return (target: Object, propertyKey: string | symbol, parameterIndex: number) => {
    let existingParameters: [string,number][] = Reflect.getOwnMetadata(PARAM_KEY, target, propertyKey) || [];
    existingParameters.push([fieldName, parameterIndex]);
    Reflect.defineMetadata(PARAM_KEY, existingParameters, target, propertyKey);
  };
}
