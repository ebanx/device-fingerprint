# Device fingerprint integration for Mexico

### Client side:

- Add the device-fingerprint.js file to you checkout page
- Add a hidden field to your form to send the device fingerprint to your server
- Set you hidden field value to the value returned by the javascript `EBANX.deviceFingerprint()`

### Server side:

- Send the device fingerprint that came with the form via the `payment.device_id` attribute of EBANX's API.

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
