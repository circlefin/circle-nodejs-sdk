import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://api.circle.com/v1/w3s/developer/transactions/transfer',
  headers: {
    'X-Request-Id': 'fdc61002-d13b-4747-9590-2920b64538f2',
    Authorization: 'Bearer TEST_API_KEY:a4c20122aeb5c8600299da79c3ba1a95:0bccb52ac8d8fc127abcaa067c1b61be',
    'Content-Type': 'application/json'
  },
  data: {
    walletAddress: '0x3a8863a96688fcbebb40fe5449723f32fc1d348d',
    blockchain: {'oneOf-0': 'MATIC-AMOY','oneOf-1': 'MATIC-AMOY'},
    entitySecretCiphertext: 'of0jMvH6ABOKHrztBTyWxFWAK1p7KHNj+CSxQxiP/Rpap3a6waWrtrC97uzh8fyvYGL6Ua1/6c1Bf4SJI3qhd4OVQUWm53v/3MuXeCbIITA8OZ4RhLANK131J0QnaUHjhyHax0P1f5rQiGIszOQ+R0gatUVrJZVI6OcFIgOH2MtJntr/G2WMXyhANyK9Xlzc4VSxBXd1O99K7z+YJhV4zSGDiisJhmKw0Fw2tXGX8rDCrfKn4xyq03Ofy/zUAwx9UfvijJH4WylFi7PMGqy9u+GT0r/cAQCUxRnN5lXkiGPJfTkKwpGtg1NTGMWB2mnHGxdj/C00gCsYrj4nIJ2UPs7x62HDAZXRJkgpVkzOLotiYiJhOThDdbyydkChtI7y6GfylsqIHpz43hPXznvaibruKpvgRKKpgHM22Pwz1GhGRNDSA7XsZRhDVJSBIIZgyyIq+Oh9cfXZoUlP18mKmoA1wZkOC76TU7YidJKt45ZHtW8zniQKLi7TDzwAfWkjqQ/NYFcQjQwEJUJ2LvlL+VZbuvVYFoXXdIlaySjw696YT6uoDi+lnXZqXtWKykELXQh6a1krmAjTsgAPCkeavnSceFYHO6PyA2FIRRbeF8IBU+SKKlzQLfvoPOeTRWckJmh3FMvwhcZvEJq8EjqoZ61vi+fbzRyLdIt1+ybUrXs=',
    destinationAddress: '0x307a3c1ffdca0119aef41f6e8e6ec3838dd8725a',
    amounts: ['.001', '.001'],
    idempotencyKey: 'cd3a5712-b1b6-4333-b703-afbbec32d124'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });