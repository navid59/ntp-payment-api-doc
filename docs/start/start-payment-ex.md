---
sidebar_position: 2
---

# Start payment request example
```
{
  "config": {
    "emailTemplate": "confirm",
    "notifyUrl": "http://yourdomain.com/example/ipn.php",
    "redirectUrl": "http://yourdomain.com/example/backUrl.php",
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
    "posSignature": "LXTP-3WDM-WVXL-GC8B-Y5DA",
    "dateTime": "2019-08-24T14:15:22Z",
    "description": "Order Desc",
    "orderID": "stringOrderIDdddfgdfg3323",
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
}
```