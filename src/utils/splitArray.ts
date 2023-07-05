export const splitArray = <T>(
  originalArray = [] as T[],
  col: number
): T[][] => {
  const arrayLength = originalArray.length;
  const chunkSize = Math.ceil(arrayLength / col);
  const resultArrays = Array.from(
    { length: col },
    (_, index) =>
      [].slice(index * chunkSize, (index + 1) * chunkSize)
  );
  return resultArrays;
};
