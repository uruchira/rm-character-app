export const getErrorMessage = (err) => {
  if (err.response) {
    const { data } = err.response;
    return data ? data.error : err.message;
  }
  return err.message;
};
