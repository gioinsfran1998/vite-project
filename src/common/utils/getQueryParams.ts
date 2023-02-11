// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getQueryParams = (request: any) => {
  const url = new URL(request.url);

  return Object.fromEntries(url.searchParams.entries());
};

export default getQueryParams;
