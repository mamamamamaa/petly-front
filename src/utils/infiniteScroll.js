export const scrollHandler = (
  event,
  uploadData,
  currentLength,
  totalCount,
  isLoading
) => {
  const windowHeight = window.innerHeight;
  const scrollHeight = event.currentTarget.scrollHeight;
  const scrollTop = event.currentTarget.scrollTop;

  if (
    scrollHeight - (scrollTop + windowHeight) < 100 &&
    currentLength < totalCount &&
    !isLoading
  ) {
    uploadData();
  }
};
