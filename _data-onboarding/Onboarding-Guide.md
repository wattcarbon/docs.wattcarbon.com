# WattCarbon API — Integration Overview

> Interactive API documentation: **https://api.wattcarbon.com/**

This document outlines the data interfaces involved in a WattCarbon integration for solar, battery, and energy efficiency projects. It is intended to help you identify which teams and data sources will be involved.

---

## What We Need From You

### Project Data

For each project site, we need basic identifying information and a few fields specific to the project type.

**All project types** require a site address or coordinates, and an operation/install date.

- **Solar** — nameplate capacity (kW), grid connection date, and optionally inverter platform details (Enphase, SolarEdge, SMA, Solis) or external REC registry IDs
  - [API reference](https://api.wattcarbon.com/#tag/Assets)

- **Battery / Storage** — battery capacity (kWh), output power rating (kW), operation date, and optionally round-trip efficiency
  - [API reference](https://api.wattcarbon.com/#tag/Assets)

- **Energy Efficiency (metered)** — building type, intervention type (HVAC, envelope, lighting, plug loads, etc.), project install start and completion dates, building square footage, year built, and heating fuel type
  - [API reference](https://api.wattcarbon.com/#tag/Assets)

Projects can be created individually via the API or in bulk via CSV upload. CSV templates are available per project type from the API.

### Energy Meter Data

Each project needs timeseries energy data (interval or billing) to generate EACs. This data can be provided in two ways:

1. **Automated data provider** — connect an existing utility or inverter data platform. We support integrations with Arcadia, Utility API, Bayou, Enphase, EKM Metering, Texture, Synop, Derapi, Branch Energy, Haystack, and others.
   - [API reference](https://api.wattcarbon.com/#tag/Data-Providers)

2. **Manual upload** — upload interval or billing data directly to a meter via the API.
   - [API reference](https://api.wattcarbon.com/#tag/Meters)

---

## What You Get Back

### Measurements

Once meter data and project details are in place, WattCarbon automatically computes hourly energy savings/generation, associated carbon emissions, and estimated cost impacts.

- [API reference](https://api.wattcarbon.com/#tag/Measurements)

### Energy Attribute Certificates (EACs)

Certificates are minted automatically from measurements. Each EAC is tied to a specific hour and project, with a unique serial ID, emissions intensity, and avoided emissions quantity. EACs can be queried, exported, or retired via the API.

- [API reference](https://api.wattcarbon.com/#tag/Certificates)

### Project Status & Metadata

Asset records include computed status (healthy, needs action, error), carbon and grid scores, methodology details with links, and full version history.

- [API reference](https://api.wattcarbon.com/#tag/Assets)

---

## Reference

| Endpoint                                                                    | Description                                                  |
| --------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [`GET /assets/kinds`](https://api.wattcarbon.com/#tag/Assets)               | Lists all supported project types with their required fields |
| [`GET /assets/csv/template/{kind}`](https://api.wattcarbon.com/#tag/Assets) | Download a CSV template for bulk project creation            |

Full API documentation with schemas, examples, and field definitions: **https://api.wattcarbon.com/**

For questions or API access, contact **support@wattcarbon.com**.
