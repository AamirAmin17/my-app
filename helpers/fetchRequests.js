export const getFetch = async (url) => {
  const response = await fetch(url);
  console.log("response is", response.statusText);
  // if (response.statusText !== "OK") {
  //   return { error: true };
  // }
  const data = await response.json();
  return data;
};
