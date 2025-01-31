---
title: Shared M&V Documentation
nav: Shared Guidelines
last_updated: 2025-01-27
---
## Section 1: Overview

### 1.1. Introduction.

1.1.1. This document describes the methods used by WattCarbon for estimating hourly carbon emissions from electricity consumption or production, where a power grid connects multiple end users and where production resources are shared amongst all interconnected assets. These methods yield hourly asset-level emissions outputs. Portfolio-level emissions outputs are measured by aggregating the emissions of a number of individual assets and calculating a portfolio net emissions value. The primary use case is carbon accounting (such as Scope 2 and Scope 3 emissions calculations under the framework established by the World Resources Institute). As such, key considerations are replicability and availability of data. The methods described in this document require only commonly-available asset-level consumption and grid-level production data.

This methodological specification is intended to provide transparency and auditability. There are a significant number of choices that are made when calculating emissions, the results of which can significantly change the results. By illuminating these choices, this document provides an opportunity to create standards for certain choices, and to allow flexibility for others, so long as each choice is documented.

1.1.2. These methods will be familiar to carbon accounting practitioners. They are derived from World Resources Institute’s GHG Protocol Scope 2 guidance, but are also informed by Energy Tag and the 24/7 Carbon Free Energy Compact. In addition to a long history of use in carbon accounting, these approaches draw on a methodological foundation developed in energy modeling and are commonly used for forecasting, measurement and verification, and evaluation of energy programs.

1.1.3. As a rule, these methods are written for a technical audience of practitioners, however, where useful, a pragmatic effort is made to provide interpretation and context for use cases.

1.1.4. This is a “living” document, in the sense that we continue to work with initiatives like the Carbon Data Specification Consortium where we have the opportunity to change or update existing guidance as additional evidence arises supporting new approaches or challenging current approaches. These methods are version controlled to allow users to pin their programs, policies, or analysis to a particular instantiation of the methods. The latest version will always reflect what we believe to be the most complete and well-tested approach.

1.1.5. To further assist with referenceability and versioning, this document provides a numbering scheme to facilitate referencing the methods. As the numbering scheme may change as the methods are tested and refined, it should be used in combination with a document version to prevent ambiguity.

1.1.6. These methods are designed to be general enough to implement using any general-purpose programming language and are not required to be deployed with any particular software implementation. To the extent that code samples do appear in this document, they are intended to be used as pseudo-code.

### 1.2. Participation in methods development.

1.2.1. WattCarbon participates in multiple technical working groups, but also encourages input from third parties to improve these methods.  Changes which are in-scope (see 1.3.2), and empirically tested will generally be met with interest and engagement. Efforts to propose changes which are out-of-scope (see 1.3.3), are discouraged.

### 1.3. Scope.

1.3.1. Some items have been considered to be generally in-scope for improvements to these methods.

1.3.1.1. Technical clarifications or improvements to existing methods.

1.3.1.2. Methods for calculating uncertainty or establishing criteria for use cases.

1.3.1.3. Empirical tests to evaluate methodological choices and assumptions.

1.3.2. Some items have, to date, been considered out-of-scope:

1.3.2.1. Analysis or evidence based in datasets which cannot be otherwise replicated

1.3.2.2. Non-energy emissions accounting

1.3.2.3. Programming language or implementation-specific constraints.

1.3.2.4. Proprietary, closed-source, or restrictively-licensed algorithms, procedures, or content.

### 1.4. Definitions.

1.4.1. Asset. An Asset is the term describing the energy intervention that results in EACs, such as a solar panel system, battery, demand response event, or building that underwent an energy efficiency upgrade. An asset exists at a point of metered interconnection between a production or consumption asset and a network of other assets that share a common and bounded electricity grid where all imports or exports of electricity to this grid are metered.

