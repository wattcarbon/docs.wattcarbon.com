---
title: BlocPower - Measurement and Verification Plan
nav: BlocPower
last_updated: 2025-02-07
---
## Executive Summary

This document outlines the measurement and verification (M\&V) methodology and data intake requirements for the electrification projects managed by BlocPower. The plan encompasses baseline establishment, metering infrastructure, data collection protocols, and savings calculation methodologies. 

## Evidence of Asset

BlocPower will provide evidence that will demonstrate the installation of the measure. They will also need to include the heat pump serial number on Asset upload.

## Methodology Selection

We will use the [**{{ site.links.m_and_v.electrification.name }}**]({{ site.links.m_and_v.electrification.url }}) methodology.

We expect to use "From NREL ResStock SqFt-Based Load Selection (Baseline: 1.1.3.2 and Reporting: 1.1.3.2).

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
| Physical Serial Number | Serial number of the installed heat pump | \- | Y | Verification |
| Heating Backup System | Description of any secondary or backup heating system installed | \- | \- | Modeling |
| Furnace Replacement? | Indicates if an electric furnace was installed to replace existing heating system | \- | Y | Modeling |
| Water Heater Replacement? | Indicates if an electric water heater was installed to replace existing unit | \- | Y | Modeling |
| Oven Replacement? | Indicates if an electric oven was installed to replace existing appliance | \- | Y | Modeling |
| Dryer Replacement? | Indicates if an electric clothes dryer was installed to replace existing appliance | \- | Y | Modeling |
| Pool Heater Replacement? | Indicates if an electric pool heater was installed to replace existing system | \- | Y | Modeling |
| Additional EE Work Done During Install? | Identifies any energy efficiency improvements made during electrification (None, Basic, Enhanced) | None | \- | Modeling |
| Effective Useful Life (Years) | Expected operational lifespan of installed electrification equipment | 15 | \- | EAC Attribution |
| Rated for Cold Climates? | Indicates if the installed equipment is rated for operation in cold climate conditions | No | \- | EAC Attribution |
