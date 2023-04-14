export const getMe = (login: string) => {
  const query = `
    query MeQuery($login: String!) {
      user(login: $login) {
        name
        bio
      }
    }
  `;

  const variables = { login };

  return { query, variables };
};