1.4.2. EAC. An EAC is an Energy Attribute Certificate, which represents a unique claim to the environmental benefits of a decarbonization project. EACs are granular certificates assigned to a watt-hour of energy or a gram of CO2 that specify all attributes of the underlying energy resource, including asset type, production time, precise location, local grid carbon emissions intensity, resource operation start date, and reporting requirements.

1.4.3. Grid. A market-defined geographical area in which a balancing authority manages aggregate supply and demand as well as imports and exports.

1.4.4. Generation Mix. The aggregation of all production that enters into a grid that is accounted for by a grid operator.

1.4.5. Energy Consumption. A value derived from a physical meter based on the amount of electricity delivered over particular intervals of time at a particular asset.

1.4.6. Distributed generation. Electricity that is produced at an asset including what is consumed by the asset. This electricity is not considered part of the generation mix and is not accounted for by the grid operator other than as lower aggregate demand.

1.4.7. Carbon Intensity. Measured as a CO2e weight per unit of electricity produced (e.g., lbs/mwh or grams/kwh). Calculated by multiplying the Emissions Factor for each fuel type in the Generation Mix by the total amount of each fuel in the Generation Mix and weighting the average by the percentage of each fuel type in the overall mix.

1.4.8. Emissions Factor. The Carbon Dioxide Equivalent (or CO2e) produced as a result of the combustion of a particular fuel source per unit of energy produced.

1.4.9. Renewable Energy Credit (REC). The environmental attributes represented by a unit of generation that is delivered to the Generation Mix.

1.4.10. Import/Export Mix. The amount of electricity that enters or leaves a Balancing Authority within a specific time period.

### 1.5. What is an EAC?

1.5.1. An EAC captures the externality value of energy or carbon savings. When a project or asset is deployed and results in energy or carbon savings, the benefit is shared collectively. The EAC is a way to assign responsibility for the collective good to an individual party. 

1.5.2. Wh-Electricity EAC. A Watt-hour of electricity **at a given hour** consumed or released (generated or discharged) by an Asset with an associated amount of generated and avoided carbon emissions comparing the generation and consumption of that electricity to if that Asset was not deployed 

1.5.3. g-CO2e EAC. A gram of CO2e **of a given hour** that was generated or avoided by an Asset based on the net of the generated and avoided emissions of that Asset compared to if that Asset was not deployed.

1.5.4. Consequential Carbon Accounting. Project level carbon savings (including leakage from generated emissions)

1.5.4.1. Can opt to try to account for impact on grid operations or assume no measurable impact

Shared Data Intake Requirements

Asset Owner Information

Asset Location Information


## Section 2: Data Management

### 2.1. Data Inputs.

The data requirements to apply these methods to a single asset are listed in this section. These represent the “ideal”. Additional constraints and sufficiency requirements follow in section (2.2) and considerations for handling missing or incomplete data follow.

2.1.1. Asset Owner Information.

2.1.1.1. Asset Owner Full Legal Name. Legal name of the individual or entity that owns the asset

2.1.1.2. Asset Owner E-mail Address. Primary contact email for the asset owner

2.1.1.3. Asset Owner Phone Number. Primary contact phone number for the asset owner

2.1.1.4. Asset Owner Mailing Address. Primary mailing address for the asset owner
2.1.1.5. Asset Owner Mailing Address 2. Secondary address line for the asset owner
2.1.1.6. Asset Owner City. City of the asset owner's mailing address

2.1.1.7. Asset Owner State. State of the asset owner's mailing address

2.1.1.8. Asset Owner Zip Code. ZIP code of the asset owner's mailing address

2.1.1.9. Custom ID. A unique identifier to ensure that this Asset is not registered more than once.

2.1.2. Asset Location Information.

2.1.2.1. Asset Address. Primary street address where the asset is located
2.1.2.2. Asset Address 2. Secondary address line for the asset location
2.1.2.3. Asset City. City where the asset is located

2.1.2.4. Asset State. State where the asset is located

