
export const BODY_KEY = Symbol('BODY_METADATA_KEY');

export function Body() {
  return (target: Object, propertyKey: string | symbol, parameterIndex: number) => {
    let existingParameters: number[] = Reflect.getOwnMetadata(BODY_KEY, target, propertyKey) || [];
    existingParameters.push(parameterIndex);
    Reflect.defineMetadata(BODY_KEY, existingParameters, target, propertyKey);
  };
}
