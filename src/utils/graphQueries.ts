export const getMe = (login: string) => {
  const query = `
    query MeQuery($login: String!) {
      user(login: $login) {
        name
        bio
        avatarUrl
        url
        email
      }
    }
  `;

  const variables = { login };

  return { query, variables };
};