2.1.2.5. Asset Zip Code. ZIP code where the asset is located

2.1.2.6. Latitude. Geographic latitude coordinate of the asset location

2.1.2.7 Longitude. Geographic longitude coordinate of the asset location

2.1.3. Energy consumption data (meter data). This data must have the following qualities:

2.1.3.1. Periods of usage, usage during those periods. Can be provided as average power (KW) or consumption (kWh).

2.1.3.2. May be combined from multiple sources or accounts.

2.1.3.3. Must be converted to units of energy consumption, not operational state (i.e., on/off).

2.1.3.4. Must be subject to the constraints outlined in 2.2.

2.1.3.5. Flag or directional indicator for presence of net metering.

2.1.3. Balancing Authority Data.

2.1.3.1. Date(s).

2.1.3.1.1. Coverage should extend backwards at least 12 months.

2.1.3.1.2. Time intervals should be no greater than hourly. Sub-hourly time intervals may be averaged to create an hourly time-series.

2.1.3.2. Fuel Mix.

2.1.3.3. Dispatched power should be reported in terms of fuel type and aggregated by fuel type such that the total dispatched power for each time interval is accounted for across all fuel types (even if a particular fuel type is not dispatched in a particular time period).

2.1.3.3. Imports from multiple neighboring balancing authorities should be accounted for separately so that the fuel mix from each balancing authority can be considered separately.

2.1.3.4. Fuel types should be sufficiently differentiated that appropriate emissions equivalencies can be established (e.g., coal and natural gas should be reported separately so that the higher GHG emissions from coal can be distinguished from the lower GHG emissions of natural gas).

2.1.4. Time zone. All data should be reported in UTC time.

### 2.2. Data constraints.

2.2.1. Missing values and data sufficiency for measurement period.

2.2.1.1. Consumption and power systems data should be sufficient to allow for a 365-day measurement period.

2.2.1.2. Number of days of consumption and power systems data missing should not exceed 37 days (10%). Data must be available for over 90% of hours in each calendar month.

2.2.1.3. Data is considered missing if it is clearly marked by the data provider as NULL, NaN, or similar.

2.2.1.4. Values of 0 are not considered missing.

2.2.2. Daily data is considered sufficient for model estimation (Section 3(b)) under the following conditions:

2.2.2.1. If summing to daily usage from higher frequency interval data, no more than 50% of high-frequency values should be missing. Missing values should be filled in with average of non-missing values (e.g., for hourly data, 24 \* average hourly usage).

2.2.2.2. Although this is more common in billing data than in interval data, if periods are estimated they should be combined with subsequent periods.

2.2.3. Billing data is considered sufficient for model estimation (Section 3(b)) under the following conditions:

2.2.3.1. Estimated periods values should be combined with next period up to a 70-day limit. Estimated periods are counted as missing data for the purpose of determining data sufficiency to limit the number of estimated reads used for analysis.

2.2.3.2. Off-cycle reads (spanning less than 25 days) should be dropped from analysis. These readings typically occur due to meter reading problems or changes in occupancy.

2.2.3.3. For pseudo-monthly billing cycles, periods spanning more than 35 days should be dropped from analysis. For bi-monthly billing cycles, periods spanning more than 70 days should be dropped from the analysis.

### 2.3. Guidelines for handling data quality issues.

In many cases, data quality issues can be resolved by going back to the source to resolve issues in export or transfer. This guidance is a second line of defense for handling or correcting for common data issues, and is provided in the hope of mitigating the myriad issues and discrepancies which arise using different methods for data cleaning.

2.3.1. Impossible dates.

2.3.1.1. If conducting billing analysis, and if day of month is impossible (e.g., 32nd of Jan), use first of month.

2.3.1.2. If month (e.g., 13) or year (e.g. 2051) is impossible, flag the date and remove it from the dataset. Check for mis-coding, such as 2015 -> 2051.

2.3.2. Duplicated meter records.

