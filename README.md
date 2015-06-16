# Device fingerprint integration for Mexico

### Client side:

- Add the [device-fingerprint.js](device-fingerprint.js) file to you checkout page
- Add a hidden field to your form to send the device fingerprint to your server
- Set you hidden field's value to the value returned by the `EBANX.deviceFingerprint()` function

### Server side:

- Send the device fingerprint that came with the form via the `payment.device_id` attribute of [EBANX's API](https://developers.ebanx.com/api-reference/direct-operation).

### Example code:

```html
<!DOCTYPE html>
<html>
<head>
	<title>Device fingerprint example</title>
	<script src="device-fingerprint.js"></script>
</head>
<body>
	<form>
		<input type="hidden" name="device_fingerprint" id="device_fingerprint">
		<!-- Your checkout fields -->
		<button>Submit</button>
	</form>
	<script>
		document.getElementById("device_fingerprint").value = EBANX.deviceFingerprint();
	</script>
</body>
</html>
```

```bash
curl -X POST 'https://sandbox.ebanx.com/ws/direct' \
    -d 'request_body={
          "integration_key": "fd29a3b39d8f7bffa31cecfe895236ba5b43683e225f9d4de78ac3bdca7dfb184abfed285cc99d5b13813672e586f9cf9eb8",
          "operation": "request",
          "payment": {
            "name": "Juan Garcia",
            "email": "juangarcia@example.com",
            "country": "mx",
            "payment_type_code": "visa",
            "merchant_payment_code": "1fa5c86f374",
            "currency_code": "MXN",
            "amount_total": "100",
            "creditcard": {
              "card_number": "4111111111111111",
              "card_name": "Juan Garcia",
              "card_due_date": "12/2021",
              "card_cvv": "123"
            },
            "device_id": "0cto0jqrnfdsoolitatph0g5reoen1du"
          }
        }'
```