function handleResponseFromAPI(promise) {
  return promise
    .then(result => {
      console.log('Got a response from the API');
      return { status: 200, body: 'Success' };
    })
    .catch(error => {
      console.log('Got a response from the API');
      return new Error('This fake API is not working currently');
    });
}

export default handleResponseFromAPI;