2.3.2.1. Combine available versions into a single time series by dropping duplicate records, using the most complete version possible. If a record for a particular timestamp conflicts with another version, flag the project for possible existence of multiple meters or submeters. If this is confirmed, the usage from multiple meters may be aggregated.

2.3.3. Ensure that meter and power systems data is using matching and correct timezone and daylight-savings handling across all data sources.

2.3.4. Power systems data should be converted to hourly by first computing a 5 minute-resolution time series using near interpolation of data points with a limit of 60 minutes, then downsampling to hourly by taking mean of linearly-interpolated 5 minute-level readings.

2.3.5. Negative meter data values should be considered as distributed generation.

2.3.6. Extreme values: Usage values that are more than three interquartile ranges larger than the median usage should be flagged as outliers and manually reviewed.

2.3.7. Generally recommend an audit for dataset completeness using expected counts of assets, meters, and carbon emissions totals.

2.3.8. Roll up data if not given with expected frequency.

### 2.4. Matching an asset to a balancing authority.

2.4.1. Balancing authority to be used is grid operator that manages distribution within the geographical area of the asset location

2.4.1.1. If there are more than one grid operators that match a location, a manual review should be conducted to determine the correct balancing authority for the asset.

## Section 3(a): Calculating Hourly Emissions - When Hourly Consumption is Available

### 3.1. Overview of locational emissions methodology.

3.1.1. Model intuition.

3.1.1.1. An asset receives electricity from the grid to which it is interconnected. The source of this electricity comes from a variety of power plants that are dispatched according to contracts and bidding mechanisms established by the balancing authority. The asset operator can choose to consume or not consume electricity during a particular period of time, but does not have control over the source of electricity provided by the grid operator.

3.1.2. Foundations in literature. Modeling does not strictly adhere to these methods, but draws from them for inspiration.

3.1.2.1. World Resources Institute GHG Emissions Scope 2 Emissions Protocol.

3.1.2.2. Energy Tag.

3.1.2.3. 24/7 Carbon Free Energy Compact.

3.1.3. Emissions are calculated for the 365 days immediately prior to the reporting period end date, provided the data sufficiency criteria are met.

3.1.4. Follow the process outlined below and detailed in subsequent sections:

3.1.4.1. Select and qualify assets for inclusion in the portfolio.

3.1.4.2. Use hourly emissions factors from matched balancing authority.

3.1.4.3. Align timestamps of asset-level energy consumption to equivalent timestamps of power systems data.

3.1.4.4. Compute all hourly emissions values by multiplying hourly consumption by the associated grid emissions value.

3.1.4.5. Sum each hourly value.

3.1.4.6. Aggregate across assets.

### 3.2. Select and qualify assets for inclusion in the portfolio.

3.2.1. In accordance with existing standards, all qualifying assets should be selected for inclusion in the portfolio.

3.2.1.1. In cases where some asset consumption is associated with an owner and other consumption is associated with a tenant (thus becoming a Scope 3 emission), it is reasonable to subdivide the emissions from a single asset into multiple (exclusive) aggregations.

3.2.1.2. If some assets that would be included in a portfolio lack the quality of data of other assets, all assets should be included, but the data limitations should be called out (see below for methods for estimating hourly consumption using data models).

3.2.2. Constraints and qualification.

3.2.2.1. Energy purchases may be included in a portfolio aggregation. Non-energy purchases should be accounted for elsewhere.

### 3.3. Use Hourly Emissions factors from matching balancing authority.

3.3.1. Basic structure applies to analysis using both actual and modeled energy consumption.

3.3.1.1. Carbon emissions: weighted average of operational emissions from each fuel dispatched during a particular time period on a grid.

3.3.1.2. Produced electricity mix: The aggregate amount of electricity dispatched onto a grid from power plants within a particular balancing authority. This number does not include imports or exports to/from neighboring balancing authorities.

