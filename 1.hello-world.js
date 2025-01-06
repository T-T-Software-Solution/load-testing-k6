// Import the http module to make HTTP requests. From this point, you can use `http` methods to make HTTP requests.
import http from 'k6/http';

// Import the sleep function to introduce delays. From this point, you can use the `sleep` function to introduce delays in your test script.
import { sleep } from 'k6';

export const options = {
  // A number specifying the number of VUs to run concurrently.
  vus: 10,

  // A string specifying the total duration of the test run.
  duration: '30s',

  // To perform 10 HTTP requests, 
  // define an options block to configure the test execution. 
  // In this case, set the number of iterations to 10 to instruct k6 to execute the default function 10 times
  iterations: 10,
};

export default function() {
  http.get('https://test.k6.io');
  sleep(1);
}
