import { ref } from 'vue';

const isMobile = ref(false);

export const useDetectMobile = () => {
  const checkMobile = () => {
    isMobile.value = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  const onResize = () => {
    checkMobile();
  };

  window.addEventListener('resize', onResize);

  return { isMobile };
};
