import type { OrderBy, PinnableItemType, OrderDirection, OrderField } from '@/types';

export const stack: string[] = [
  'javascript',
  'vue',
  'typescript',
  'html',
  'sass',
  'pug',
  'nuxt',
  'graphql',
];

export const LOGIN = 'ilon-mars';

// github limit
export const PINNED_ITEMS = 6;

// for projects in stack
export const PROJECTS_COUNT = 8;

// for pinned items
export const PINNABLE_TYPES: PinnableItemType = 'REPOSITORY';
export const LANGUAGES_COUNT = 10;
export const ORDER_FIELD: OrderField = 'SIZE';
export const ORDER_DIRECTION: OrderDirection = 'DESC';
export const ORDER_BY: OrderBy = {
  field: ORDER_FIELD,
  direction: ORDER_DIRECTION,
};
