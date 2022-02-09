---
sidebar_position: 1
---

# Starting a payment
To initiate a new payment, you will begin from the **start** end-point.
With the help of this  end-point you will send full details of a single transaction to NETOPIA Payments' server.

Based on the **start** end-point **response** you will need to continue the transaction process up to state **completed**/**confirmed** .

## Start payment endpoint

### Live/production mode
```
https://to.be.filled
```

### Sandbox/test mode
```
https://secure.sandbox.netopia-payments.com/payment/card/start
```

## Start payment request structure  

```
{
  "config": {
    "emailTemplate": "string",
    "notifyUrl": "string",
    "redirectUrl": "string",
    "language": "string"
  },
  "payment": {
    "options": {
      "installments": int,
      "bonus": int
    },
    "instrument": {
      "type": "string",
      "account": "string",
      "expMonth": int,
      "expYear": int,
      "secretCode": "string",
      "token": "string"
    },
    "data": {
      "BROWSER_USER_AGENT": "string",
      "OS": "string",
      "OS_VERSION": "string",
      "MOBILE": "string",
      "SCREEN_POINT": "string",
      "SCREEN_PRINT": "string",
      "BROWSER_COLOR_DEPTH": "string",
      "BROWSER_SCREEN_HEIGHT": "string",
      "BROWSER_SCREEN_WIDTH": "string",
      "BROWSER_PLUGINS": "string",
      "BROWSER_JAVA_ENABLED": "string",
      "BROWSER_LANGUAGE": "string",
      "BROWSER_TZ": "string",
      "BROWSER_TZ_OFFSET": "string",
      "IP_ADDRESS": "string"
    }
  },
  "order": {
    "ntpID": "string",
    "posSignature": "string",
    "dateTime": "string",
    "description": "string",
    "orderID": "string",
    "amount": float,
    "currency": "string",
    "billing": {
      "email": "string",
      "phone": "string",
      "firstName": "string",
      "lastName": "string",
      "city": "string",
      "country": int,
      "state": "string",
      "postalCode": "string",
      "details": "string"
    },
    "shipping": {
      "email": "string",
      "phone": "string",
      "firstName": "string",
      "lastName": "string",
      "city": "string",
      "country": int,
      "state": "string",
      "postalCode": "string",
      "details": "string"
    },
    "products": [
      {
        "name": "string",
        "code": "string",
        "category": "string",
        "price": int,
        "vat": int
      }
    ],
    "installments": {
      "selected": 0,
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

## Query parameters

The **start end-point** has three main sections.
**config**, **payment** and **order**.

<details><summary>Query parameters (overview) </summary>

-   **config** : General configuration
    -   **emailTemplate** : The template name of email notification
    -   **notifyUrl** : The Merchant Notify URL
    -   **redirectUrl** : The call back URL
    -   **language** : The Languge

-   **payment** : Data related to the payment itself
    -   **options** : 
      - **installments** :
      - **bonus** : 
      - **instrument**: instrument of payment
        -   **type** : Method of payment ex. Card
        -   **account** : Card number
        -   **expMonth** : Card expire month
        -   **expYear** : Card expire year
        -   **secretCode** : Card CCV2 number
        -   **token** : The Payment token
      - **data** : General information on the device used to make the payment
        -   **BROWSER_USER_AGENT** : 
        -   **OS** : 
        -   **OS_VERSION** : 
        -   **MOBILE** : 
        -   **SCREEN_POINT** : 
        -   **SCREEN_PRINT** : 
        -   **BROWSER_COLOR_DEPTH** : 
        -   **BROWSER_SCREEN_HEIGHT** : 
        -   **BROWSER_SCREEN_WIDTH** : 
        -   **BROWSER_PLUGINS** : 
        -   **BROWSER_JAVA_ENABLED** : 
        -   **BROWSER_LANGUAGE** : 
        -   **BROWSER_TZ** : 
        -   **BROWSER_TZ_OFFSET** : 
        -   **IP_ADDRESS** :
    

-   **order**: Order details
    -   **ntpID**: The NTP ID
    -   **posSignature**: Signature ID
    -   **dateTime**: Order date-time
    -   **description**: Order description
    -   **orderID**: Order unique ID
    -   **amount**: The total payment amount
    -   **currency**: The currency code
    -   **billing**: The shipping data 
        -   **email**: goods bill reciver email address
        -   **phone**: goods bill reciver phone number
        -   **firstName**: goods bill reciver name 
        -   **lastName**: goods bill reciver last name
        -   **city**: The shipping city
        -   **country**: The country code
        -   **state**: The state of country
        -   **postalCode**: Zip code
        -   **details**: Extera data / comment for shipping
    -   **shipping**: The shipping data 
        -   **email**: goods reciver email address
        -   **phone**: goods reciver phone number
        -   **firstName**: goods reciver name 
        -   **lastName**: goods reciver last name
        -   **city**: The shipping city
        -   **country**: The country code
        -   **state**: The state of country
        -   **postalCode**: Zip code
        -   **details**: Extera data / comment for shipping
    -   **products**: An array of products in cart
        -   **name**: The product name
        -   **code**: The product unique code
        -   **category**: The product category name
        -   **price**: The product price
        -   **vat**: The product VAT
    -   **installments** : 
        -   **selected** : 
        -   **available** : 
    -   **data**: A set of extera data if you need
        -   **property1**: Extera data to send
        -   **property2**: Extera data to send
            .
            .
            .
        -   **property** N: Extera data to send
        
</details>


Below you may find details on each of them: 

-   **config** : The general configuration

    | Variable   | Type   | Description | Required | Belong to |
    | :---       | :----: | :----      |      :----: |     ---: |
    | **emailTemplate** | string | The template name of email notification | Yes | Operator |
    | **notifyUrl**     | string | The Merchant Notify URL                 | Yes | Merchant |
    | **redirectUrl**   | string | The call back URL                       | Yes | Merchant |
    | **language**      | string | The Languge                             | Yes | Merchant |



-   **payment** : 
    -   **options** :

        | Variable          | Type    | Description | Required | Belong to |
        | :---              | :----:  | :----       | :----: | ---: |
        | **installments**  | integer  | --- | Yes | Operator |
        | **bonus**         | integer  | --- | No | Operator |
      
      - **instrument**: instrument of payment

        | Variable       | Type    | Description | Required | Belong to |
        | :---           | :----:  | :----       | :----: | ---: |
        | **type**       | string  | Method of payment ex. Card | Yes | Client |
        | **account**    | string  | Card number                | Yes | Client |
        | **expMonth**   | integer | Card expire month          | Yes | Client |
        | **expYear**    | integer | Card expire year           | Yes | Client |
        | **secretCode** | string  | Card CCV2 number           | Yes | Client |
        | **token**      | string  | The Payment token          | No | Operator |

      - **data** : The general information of the device used for make online payment
      
        | Variable                  | Type    | Description | Required | Belong to |
        | :---                      | :----:  | :----       | :----:  |   ---: |
        | **BROWSER_USER_AGENT**    | string  | ---         | No | Client |
        | **OS**                    | string  | ---         | No | Client |
        | **OS_VERSION**            | string  | ---         | No | Client |
        | **MOBILE**                | string  | ---         | No | Client |
        | **SCREEN_POINT**          | string  | ---         | No | Client |
        | **SCREEN_PRINT**          | string  | ---         | No | Client |
        | **BROWSER_COLOR_DEPTH**   | string  | ---         | No | Client |
        | **BROWSER_SCREEN_HEIGHT** | string  | ---         | No | Client |
        | **BROWSER_SCREEN_WIDTH**  | string  | ---         | No | Client |
        | **BROWSER_PLUGINS**       | string  | ---         | No | Client |
        | **BROWSER_JAVA_ENABLED**  | string  | ---         | No | Client |
        | **BROWSER_LANGUAGE**      | string  | ---         | No | Client |
        | **BROWSER_TZ**            | string  | ---         | No | Client |
        | **BROWSER_TZ_OFFSET**     | string  | ---         | No | Client |
        | **IP_ADDRESS**            | string  | ---         | No | Client |

-   **order**: Order details

      | Variable          | Type    | Description | Required | Belong to |
      | :---              | :----:  | :----       | :----:  |   ---: |
      | **ntpID**         | string  | The ntpID in an unique code per transaction generated by NETOPIA Payments. Set it as **Empty string** for start request| No | Operator |
      | **posSignature**  | string  | Signature ID             | Yes | Merchant |
      | **dateTime**      | string  | Order date-time          | Yes | Merchant |
      | **description**   | string  | Order description        | Yes | Merchant |
      | **orderID**       | string  | Order unique ID          | Yes | Merchant |
      | **amount**        | float   | The total payment amount | Yes | Merchant |
      | **currency**      | string  | The currency code        | Yes | Merchant |

    -   **billing**: The shipping data 

        | Variable       | Type    | Description | Required | Belong to |
        | :---           | :----:  | :----       | :----:  |   ---: |
        | **email**      | string  | goods bill reciver email address  | Yes | Client |
        | **phone**      | string  | goods bill reciver phone number   | Yes | Client |
        | **firstName**  | string  | goods bill reciver name           | Yes | Client |
        | **lastName**   | string  | goods bill reciver last name      | Yes | Client |
        | **city**       | string  | The shipping city                 | Yes | Client |
        | **country**    | integer | The country code                  | Yes | Client |
        | **state**      | string  | The state of country              | Yes | Client |
        | **postalCode** | string  | Zip code                          | Yes | Client |
        | **details**    | string  | Extera data / comment for billing | Yes | Client |
        
    -   **shipping**: The shipping data 
        
        | Variable                 | Type    | Description | Required | Belong to |
        | :---                     | :----:  | :----       | :----: |   ---: |
        | **email**      | string  | goods reciver email address        | Yes | Client |
        | **phone**      | string  | goods reciver phone number         | Yes | Client |
        | **firstName**  | string  | goods reciver name                 | Yes | Client |
        | **lastName**   | string  | goods reciver last name            | Yes | Client |
        | **city**       | string  | The shipping city                  | Yes | Client |
        | **country**    | integer | The country code                   | Yes | Client |
        | **state**      | string  | The state of country               | Yes | Client |
        | **postalCode** | string  | Zip code                           | Yes | Client |
        | **details**    | string  | Extera data / comment for shipping | Yes | Client |
           
    
    -   **products**: An array of products in cart

        | Variable     | Type    | Description               | Required | Belong to |
        | :---         | :----:  | :----                     | :----: |   ---: |
        | **name**:    | string  | The product name          | No | Merchant |
        | **code**:    | string  | The product unique code   | No | Merchant |
        | **category** | string  | The product category name | No | Merchant |
        | **price**    | string  | The product price         | No | Merchant |
        | **vat**      | string  | The product VAT           | No | Merchant |
    
    
    -   **installments** : 

        | Variable      | Type   | Description | Required | Belong to |
        | :---          | :----: | :----       | :----:  | ---: |
        | **selected**  | string | ---         | Yes | Operator |
        | **available** | string | ---         | Yes | Operator |

    -   **data**: A set of extera data if you need

        | Variable      | Type    | Description                  | Required | Belong to |
        | :---          | :----:  | :----                        | :----: |   ---: |
        | **property1** | string  | Extera data to send          | No | Merchant |
        | **property2** | string  | Extera data to send          | No | Merchant |

