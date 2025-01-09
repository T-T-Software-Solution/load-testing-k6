// Creator: Grafana k6 Browser Recorder 1.0.6

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {}

export default function main() {
  let response

  group('page_2 - https://test.k6.io/login.php', function () {
    response = http.post(
      'https://test.k6.io/login.php',
      {
        redir: '1',
        csrftoken: 'MzA1Nzc5Mzc5',
        login: 'admin',
        password: '123',
      },
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          origin: 'https://test.k6.io',
          referer: 'https://test.k6.io/my_messages.php',
          'upgrade-insecure-requests': '1',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
  })

  group('page_3 - https://test.k6.io/login.php', function () {
    response = http.post(
      'https://test.k6.io/login.php',
      {
        redir: '1',
        csrftoken: 'OTY5NDY2MDY0',
      },
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          origin: 'https://test.k6.io',
          referer: 'https://test.k6.io/my_messages.php',
          'upgrade-insecure-requests': '1',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
  })

  // Automatically added sleep
  sleep(1)
}