3.3.1.3. Consumed electricity mix: The aggregate amount of electricity consumed within a grid including power dispatched from power plants within the grid and any imported power from neighboring grids and excluding any power exported to neighboring grids.

3.3.2. When calculating emissions for a asset, the emissions factor of the Consumed electricity mix should be used.

3.3.2.1. If calculating negative emissions from distributed generation, the Consumed electricity mix should be used.

3.3.2.1. If calculating negative emissions from generation that is managed by the balancing authority, Produced electricity mix should be used.

3.3.3. Equation: Annual emissions = sum of hourly energy use multiplied by emissions factor.

### 3.4. Align timestamps.

3.4.1. All time series data should be consistently formatted such that a time stamp indicates the beginning of a known length of time (e.g., 7:00 AM indicates the period between 7:00 and 8:00 AM).

3.4.2. Time series data should be upsampled to create a consistent hourly time-series for both consumption and power systems data.

3.4.3. If any data is in local time, it should be converted to UTC prior to computing hourly emissions.

3.4.4. Upon calculating hourly emissions, time stamps should be converted to the local time of the asset prior to aggregation with other assets.

3.4.4.1. All aggregation should be done in the local time zone. For example, if there are two assets, one a asset in Eastern Standard Time and the other a asset in Pacific Standard time, they should have their noon (local time) carbon emissions aggregated.

### 3.5. Compute all Hourly Emissions.

3.5.1. For each hour, multiply the asset consumption value by the appropriate emissions factor.

3.5.1.1. If an hour is missing a grid emissions factor, the corresponding consumption value for that hour should be masked.

3.5.1.2. If hourly grid emissions factors are calculated by averaging higher frequency data, no more than 50% of high-frequency values should be missing.

3.5.1.3. Missing consumption values should be filled in with average of non-missing values for the preceding and subsequent interval.

3.5.1.4. Data is considered missing if it is clearly marked by the data provider as NULL, NaN, or similar.

### 3.6. Sum each hourly value.

3.6.1. The product of each hour’s carbon emissions calculation should be summed for the reporting time period (typically annually).

3.6.2. If data sufficiency requirements have been met (see 2.2), total emissions should be normalized to a full year (8,760 hours) for reporting purposes.

3.6.2.1. Sum the total emissions of each hourly value. Divide by the number of valid hours in the dataset. Multiply by 8760.

## Section 3(b): Calculating Hourly Emissions using Modeled Interval Data

### 3.7. Rationale for using energy models.

It is desirable to estimate carbon emissions on an hourly basis even when hourly energy consumption data is unavailable. Even if daily consumption data is available, the distortion caused by equally apportioning energy consumption across a day can significantly distort carbon emissions calculations. In grids with significant solar and wind resources, with strong diurnal or seasonal variations, the differences can be as high as 30%. Similarly, if renewable generation is part of a portfolio of assets, the time of day in which the renewable energy is feeding into the grid will matter significantly for its carbon emissions.

3.7.1. Energy models provide a way to estimate the hourly electricity consumption from a building or production of renewable electricity. If daily, monthly, or annual consumption is known, energy models can be calibrated so that the total energy consumption is arrayed on an hourly basis in accordance with known physical and occupancy characteristics.

3.7.2. Energy models are widely used and available in the public domain. Even if not perfectly capturing the diurnal patterns of a building, relative to a flat load profile assumed by taking a daily, monthly, or annual average, it will better capture the relationship between a asset's energy consumption and the variance in carbon emissions due to hourly changes in the grid mix.

3.7.3. Examples of using Calibrated Load Shape models:

United States Department of Energy, Office of Energy Efficiency and Renewable Energy, “End-Use Load Profiles for the U.S. Building Stock: Methodology and Results of Model Calibration, Validation, and Uncertainty Quantification,” March 2022.

Pieter Gagnon, “Planning for the evolution of the electric grid with a long-run marginal emission rate.” iScience, March 2022.

