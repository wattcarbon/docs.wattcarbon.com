---
title: Uploading Devices and Data end to end example
nav: Developer Guide
order: 2
---

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

See the documentation for [POST /auth/token](https://api.wattcarbon.com/#tag/Tokens/operation/create_token_auth_token_post) for more information.


## 2. [Create a Meter](https://api.wattcarbon.com/#tag/Meters/operation/Meters-create_meter)

Here is where you can create the objects that will hold the energy timeseries. For this endpoint, you must use `manual` as the `apiProvider`. `meterType` can either be `gas` or `electricity`.

The `location` is also required here, and this is where you can put a street address. There are a few different ways to format this field, here is an example:

```
"location": {
  "street": "606 Ellis St",
  "city": "San Francisco",
  "state": "CA",
  "country": "US",
  "postalCode": "94109"
}
```

> The `location` field can also take an object with individual fields for Street/City/State etc. or even the Latitude and Longitude of the site.

## 3. Upload Meter Timeseries

Once you have a meter you can upload a timeseries for the meter using [this endpoint](https://api.wattcarbon.com/#tag/Meters/operation/Meters-upload_meter_intervals). This is basically where you'd upload the CSV.

## 4. Create an Asset/Device

Once you have meters with timeseries in them, you will create an asset (aka "device" - the terms "asset" and "device" are currently used interchangeably) using [this endpoint](https://api.wattcarbon.com/#tag/Devices/operation/Devices-create_device). When looking at this endpoint, use the dropdown in the "kind" field and select the correct methodology - this will show the extra required fields for a certain type of asset.

Here are a few of the most commonly used entries for the `kind` field:

- `solar_direct`: Solar Panel Impact
- `storage_direct`: Direct battery impact
- `electrification_billing_metered`: For electrification projects that use meter data.
- `energy_efficiency_eemetered`: For energy efficiency projects that use meter data.
- `tracking_building`: For tracking the historical consumption of buildings and comparing that consumption to a reference building, as well as getting a baseline EEMeter model.

If you have any questions about which methodology to select for your assets, reach out to support@wattcarbon.com.

> The location is required again in this endpoint. This is a little redundant with the "meter" location, but the location in the device/asset is what is actually used to map to weather data, so its also important here.

> The "meterIds" field is where you'll want to provide the ids for any meter(s) you created earlier to attach to this asset.

> If you have a unique ID for the site that you use for your own tracking, you can pass it in the `customId` field. The API will enforce that the same custom ID is never used on multiple sites in your account.

### Solar Example

```python
create_device_response = client.post(
    "/devices",
    json={
      "name": "My asset",
      "customId": "SP123",
      "location": "60 Greene St Riverside IA",
      "utility": "ABC Utility",
      "deviceOwner": {"name": "Person Person"},
      "meterIds": [999],
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
