const getTheApi = async (city) => {
  const response = await fetch(
    `https://api.collectapi.com/pray/all?data.city=${city}`,
    {
      headers: {
        "Content-Type": "application/json",
        authorization: "apikey 4F9WEWXDn49Ve8m1yQRWZd:3FZ41fFuQQFMoy9RRGeACA",
      },
    }
  );

  const data = await response.json();
  console.log(data.result);
  console.log(response.ok);

  const result = { result: data.result, status: response.ok };

  return result;

  // .then((response) => {
  //   console.log(response.ok);

  //   return response.json();
  // })
  // .then((data) => data.result);
};

export default getTheApi;
