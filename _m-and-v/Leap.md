---
title: LEAP - Measurement and Verification Plan
nav: LEAP
last_updated: 2025-02-07
---
## Executive Summary

This document outlines the measurement and verification (M\&V) methodology and data intake requirements for the Demand Reponse events managed by LEAP. The plan encompasses baseline establishment, metering infrastructure, data collection protocols, and savings calculation methodologies.

## Evidence of Asset

LEAP provides direct access to the same data that is reported to CISO.

## Methodology Selection

We will use the [**{{ site.links.m_and_v.demand_response_ciso.name }}**]({{ site.links.m_and_v.demand_response_ciso.url }}) methodology.

We expect to use Section 5.4.

## Data Requirements

### Incorporated Data Requirements

The following are defined in the [**{{ site.links.m_and_v.shared.name }}**]({{ site.links.m_and_v.shared.url }}) methodology:

- Definitions  
- Electricity Carbon Intensity Calculations  
- Shared Data Intake Requirements
- Consequential Carbon Accounting Rules 
- EAC Definition and Rules
- Generated Versus Avoided Emissions

### User-Provided Data Requirements

The following is a static description of the required and optional fields for a given Asset. An updated CSV template with the correct column names [is available here](https://api.wattcarbon.com/devices/csv/template/solar) and timeseries description [is available here](https://api.wattcarbon.com/#tag/Devices/operation/upload_device_timeseries_devices__device_id__timeseries_post).

### Attributional Data

The following data is required in addition to what is listed in [**{{ site.links.m_and_v.shared.name }}**]({{ site.links.m_and_v.shared.url }}) methodology.

#### Intervention

| Field                           | Description | Default if not provided | Required? | Use |
|---------------------------------|-------------|-------------------------|----------|-----|
| Meter Id                        | Unique identifier assigned to the meter. | - | - | - |
| Service Point Number            | Identifier for the service point associated with the meter. | - | - | - |
| Load Serving Entity             | The entity responsible for providing electricity to the meter. | - | - | - |
| Load Zone                       | The designated electricity load zone in which the meter is located. | - | - | - |
| Bill Customer Agreement Number  | Customer agreement number associated with the billing account. | - | - | - |
| Bill Service Account Number     | The account number used for billing purposes. | - | - | - |

### Timeseries Data

The timeseries data should be provided with the following columns:

| Field | Description | Required |
| :---- | :---- | :---- |
| start\_datetime | The datetime representing the start of the hourly meter read | Y |
| savings\_kwh | The energy consumption that took place during the hour associated with this meter read | Y |

## Data Management/Auditing Agreements

### Timeseries Data

LEAP is providing outputs of savings calculations submitted to CISO. WattCarbon pulls this data through the [LEAP API](https://developer.leap.energy).
