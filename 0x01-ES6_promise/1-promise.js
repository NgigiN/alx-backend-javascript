function getResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('This fake API is not working currently'));
    }
  });
}

export default getResponseFromAPI;
