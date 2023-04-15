import type { OrderBy, PinnableItemType } from '@/types';

export const getMe = (
  login: string,
  types: PinnableItemType,
  pinnedFirst: number,
  languagesFirst: number,
  orderBy: OrderBy
) => {
  const query = `
  query MeQuery(
    $login: String!,
    $types: [PinnableItemType!],
    $pinnedFirst: Int,
    $languagesFirst: Int,
    $orderBy: LanguageOrder
    ) {
      user(login: $login) {
        name
        bio
        avatarUrl
        url
        email
        pinnedItems(types: $types, first: $pinnedFirst) {
          nodes {
            ... on Repository {
              id
              name
              description
              updatedAt
              url
              openGraphImageUrl
              languages(first: $languagesFirst, orderBy: $orderBy) {
                nodes {
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
  `;

  const variables = { login, types, pinnedFirst, languagesFirst, orderBy };

  return { query, variables };
};
