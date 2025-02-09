---
title: uCIFI® DATA MODEL
description:
layout: web
---

::ShTextImg
---
positionText: left
spanText: m
alignText: left
urlImage: /images/ucifi/Graph-uCIFI-Data-model-V2.png
subtitle: |
  Smart Cities Embrace Open Wireless Networks
text: |
    Smart city vendors use proprietary data formats, leading to interoperability challenges and vendor lock-in. While IoT standards like **LoRaWAN, NB-IoT, and Wi-SUN** define the physical and messaging layers, they lack a standardized **data model** for smart city applications.

    **uCIFI® solves this issue** by introducing a **unified, open data model** that works across both proprietary and open IoT networks. **Version 2.0** already includes standardized reference objects, ensuring seamless communication between smart city devices while remaining extensible for future expansion.
---
::


::ShMultiColumn
---
cols: 4 # number of columns
---
    :::ShMicroCard
    ---
    layout: flat
    icon: mdi:format-list-bulleted-type
    title: |
        LwM2M Format
    subtitle: |
        Unified Data Representation
    text: |
        The **uCIFI® data model** follows the **LwM2M format**, ensuring seamless interoperability across constrained IoT networks.
    ---
    :::

    :::ShMicroCard
    ---
    layout: flat
    icon: mdi:source-branch
    title: |
        Open Source
    subtitle: |
        Accessible & Standardized
    text: |
        The **uCIFI® data model** is openly documented in the **OMA LwM2M registry**, allowing **vendors to implement it freely** for full interoperability.
    ---
    :::

    :::ShMicroCard
    ---
    layout: flat
    icon: mdi:transit-connection
    title: |
        Multi-Transport
    subtitle: |
        Network-Agnostic Integration
    text: |
        Designed for **Cellular (4G/5G, NB-IoT), LoRaWAN, and Wi-SUN**, **uCIFI® eliminates the need** for data translators or additional software gateways.
    ---
    :::

    :::ShMicroCard
    ---
    layout: flat
    icon: mdi:currency-usd-off
    title: |
        Cost Efficient
    subtitle: |
        Simplified & Scalable Adoption
    text: |
        The **uCIFI® reference implementation** is designed to be **cost-effective**, encouraging **widespread adoption** by cities and solution providers.
    ---
    :::
::

## uCIFI® DATA MODEL
::ShFaq
---
qas: 
  - q: "Are there Synergies between uCIFI® and other standards?" 
    a: |
        The goal of uCIFI® is to bring solutions to existing market pains, particularly to provide a unified data model to Smart City and Smart Energy applications that require long-range device-to-device communication. To do so, uCIFI® shall not reinvent the wheel but will work hand in hand with other consortia and initiatives including OMA, WISUN, FIWARE, LoRaWAN and TALQ:


        - **FIWARE:** the uCIFI® data model is the equivalent of Fiware device profiles but on constrained networks, while Fiware models are designed to run only on IT servers and based on JSON and NGSI RESTful that can’t be transported on LPWAN low bandwidth networks.

        - **LoRaWAN:** uCIFI® shall provide a unified data model for LoRa devices to be interoperable and easy to integrate in central management software.

        - **Wi-SUN:** the uCIFI®️ Technical Workgroup will specify an open-source smart city stack on top of Wi-SUN (6LowPan) mesh to extend smart city devices interoperability and capabilities to a higher level.

        - **TALQ:** the uCIFI® data model is compatible with the TALQ protocol. While TALQ is based on HTTP and RESTful (i.e. only available on internet networks between gateways and central management software), the uCIFI data model is designed to be used on constrained networks such as NB-IoT, LoRaWAN and WISUN networks. A uCIFI®-compatible device can easily be interfaced with a TALQ Central Management Software through a uCIFI-to-TALQ gateway.
  - q: "How does it position vis-à-vis existing wireless technologies?"
    a: |
        Cities and Utilities need a variety of wireless networks to support their needs. LPWAN networks may be fine for battery-based devices, particularly when device-to-device is not needed and data bandwidth is limited to few kilobytes per second. The main issue with such open LPWAN networks is the lack of standardization for data format. Each device supplier uses proprietary data payload that only vendors can decode, which results into cities being dependent from vendor’s proprietary cloud systems to do the data translation. On such LPWAN networks, uCIFI® shall provide a standardized data model/data payload that vendors can use freely to unlock these networks and drastically reduce vendor’s dependence in smart city applications.

        When higher bandwidth or device-to-device communication is needed (e.g. dynamic outdoor lighting, demand/response in smart metering), Wi-SUN wireless mesh may be required. The uCIFI® Alliance develops an open source smart city Application Layer on top of mesh networks which are standardized by the Wi-SUN Alliance up to the transport layer.
  - q: "What are the verticals included in the data model?"
    a: |
        This uCIFI® data model version 1.0 defines agreed and standard attributes for 33 smart city & utility object types including streetlight controllers, electrical cabinet controllers, water & gas meters, water pressure & quality meters, environmental sensors, parking place detectors, traffic counters, city information panels and more. The uCIFI® data model is designed to be extendable with vendor-specific objects and attributes.
  - q: "Does uCIFI data model apply globally?"
    a: |
        The uCIFI® unified data model shall apply to any standardized LPWAN network, regardless of wireless spectrum and technologies.
              
---
::