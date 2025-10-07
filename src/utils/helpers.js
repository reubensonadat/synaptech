// Utility functions if needed
export const formatPrice = (min, max) => {
  if (min === max) {
    return `GH₵ ${min}`;
  }
  if (max >= 99999) {
    return `GH₵ ${min}+`;
  }
  return `GH₵ ${min} - ${max}`;
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};