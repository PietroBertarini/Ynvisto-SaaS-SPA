export function negativeOrUndefinedToZero(num ?: number) : number {
  if (num === undefined || num <= 0) {
    return 0;
  }
  return num;
}

export function undefinedToZero(num: number | undefined) : number {
  return num || 0;
}
/**
 * If the value has the same sign of valueToCompare and the value is not 0, return true.
 */
export function isSameSignAndNotZero(value : number, valueToCompare) : boolean {
  const isPositiveReferenceValue = valueToCompare > 0;
  return ((isPositiveReferenceValue && value > 0) || (!isPositiveReferenceValue && value < 0));
}
