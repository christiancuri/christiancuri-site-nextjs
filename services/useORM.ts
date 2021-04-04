type useORM<T> = {
  values: T[];
  getAll(): T[];
  findOne(filter: Partial<T>): T | undefined;
  find(filter: Partial<T>): T[];
  deleteOne(filter: Partial<T>): T | undefined;
  paginate(
    skip: number,
    limit: number,
  ): { data: T[]; hasMore: boolean; total: number };
};

export const useORM = function <T>(values: T[]): useORM<T> {
  const filterCallback = (filter: Partial<T>, item: T): boolean => {
    let matchCount = 0;

    for (const field in filter) {
      if (item[field] === filter[field]) matchCount++;
    }

    return Object.keys(filter).length === matchCount;
  };

  const obj: useORM<T> = {
    values,
    getAll() {
      return obj.values;
    },
    findOne(filter) {
      const item = obj.values.find((item: T) => filterCallback(filter, item));
      return item;
    },
    find(filter) {
      const items = obj.values.filter((item: T) =>
        filterCallback(filter, item),
      );
      return items;
    },
    deleteOne(filter) {
      const item = obj.findOne(filter);

      if (!item) return undefined;

      obj.values = obj.values.filter(
        (item: T) => !filterCallback(filter, item),
      );

      return item;
    },
    paginate(skip, limit) {
      const items = obj.values.slice(skip, skip + limit);

      return {
        total: obj.values.length,
        data: items,
        hasMore: skip + limit < obj.values.length,
      };
    },
  };

  return obj;
};

export default useORM;
