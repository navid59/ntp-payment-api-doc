---
sidebar_position: 2
---

# Query parameters

The **start end-point** has three main section.
**config**, **payment** and **order**.

In following explain each of them: 

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

  