### 3.8. Model Calibration.

Models are fit to known characteristics of a asset. If a asset’s energy consumption (or production) is not known, a model can be used for estimating energy values.

3.8.1. Physical Characteristics. An energy model can estimate the consumption of a building or the production of an asset based on known physical characteristics such as the primary purpose (e.g., office building), size (e.g., 2,500 square feet), energy features (e.g., central air conditioning)or production capacity (e.g., 5 kw solar panel array).

3.8.2. Energy Characteristics. An energy model can estimate the hourly distribution of a known amount of daily, monthly, or annual energy. For example, if it is known that a solar array has generated 10 gWh over the course of a year, a solar production energy model can estimate the hourly output of the array based on the location and other characteristics of the array like the tilt or asmuth of the panels.

3.8.3. Energy and non-energy data should be combined for the purposes of calibration. A model should be calibrated based on the most granular and energy specific data available. Daily data should be used ahead of monthly data. Monthly data should be used ahead of annual data. Energy data is preferred to non-energy data.

3.8.4. Use cases. Calibrated hourly data can be used in situations where access to actual hourly data is impossible or infeasible. For example, calculating emissions for third-party owned buildings would otherwise require obtaining hourly energy consumption data for each building, both infeasible and a potential violation of data privacy protection. Some buildings are fitted with meters that do not report hourly granular data. It would be impossible to obtain granular data for these buildings without installing third-party energy monitoring systems.

### 3.9. Model Accuracy Indicators.

3.9.1. It should be indicated whether a model was used to estimate the total annual consumption for a building or whether it was used to estimate the hourly consumption based on known daily, monthly, or annual totals.

3.9.1.1. A consumption value entirely determined by modeled characteristics should be considered Survey Grade.

3.9.1.2. A consumption value determined by applying a model to a known usage total should be considered Compliance Grade.

3.9.1.3. A consumption value determined by direct measurement should be considered Revenue Grade.

### 3.10. Align Timestamps.

3.10.1. An energy model is time-agnostic. Therefore it must be matched to the actual timestamp of the grid and must take into account weekdays and weekends.

3.10.1.1. Select the grid year for applying the model.

3.10.1.2. Determine the day of the week that the grid year begins with and set the model to calibrate to an 8760 that begins with the correct day of the week.

3.10.1.2.1. A leap year will require an extra day that will generally not be found in a model. If the extra day is a weekday, the closest modeled weekday should be used. If the extra day falls on a weekend, the closest modeled weekend day should be used.

### 3.11. Calculate Emissions.

3.11.1. Sum the hourly emissions for the time series.

### 3.12. Sub-annual and Annualized Emissions

3.12.1. A model can be used to estimate the emissions for any given time period. However, sub-annual emissions should not be extrapolated to produce an annual emissions value. For example, if nine of twelve months of data are known, the emissions from nine months should not be used to estimate the emissions for the entire year. Instead, an annual usage value should be determined first. Consult 2.2 for guidance regarding data sufficiency.

## Section 4: Aggregation

### 4.1. Aggregating results for two or more assets

4.1.1. In most cases, results will be reported at an aggregated time scale (e.g. annual emissions), rather than for specific time periods (e.g., Wednesdays between 4 and 6 pm). When aggregating across two or more assets, the data must cover the entirety of the same time frame for all aggregated assets. If consumption data is not available for one or more assets in the portfolio over the entire period, a model may be used to estimate the hourly consumption instead.

4.1.2. Aggregation should occur based on the local time of each aggregated asset. Carbon emissions at noon in one time zone should be aggregated with carbon emissions at noon in all other time zones where there are assets in the portfolio.

### 4.2. Aggregating consumption and distributed generation at a single asset.

