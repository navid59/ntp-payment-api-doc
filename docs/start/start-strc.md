---
sidebar_position: 1
---

# Getting start a payment
To getting start a new payment, the process will start from **start** end-point.
By getting help of strat end-point you send full details of any single transaction to NETOPIA Payments server.

So base on **start end-point response** you will need to countin the transaction progress up to be **completed**/**confirmed** .

## Start a payment URL
```
https://secure.sandbox.netopia-payments.com/payment/card/start
```

## Query parameters

The **start end-point** has three main section.
**config**, **payment** and **order**.

<details><summary>Query parameters (quick ​view) </summary>

#### Query parameters quick ​view

-   **config** : The general configuration
    -   **emailTemplate** : The template name of email notification
    -   **notifyUrl** : The Merchant Notify URL
    -   **redirectUrl** : The call back URL
    -   **language** : The Languge

-   **payment** : 
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
      - **data** : The general information of the device used for make online payment
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


In following explain each of them: 

-   **config** : The general configuration

    | Variable   | Type   | Description | M | Belong to |
    | :---       | :----: | :----      |      :----: |     ---: |
    | **emailTemplate** | string | The template name of email notification | &check; | Operator |
    | **notifyUrl**     | string | The Merchant Notify URL                 | &check; | Merchant |
    | **redirectUrl**   | string | The call back URL                       | &check; | Merchant |
    | **language**      | string | The Languge                             | &check; | Merchant |



-   **payment** : 
    -   **options** :

        | Variable          | Type    | Description | M | Belong to |
        | :---              | :----:  | :----       | :----: | ---: |
        | **installments**  | integer  | --- | &check; | Operator |
        | **bonus**         | integer  | --- | &cross; | Operator |
      
      - **instrument**: instrument of payment

        | Variable       | Type    | Description | M | Belong to |
        | :---           | :----:  | :----       | :----: | ---: |
        | **type**       | string  | Method of payment ex. Card | &check; | Client |
        | **account**    | string  | Card number                | &check; | Client |
        | **expMonth**   | integer | Card expire month          | &check; | Client |
        | **expYear**    | integer | Card expire year           | &check; | Client |
        | **secretCode** | string  | Card CCV2 number           | &check; | Client |
        | **token**      | string  | The Payment token          | &cross; | Operator |

      - **data** : The general information of the device used for make online payment
      
        | Variable                  | Type    | Description | M | Belong to |
        | :---                      | :----:  | :----       | :----:  |   ---: |
        | **BROWSER_USER_AGENT**    | string  | ---         | &cross; | Client |
        | **OS**                    | string  | ---         | &cross; | Client |
        | **OS_VERSION**            | string  | ---         | &cross; | Client |
        | **MOBILE**                | string  | ---         | &cross; | Client |
        | **SCREEN_POINT**          | string  | ---         | &cross; | Client |
        | **SCREEN_PRINT**          | string  | ---         | &cross; | Client |
        | **BROWSER_COLOR_DEPTH**   | string  | ---         | &cross; | Client |
        | **BROWSER_SCREEN_HEIGHT** | string  | ---         | &cross; | Client |
        | **BROWSER_SCREEN_WIDTH**  | string  | ---         | &cross; | Client |
        | **BROWSER_PLUGINS**       | string  | ---         | &cross; | Client |
        | **BROWSER_JAVA_ENABLED**  | string  | ---         | &cross; | Client |
        | **BROWSER_LANGUAGE**      | string  | ---         | &cross; | Client |
        | **BROWSER_TZ**            | string  | ---         | &cross; | Client |
        | **BROWSER_TZ_OFFSET**     | string  | ---         | &cross; | Client |
        | **IP_ADDRESS**            | string  | ---         | &cross; | Client |

-   **order**: Order details

      | Variable          | Type    | Description | M | Belong to |
      | :---              | :----:  | :----       | :----:  |   ---: |
      | **ntpID**         | string  | The NTP ID               | &cross; | Operator |
      | **posSignature**  | string  | Signature ID             | &check; | Merchant |
      | **dateTime**      | string  | Order date-time          | &check; | Merchant |
      | **description**   | string  | Order description        | &check; | Merchant |
      | **orderID**       | string  | Order unique ID          | &check; | Merchant |
      | **amount**        | float   | The total payment amount | &check; | Merchant |
      | **currency**      | string  | The currency code        | &check; | Merchant |

    -   **billing**: The shipping data 

        | Variable       | Type    | Description | M | Belong to |
        | :---           | :----:  | :----       | :----:  |   ---: |
        | **email**      | string  | goods bill reciver email address  | &check; | Client |
        | **phone**      | string  | goods bill reciver phone number   | &check; | Client |
        | **firstName**  | string  | goods bill reciver name           | &check; | Client |
        | **lastName**   | string  | goods bill reciver last name      | &check; | Client |
        | **city**       | string  | The shipping city                 | &check; | Client |
        | **country**    | integer | The country code                  | &check; | Client |
        | **state**      | string  | The state of country              | &check; | Client |
        | **postalCode** | string  | Zip code                          | &check; | Client |
        | **details**    | string  | Extera data / comment for billing | &check; | Client |
        
    -   **shipping**: The shipping data 
        
        | Variable                 | Type    | Description | M | Belong to |
        | :---                     | :----:  | :----       | :----: |   ---: |
        | **email**      | string  | goods reciver email address        | &check; | Client |
        | **phone**      | string  | goods reciver phone number         | &check; | Client |
        | **firstName**  | string  | goods reciver name                 | &check; | Client |
        | **lastName**   | string  | goods reciver last name            | &check; | Client |
        | **city**       | string  | The shipping city                  | &check; | Client |
        | **country**    | integer | The country code                   | &check; | Client |
        | **state**      | string  | The state of country               | &check; | Client |
        | **postalCode** | string  | Zip code                           | &check; | Client |
        | **details**    | string  | Extera data / comment for shipping | &check; | Client |
           
    
    -   **products**: An array of products in cart

        | Variable     | Type    | Description               | M | Belong to |
        | :---         | :----:  | :----                     | :----: |   ---: |
        | **name**:    | string  | The product name          | &cross; | Merchant |
        | **code**:    | string  | The product unique code   | &cross; | Merchant |
        | **category** | string  | The product category name | &cross; | Merchant |
        | **price**    | string  | The product price         | &cross; | Merchant |
        | **vat**      | string  | The product VAT           | &cross; | Merchant |
    
    
    -   **installments** : 

        | Variable      | Type   | Description | M | Belong to |
        | :---          | :----: | :----       | :----:  | ---: |
        | **selected**  | string | ---         | &check; | Operator |
        | **available** | string | ---         | &check; | Operator |

    -   **data**: A set of extera data if you need

        | Variable      | Type    | Description                  | M | Belong to |
        | :---          | :----:  | :----                        | :----: |   ---: |
        | **property1** | string  | Extera data to send          | &cross; | Merchant |
        | **property2** | string  | Extera data to send          | &cross; | Merchant |


## Start a payment request structure  

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