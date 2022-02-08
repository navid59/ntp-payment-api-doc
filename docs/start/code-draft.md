---
sidebar_position: 6
---
# Code draft - TMP

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Some method test 1
:::tip Start action
<Tabs groupId="operating-systems">
  <TabItem value="curl" label="Curl Request">

  ```
  curl --location --request POST 'https://secure.sandbox.netopia-payments.com/payment/card/start' \
--header 'Authorization: Uxf3OY--rDK3Qae8CiJJUlAcuRJFp7tzGY4M8KocQaCGyfEqUGhGskv0' \
--data-raw '{
  "config": {
    "emailTemplate": "confirm",
    "notifyUrl": "http://35.204.43.65/demoV2/example/ipn.php",
    "redirectUrl": "http://35.204.43.65/demoV2/example/backUrl.php",
    "language": "ro"
  },
  "payment": {
    "options": {
      "installments": 1,
      "bonus": 0
    },
    "instrument": {
      "type": "card",
      "account": "9900004810225098",
      "expMonth": 1,
      "expYear": 2023,
      "secretCode": "111",
      "token": ""
    },
    "data": {
      "BROWSER_USER_AGENT": "AMozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36",
      "OS": "Linux",
      "OS_VERSION": "x86_64",
      "MOBILE": "false",
      "SCREEN_POINT": "false",
      "SCREEN_PRINT": "Current Resolution: 1920x1080, Available Resolution: 1853x1053, Color Depth: 24, Device XDPI: undefined, Device YDPI: undefined",
      "BROWSER_COLOR_DEPTH": "24",
      "BROWSER_SCREEN_HEIGHT": "1080",
      "BROWSER_SCREEN_WIDTH": "1920",
      "BROWSER_PLUGINS": "PDF Viewer, Chrome PDF Viewer, Chromium PDF Viewer, Microsoft Edge PDF Viewer, WebKit built-in PDF",
      "BROWSER_JAVA_ENABLED": "false",
      "BROWSER_LANGUAGE": "en-US",
      "BROWSER_TZ": "Europe/Bucharest",
      "BROWSER_TZ_OFFSET": "-120",
      "IP_ADDRESS": "37.221.166.134"
    }
  },
  "order": {
    "ntpID": "",
    "posSignature": "RAND-OM01-SIGN-TURE-3POS",
    "dateTime": "2019-08-24T14:15:22Z",
    "description": "Order Desc",
    "orderID": "stringOrderID4694",
    "amount": 200,
    "currency": "RON",
    "billing": {
      "email": "user@example.com",
      "phone": "string",
      "firstName": "string",
      "lastName": "string",
      "city": "string",
      "country": 0,
      "state": "string",
      "postalCode": "string",
      "details": "string"
    },
    "shipping": {
      "email": "user@example.com",
      "phone": "string",
      "firstName": "string",
      "lastName": "string",
      "city": "string",
      "country": 0,
      "state": "string",
      "postalCode": "string",
      "details": "string"
    },
    "products": [
      {
        "name": "string",
        "code": "string",
        "category": "string",
        "price": 0,
        "vat": 0
      }
    ],
    "installments": {
      "selected": 1,
      "available": [
        0
      ]
    },
    "data": {
      "property1": "string",
      "property2": "string"
    }
  }
}'
  ```

  </TabItem>
  <TabItem value="php" label="Php Request">

  ```
  <?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://secure.sandbox.netopia-payments.com/payment/card/start',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
  "config": {
    "emailTemplate": "confirm",
    "notifyUrl": "http://35.204.43.65/demoV2/example/ipn.php",
    "redirectUrl": "http://35.204.43.65/demoV2/example/backUrl.php",
    "language": "ro"
  },
  "payment": {
    "options": {
      "installments": 1,
      "bonus": 0
    },
    "instrument": {
      "type": "card",
      "account": "9900004810225098",
      "expMonth": 1,
      "expYear": 2023,
      "secretCode": "111",
      "token": ""
    },
    "data": {
      "BROWSER_USER_AGENT": "AMozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36",
      "OS": "Linux",
      "OS_VERSION": "x86_64",
      "MOBILE": "false",
      "SCREEN_POINT": "false",
      "SCREEN_PRINT": "Current Resolution: 1920x1080, Available Resolution: 1853x1053, Color Depth: 24, Device XDPI: undefined, Device YDPI: undefined",
      "BROWSER_COLOR_DEPTH": "24",
      "BROWSER_SCREEN_HEIGHT": "1080",
      "BROWSER_SCREEN_WIDTH": "1920",
      "BROWSER_PLUGINS": "PDF Viewer, Chrome PDF Viewer, Chromium PDF Viewer, Microsoft Edge PDF Viewer, WebKit built-in PDF",
      "BROWSER_JAVA_ENABLED": "false",
      "BROWSER_LANGUAGE": "en-US",
      "BROWSER_TZ": "Europe/Bucharest",
      "BROWSER_TZ_OFFSET": "-120",
      "IP_ADDRESS": "37.221.166.134"
    }
  },
  "order": {
    "ntpID": "",
    "posSignature": "RAND-OM01-SIGN-TURE-3POS",
    "dateTime": "2019-08-24T14:15:22Z",
    "description": "Order Desc",
    "orderID": "stringOrderID4694",
    "amount": 200,
    "currency": "RON",
    "billing": {
      "email": "user@example.com",
      "phone": "string",
      "firstName": "string",
      "lastName": "string",
      "city": "string",
      "country": 0,
      "state": "string",
      "postalCode": "string",
      "details": "string"
    },
    "shipping": {
      "email": "user@example.com",
      "phone": "string",
      "firstName": "string",
      "lastName": "string",
      "city": "string",
      "country": 0,
      "state": "string",
      "postalCode": "string",
      "details": "string"
    },
    "products": [
      {
        "name": "string",
        "code": "string",
        "category": "string",
        "price": 0,
        "vat": 0
      }
    ],
    "installments": {
      "selected": 1,
      "available": [
        0
      ]
    },
    "data": {
      "property1": "string",
      "property2": "string"
    }
  }
}',
  CURLOPT_HTTPHEADER => array(
    'Authorization: Uxf3OY--rDK3Qae8CiJJUlAcuRJFp7tzGY4M8KocQaCGyfEqUGhGskv0'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
  ```
  </TabItem>
</Tabs>
:::

---

## Some method test 2
:::caution Group 2
<Tabs groupId="operating-systems">
  <TabItem value="curl" label="CurlRequest">
  ```
  ZZZZZZZZZZ
  ```
  </TabItem>
  <TabItem value="php" label="PhpRequest">
  ```
  bbb
  ```
  </TabItem>
</Tabs>
:::

---

## Some method test 3
:::info Group 3
<Tabs groupId="operating-systems">
  <TabItem value="curl" label="CurlRequest">
  ```
  kkkkkkkkkkk
  ```
  </TabItem>
  <TabItem value="php" label="PhpRequest">
  ```
  bbb
  ```
  </TabItem>
</Tabs>
:::

---

| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |
| Paragraph BB| Text AAA    | And more AA   |
| Paragraph   | Text        | And more      |


---

| Syntax | Description | Full Description |
| --- | ----------- | ---------------------------------------------------|
| Header | Title | Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem |
| Paragraph | Text |

----
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

---
| Syntax      | Description | M |
| :---        |    :----:   | ---: |
| Header 1    | Title   1   | &check; |
| Header 2    | Title   2   | &cross; |
