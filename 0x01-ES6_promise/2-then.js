function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve({ status: 200, body: 'Success' });
      console.log('Got a response from the API');
    } else {
      reject(new Error('This fake API is not working currently'));
      console.log('Got a response from the API');
    }
  });
}
export default handleResponseFromAPI;
