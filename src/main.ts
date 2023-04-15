import { createApp, h, provide } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable';
import App from '@/App.vue';
import { apolloClient } from '@/apollo';

import '@/assets/styles/main.sass';

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

app.mount('#app');
