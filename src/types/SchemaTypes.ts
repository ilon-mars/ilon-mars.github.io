export type PinnableItemType = 'REPOSITORY';
export type OrderField = 'SIZE';
export type OrderDirection = 'ASC' | 'DESC';
export type OrderBy = {
  field: OrderField;
  direction: OrderDirection;
};
