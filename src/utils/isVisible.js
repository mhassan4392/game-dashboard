const isVisible = (ref) => {
  const rect = ref.current.getBoundingClientRect();

  const visible =
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth);

  return visible;
};

export default isVisible;
