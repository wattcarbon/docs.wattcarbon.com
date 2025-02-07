---
title: QuitCarbon - Measurement and Verification Plan
nav: QuitCarbon
last_updated: 2025-02-07
---
## Executive Summary

This document outlines the measurement and verification (M\&V) methodology and data intake requirements for the electrification projects managed by QuitCarbon. The plan encompasses baseline establishment, metering infrastructure, data collection protocols, and savings calculation methodologies. 

## Evidence of Asset

BlocPower will provide evidence that will demonstrate the installation of the measure. They will also need to include the heat pump serial number on Asset upload.

## Methodology Selection

We will use the [**{{ site.links.m_and_v.electrification.name }}**]({{ site.links.m_and_v.electrification.url }}) methodology.

We expect to receive 12 pre-intervention bills representing approximately 12 months of data that will be provided upon Asset upload. We expect to use "From NREL Building Selection, if no reporting data is available (Baseline: 1.1.2.2 and Reporting: 1.2.3). 

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

The following is a static description of the required and optional fields for a given Asset. An updated CSV template with the correct column names [is available here](https://api.wattcarbon.com/devices/csv/template/electrification_nrel_resstock_deemed) and timeseries description [is available here](https://api.wattcarbon.com/#tag/Devices/operation/upload_device_timeseries_devices__device_id__timeseries_post).

### Attributional Data

The following data is required in addition to what is listed in [**{{ site.links.m_and_v.shared.name }}**]({{ site.links.m_and_v.shared.url }}) methodology.

#### General Building Characteristics

| Field | Description | Default if not provided | Required? | Use |
| :---- | :---- | :---- | :---- | :---- |
| Square Footage of Living Space | Total conditioned living area of the building in square feet | \- | Y | Modeling |
| Do walls have insulation? | Indicates presence of wall insulation in the building | Yes | \- | Modeling |
| Alternative Fuel to Electrification | Identifies the fuel type that would have been used if electrification was not implemented | Natural Gas | \- | Modeling |
| Building Type | Classification of building according to NREL ResStock categories | \- | Y | Modeling |
| Year Built | Year the building was originally constructed | \- | Y | Modeling |
| \# of Stories | Total number of above-ground floors in the building | \- | Y | Modeling |
| Likely Heating Thermostat Setpoint (°F) | Expected temperature setting for heating system operation | \- | \- | Modeling |

#### Intervention

| Field | Description | Default if not provided | Required? | Use |
| :---- | :---- | :---- | :---- | :---- |
| Commenced Operation Date | Date when the electrification system installation was completed and began operation | \- | Y | Modeling |
| Heating Backup System | Description of any secondary or backup heating system installed | \- | \- | Modeling |
| Furnace Replacement? | Indicates if an electric furnace was installed to replace existing heating system | \- | Y | Modeling |
| Water Heater Replacement? | Indicates if an electric water heater was installed to replace existing unit | \- | Y | Modeling |
| Oven Replacement? | Indicates if an electric oven was installed to replace existing appliance | \- | Y | Modeling |
| Dryer Replacement? | Indicates if an electric clothes dryer was installed to replace existing appliance | \- | Y | Modeling |
| Pool Heater Replacement? | Indicates if an electric pool heater was installed to replace existing system | \- | Y | Modeling |
| Additional EE Work Done During Install? | Identifies any energy efficiency improvements made during electrification (None, Basic, Enhanced) | None | \- | Modeling |
| Effective Useful Life (Years) | Expected operational lifespan of installed electrification equipment | 15 | \- | EAC Attribution |
| Rated for Cold Climates? | Indicates if the installed equipment is rated for operation in cold climate conditions | No | \- | EAC Attribution |

### Timeseries Data

The timeseries data should be provided with the following columns:

| Field | Description | Required |
| :---- | :---- | :---- |
| start\_date | The date representing the start of the bill cycle | Y |
| end\_date | The date representing the end of the bill cycle | Y |
| energy\_kwh | The energy consumption that took place during that bill cycle. | Y |

## Data Management/Auditing Agreements

### Timeseries Data

QuitCarbon is partnering with UtilityAPI, which will supply the electricity and gas bills used in this analysis. At around the time of the intervention, UtilityAPI will provide the most recent 12 months of hourly electricity and daily gas consumption data leading up to the intervention. These readings will be used to establish the baseline consumption of the building.

For example, if an intervention took place on **June 5, 2022**, and the following bills existed for that home, we would take the bills 2021-06-18 through 2022-05-18 to represent the baseline consumption, but we would *exclude* the bill 2022-06-10 as it is partially in both the pre \-and post-intervention periods.

| Bill \# | Baseline |
| :---- | :---- |
|  | ~~2021-04-16~~ |
|  | ~~2021-05-13~~ |
| **1** | **2021-06-18** |
| **2** | **2021-07-09** |
| **3** | **2021-08-10** |
| **4** | **2021-09-18** |
| **5** | **2021-10-15** |
| **6** | **2021-11-09** |
| **7** | **2021-12-12** |
| **8** | **2022-01-08** |
| **9** | **2022-02-14** |
| **10** | **2022-03-20** |
| **11** | **2022-04-22** |
| **12** | **2022-05-18** |
|  | ~~2022-06-10~~ |
