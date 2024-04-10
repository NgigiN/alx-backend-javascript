function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('This fake API is not working currently'));
    }
    console.log('Got a response from the API');
  });
}
export default handleResponseFromAPI;
