import type { OrderBy, PinnableItemType, PrivacyType } from '@/types';

export const getMe = (
  login: string,
  types: PinnableItemType,
  pinnedFirst: number,
  languagesFirst: number,
  orderBy: OrderBy,
  reposLast: number,
  privacy: PrivacyType,
  isFork: boolean
) => {
  const query = `
  query MeQuery(
    $login: String!,
    $types: [PinnableItemType!],
    $pinnedFirst: Int,
    $languagesFirst: Int,
    $orderBy: LanguageOrder
    $reposLast: Int,
    $privacy: RepositoryPrivacy,
    $isFork: Boolean,
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

        repositories(last: $reposLast, privacy: $privacy, isFork: $isFork) {
          nodes {
            description
            name
            primaryLanguage {
              name
            }
            languages(first: $languagesFirst, orderBy: $orderBy) {
              nodes {
                name
              }
            }
            url
            updatedAt
            homepageUrl
            openGraphImageUrl
          }
        }
      }
    }
  `;

  const variables = {
    login,
    types,
    pinnedFirst,
    languagesFirst,
    orderBy,
    reposLast,
    privacy,
    isFork,
  };

  return { query, variables };
};
