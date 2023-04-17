import type { OrderBy, PinnableItemType, OrderDirection, OrderField, PrivacyType } from '@/types';

export const stack: string[] = ['javascript', 'vue', 'typescript', 'html', 'sass', 'pug'];

export const GRAPHQL_ENDPOINT = 'https://api.github.com/graphql';
export const LOGIN = 'ilon-mars';

export const LANGUAGES_COUNT = 10;
export const ORDER_FIELD: OrderField = 'SIZE';
export const ORDER_DIRECTION: OrderDirection = 'DESC';
export const ORDER_BY: OrderBy = {
  field: ORDER_FIELD,
  direction: ORDER_DIRECTION,
};

// github limit
export const PINNED_ITEMS = 6;

// for pinned items
export const PINNABLE_TYPES: PinnableItemType = 'REPOSITORY';

// for projects in stack
export const PROJECTS_COUNT = 8;

export const IS_FORK = false;
export const PRIVACY: PrivacyType = 'PUBLIC';
