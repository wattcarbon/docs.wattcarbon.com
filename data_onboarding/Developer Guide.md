# Uploading Devices and Data end to end example

This example will walk you through logging in, creating a device, and uploading savings values. In order to register devices to the WattCarbon platform, you must first go through the process of registering as a WattCarbon project developer. Contact us at <support@wattcarbon.com> if you are interested in registering projects.

## Prerequisites

You will need credentials to access the WattCarbon API. We'll call these `EMAIL_ADDRESS` and `API_KEY` in this example.

This example is implemented using Python's [HTTPX library](https://www.python-httpx.org/) but any HTTP client will work.

## 1. Get an access token

Start out by converting your long-lived API token into a temporary access token. The access token is used for authenticating requests to the rest of the API and lasts only 24 hours. This process must be repeated to get a new token whenever the old one expires.

```python
# Create a client object
import httpx
client = httpx.Client(base_url="https://api.wattcarbon.com")
client.headers["User-Agent"] = "a unique name for your app"

# Make the authentication request to the API
token_response = client.post(
    "/auth/token",
    data={
        "grant_type": "password",
        "username": EMAIL_ADDRESS,
        "password": API_KEY,
    }
)
token_response.raise_for_status()

# Extract the token from the response
token_payload = token_response.json()
token = token_payload["access_token"]

# Add the token to the client's default headers
# to authenticate future requests
client.headers["Authorization"] = "Bearer " + token
```

See the documentation for [POST /auth/token](https://docs.wattcarbon.com/docs/wattcarbon/8b3f8e57ec2e9-create-token) for more information.

## 2. Create a device.

A device contains the information necessary to validate that EACs can be generated.

### Solar Example

```python
create_device_response = client.post(
    "/devices",
    json={
      "name": "My device",
      "customId": "SP123",
      "location": "60 Greene St Riverside IA",
      "utility": "ABC Utility",
      "deviceOwner": {"name": "Person Person"},
      "meterId": "M123",
      "commencedOperationDate": "2022-08-01", 

    
      "kind": "solar",
      "nameplateCapacityKw": "123",
      "inverterDataId": "1234",
      "inverterDataSource": "enphase",
      "externalRegistryName": "GATS",
      "externalRegistryDeviceId": "45678"
    }
)
create_device_response.raise_for_status()
```

### Electrification Example

```python
create_device_response = client.post(
    "/devices",
    json={
      "name": "My device",
      "customId": "HP123",
      "location": "60 Greene St Riverside IA",
      "utility": "ABC Utility",
      "deviceOwner": {"name": "Person Person"},
      "meterId": "M123",
      "commencedOperationDate": "2022-08-01", 

    
      "kind": "electrification",
      "areaSqft": "123",
      "previousFuel": "natural_gas",
      "replacesFurnace": true,
      "replacesWaterHeater": false,
      "coldClimate": false,
      "effectiveUsefulLifeYears": 10,
      "buildingType": "single_family_attached",
      "heatingBackupSystem": "electric_resistance",
      "heatPumpHspf": 5,
      "waterHeaterUef": 3
    }
)
create_device_response.raise_for_status()
```

<!-- theme: info -->

> The `location` field can also take an object with individual fields for Street/City/State etc. or even the Latitude and Longitude of the site.

<!-- theme: info -->

> If you have a unique ID for the site that you use for your own tracking, you can pass it in the `customId` field. The API will enforce that the same custom ID is never used on multiple sites in your account. See [Custom IDs](CustomIds.md) for more information.

See [POST /devices](https://docs.wattcarbon.com/docs/wattcarbon/4339aebb3db1a-create-device) for more information about all the potential values. If you need to change the device's parameters later on, you can use the [PUT /devices/{id}](https://docs.wattcarbon.com/docs/wattcarbon/ed3d2ae52c643-update-device) endpoint.

## 3. Upload device data

Device data is defined as the electrical energy generated (like with Solar), electrical energy supplied (like with a battery), electrical energy saved (like with Demand Response), or useful heat generated (like with electrification). We currently require device savings data to be hourly frequency.  The data should be positive (+) to represent either direct generation or a reduction in consumption, and negative (-) to represent additional consumption.

The data must be in the correct format; here's a quick example:

```csv
datetime,value_kwh
2022-08-01T00:00:00+00:00,0.1
2022-08-01T01:00:00+00:00,1.1
2022-08-01T02:00:00+00:00,2.3
2022-08-01T03:00:00+00:00,1.4
2022-08-01T04:00:00+00:00,1.6
```

See [POST /devices/{device_id}/timeseries](https://docs.wattcarbon.com/docs/wattcarbon/dd24db62819b9-upload-device-timeseries) for more information about the file format and how to upload savings data.

For now, that is all you need to do to add a device and provide device data. We will include additional steps in the future to further automate our registration process, but for now please email <support@wattcarbon.com> when you have completed this process.
