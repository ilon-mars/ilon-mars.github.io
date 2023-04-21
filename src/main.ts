import { createApp, h, provide } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable';
import App from '@/App.vue';
import { apolloClient } from '@/apollo';
import { calcDynamicVH } from '@/plugins';

import '@/assets/styles/main.sass';

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
    calcDynamicVH();
  },

  render: () => h(App),
});

app.mount('#app');
