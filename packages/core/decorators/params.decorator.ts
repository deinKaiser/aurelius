
export const PARAMS_KEY = Symbol('PARAMS_METADATA_KEY');

export function Params() {
  return (target: Object, propertyKey: string | symbol, parameterIndex: number) => {
    let existingParameters: number[] = Reflect.getOwnMetadata(PARAMS_KEY, target, propertyKey) || [];
    existingParameters.push(parameterIndex);
    Reflect.defineMetadata(PARAMS_KEY, existingParameters, target, propertyKey);
  };
}
