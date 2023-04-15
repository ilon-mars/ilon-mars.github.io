import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { LOGIN, PINNABLE_TYPES, PINNED_ITEMS, LANGUAGES_COUNT, ORDER_BY } from '@/utils/constants';
import { getMe } from '@/utils/graphQueries';

export const useState = () => {
  const { query, variables } = getMe(
    LOGIN,
    PINNABLE_TYPES,
    PINNED_ITEMS,
    LANGUAGES_COUNT,
    ORDER_BY
  );

  const { result, loading, error } = useQuery(
    gql`
      ${query}
    `,
    variables
  );

  return { result: result.value, loading, error };
};
