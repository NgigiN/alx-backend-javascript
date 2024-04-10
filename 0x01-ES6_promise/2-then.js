function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    promise
      .then((response) => {
        console.log('Got a response from the API');
        resolve({ status: 200, body: 'Success' });
      })
      .catch((error) => {
        console.error('Error from the API:', error);
        reject(new Error());
      });
  });
}

export default handleResponseFromAPI;
