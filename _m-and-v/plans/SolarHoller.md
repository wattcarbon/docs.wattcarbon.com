---
title: SolarHoller - Measurement and Verification Plan
nav: SolarHoller
last_updated: 2025-02-07
---
## Executive Summary

This document outlines the measurement and verification (M\&V) methodology and data intake requirements for the PV projects managed by SolarHoller. The plan encompasses baseline establishment, metering infrastructure, data collection protocols, and savings calculation methodologies. 

## Evidence of Asset

Solar Holler will provide evidence that will demonstrate the installation of the measure. They will also need to include the solar panel inverter serial number on Asset upload.

## Methodology Selection

We will use the [**{{ site.links.m_and_v.shared.name }}**]({{ site.links.m_and_v.shared.url }}) methodology.

We expect to use "Section 3(a): Calculating Hourly Emissions - When Hourly Consumption is Available."

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

| Field                                       | Description                                                                 | Default if not provided | Required?                          | Use                          |
|---------------------------------------------|-----------------------------------------------------------------------------|-------------------------|------------------------------------|-----------------------------|
| Nameplate Capacity (kW)                     | The maximum rated power output of the system as specified by the manufacturer, measured in kilowatts (kW). | -                       | Y                                  | Auditing                    |
| Commenced Operation Date/Grid Connection Date | The date when the system was officially connected to the grid.             | -                       | Y                                  | Additionality?               |
| Physical Meter Serial Number                | The unique identifier assigned to the physical electricity meter used for energy measurement. | -                       | -                                  | Provenance                   |
| Inverter Data Source                        | The name of the inverter which is used for determining how to access production data. | -                       | -                                  | Provenance                   |
| Inverter Data ID                            | A unique identifier for the purposes of acquiring production data from the inverter. | -                       | -                                  | Provenance                   |
| Estimated Annual Production (MWh)           | The projected amount of electricity the system is expected to generate annually, measured in megawatt-hours (MWh). | -                       | -                                  | Forecasting                  |
| EIA Plant ID                                | A unique identification number assigned to the energy plant by the U.S. Energy Information Administration (EIA) for tracking and reporting purposes. | -                       | If Nameplate Capacity (kW) > 1000 | -                            |
| External Registry Name                      | Previous REC registry that this device was registered at.                   | -                       | -                                  | Double-Counting Protection   |
| External Registry Device ID                 | Unique identifier in previous REC register this device was registered at.   | -                       | -                                  | Double-Counting Protection   |

### Timeseries Data

The timeseries data should be provided with the following columns:

| Field | Description | Required |
| :---- | :---- | :---- |
| start\_datetime | The datetime representing the start of the hourly meter read | Y |
| energy\_kwh | The energy consumption that took place during the hour associated with this meter read | Y |

## Data Management/Auditing Agreements

### Timeseries Data

SolarHoller is collecting data through their supplier inverter account's which give them access to individual customer's meter data. They will either provide the data directly to WattCarbon or provide access to the data through their supplier's API.

### Audit Checks

The following audit checks will be performed:

- Night-time consumption: Alert and exclude any consumption that takes place between the hours of 9PM - 5 AM that is greater than 100 Wh in a given hour.
- Consumption beyond nameplate capacity: Alert and exclude any consumption that is more than 1% greater than the nameplate capacity of the system.
- Consumption before commenced operation: Alert and exclude any consumption that takes place before the system's commenced operation date.
