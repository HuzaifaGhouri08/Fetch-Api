// Fake Json Data From Website
fetch(`https://jsonplaceholder.typicode.com/users`)
  .then((Response) => {
    // in json format
    return Response.json();
  })
  // print in console
  .then((Result) => {
    console.log(Result);
    console.log(
      ` Name : ${Result[5].name} --- Address : ${Result[5].address.street}`
    );
  })
  // Error
  .catch(() => {
    console.error(`SomeThing Went Wrong`);
  });