4.2.1. Some assets will both consume electricity from the grid as well as export electricity to the grid. The method of tracking the flow of electricity is often referred to as net metering. Most commonly associated with the presence of on-site solar, net metering complicates the traditional notion of a one-way flow of electricity from the grid to the end-user. The reverse flow is tracked by the distribution system operator so that credits for overproduction can be assigned to the end user, but it is not accounted for in the carbon emissions associated with the grid. Rather, from the perspective of the grid operator, behind-the-meter solar overproduction looks the same as lower net demand.

4.2.2. A net-metered asset should account for negative consumption (i.e., overproduction) by multiplying each hourly unit of surplus energy fed back into the grid by the Consumed electricity mix. This will result in a negative emissions value (unless the Consumed electricity mix is 100% carbon-free, in which case the value will be zero).

4.2.3. Aggregation of consumption and distributed generation at a single asset should include all positive and negative hours of the day.

### 4.3. Aggregating across balancing authorities

4.3.1. If two or more assets in a portfolio are located within different balancing authorities, each asset should be analyzed separately, first, and then combined following the timezone guidelines in 3.4.

4.3.2. While total emissions will be additive, other metrics such as combined fuel mix or percent carbon free energy require weighting the balancing authority-specific values according to the percentage of each hour’s consumption by each individual asset within a portfolio.

### 4.4. Aggregating Generation and Consumption

4.4.1. If there are multiple assets in a portfolio and at least one of them is Generation-only (such as the electricity associated with a Renewable Energy Credit) the Generation asset should be treated as “negative consumption” using the carbon emissions of its balancing authority. For example, if a REC is generated from wind production in Texas and it is combined with consumption from an asset in New York, the carbon emissions associated with the REC would be based on the grid mix in Texas, while the carbon emissions from the asset in New York would be associated with the grid mix in New York.

4.4.2. Not all carbon accounting standards include purchased electricity as a category and some, like the WRI, differentiate between “location-based” and “market-based” carbon accounting. Market-based accounting implies the specific purchase of electricity that is intended to partially or fully offset the electricity purchased through the grid interconnection. Market-based purchases of electricity are typically generation assets that are governed by a balancing authority (and therefore counted in the grid mix that is used for location-based accounting. In this sense, there is “double-counting” of carbon savings, once by the entity that purchases the electricity through a REC or other means, and a second time by the rest of the customers in that balancing authority whose carbon emissions would slightly decline as a result of the new clean energy coming online.

4.4.3. This guidance does not take a position on the validity of market-based versus location-based carbon emissions accounting. Rather, it attempts to provide a pathway for considering how market-based accounting could enhance location-based accounting by utilizing hour production and consumption estimates.

4.4.4. Market-based accounting allows for a variety of different pathways to reducing carbon emissions, including signing up for a “green tariff” through a distribution system operator, purchasing a Renewable Energy Credit, and owning generation through a Power Purchase Agreement.

4.4.5. Hourly accounting methods solve many of the existing critiques of market-based accounting, namely that matching annual consumption with the purchase of an equivalent amount of renewable energy production does not actually result in net-zero carbon emissions especially if the purchased energy comes from a low-carbon balancing authority and the consumed energy from a high-carbon balancing authority. If a building uses energy primarily at night, but the REC purchases are for solar electricity, there is an obvious misalignment. However, if instead the purchased energy is modeled on an hourly basis, the carbon emissions can be accurately attributed to the consumption that it is intended to offset.

4.4.6. For market-based purchases of electricity, hourly emissions should be calculated using hourly production models unless the attribute is certified under an hourly specification such as Energy Tag. Geographical specificity is required in order to determine the appropriate balancing authority and for production model calibration purposes. If the energy purchase is annually vintaged, the production should be modeled over the entire year of the vintage (for example, a 100 kWh solar REC with a 2020 vintage should calibrate a production model to the entire 2020 year). Similarly, if a Green Tariff is used to procure clean energy, the mix of procured supplies should be modeled for a calendar year and attributed based on their individual hourly load profiles.
