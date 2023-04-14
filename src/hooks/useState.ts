import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { LOGIN } from '@/utils/constants';
import { getMe } from '@/utils/graphQueries';

export const useState = () => {
  const { query, variables } = getMe(LOGIN);

  const { result, loading, error } = useQuery(
    gql`
      ${query}
    `,
    variables
  );

  return { result: result.value, loading, error };
};
