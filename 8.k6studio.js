// Generated by k6 Studio (0.10.0) on 2025-01-08T16:15:19.571Z

import { group, sleep, check } from "k6";
import http from "k6/http";

export const options = {
  stages: [
    { target: 20, duration: "1m" },
    { target: 20, duration: "3m30s" },
    { target: 0, duration: "1m" },
  ],
};

export default function () {
  let params;
  let resp;
  let match;
  let regex;
  let url;
  const correlation_vars = {};

  group("Default group", function () {
    params = {
      headers: {
        Connection: `keep-alive`,
        "sec-ch-ua": `"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"`,
        "sec-ch-ua-mobile": `?0`,
        "sec-ch-ua-platform": `"macOS"`,
        "Upgrade-Insecure-Requests": `1`,
        Accept: `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7`,
        "Sec-Fetch-Site": `none`,
        "Sec-Fetch-Mode": `navigate`,
        "Sec-Fetch-User": `?1`,
        "Sec-Fetch-Dest": `document`,
        "Accept-Encoding": `gzip, deflate, br, zstd`,
        "Accept-Language": `en-US,en;q=0.9`,
      },
      cookies: {},
    };

    url = http.url`https://test.k6.io/`;
    resp = http.request("GET", url, null, params);

    check(resp, {
      "status matches 200": (r) => r.status === 200,
    });

    params = {
      headers: {
        Connection: `keep-alive`,
        "sec-ch-ua": `"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"`,
        "sec-ch-ua-mobile": `?0`,
        "sec-ch-ua-platform": `"macOS"`,
        "Upgrade-Insecure-Requests": `1`,
        Accept: `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7`,
        "Sec-Fetch-Site": `same-origin`,
        "Sec-Fetch-Mode": `navigate`,
        "Sec-Fetch-User": `?1`,
        "Sec-Fetch-Dest": `document`,
        Referer: `https://test.k6.io/`,
        "Accept-Encoding": `gzip, deflate, br, zstd`,
        "Accept-Language": `en-US,en;q=0.9`,
      },
      cookies: {},
    };

    url = http.url`https://test.k6.io/my_messages.php`;
    resp = http.request("GET", url, null, params);

    check(resp, {
      "status matches 200": (r) => r.status === 200,
    });

    params = {
      headers: {
        Connection: `keep-alive`,
        "Cache-Control": `max-age=0`,
        "sec-ch-ua": `"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"`,
        "sec-ch-ua-mobile": `?0`,
        "sec-ch-ua-platform": `"macOS"`,
        Origin: `https://test.k6.io`,
        "Content-Type": `application/x-www-form-urlencoded`,
        "Upgrade-Insecure-Requests": `1`,
        Accept: `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7`,
        "Sec-Fetch-Site": `same-origin`,
        "Sec-Fetch-Mode": `navigate`,
        "Sec-Fetch-User": `?1`,
        "Sec-Fetch-Dest": `document`,
        Referer: `https://test.k6.io/my_messages.php`,
        "Accept-Encoding": `gzip, deflate, br, zstd`,
        "Accept-Language": `en-US,en;q=0.9`,
      },
      cookies: {},
    };

    url = http.url`https://test.k6.io/login.php`;
    resp = http.request(
      "POST",
      url,
      JSON.parse(
        `{"redir":"1","csrftoken":"NDA2MDA0Njg3","login":"admin","password":"123"}`,
      ),
      params,
    );

    check(resp, {
      "status matches 200": (r) => r.status === 200,
    });
  });
  sleep(1);
}
