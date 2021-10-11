export const groupBy = (items: Array<any>, key: string): Array<any> =>
  items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [
        ...(result[item[key]] || []),
        item,
      ],
    }),
    {},
  );
