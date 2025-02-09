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
  Every smart city vendor has its own data payload format. Existing IoT connectivity standards like LoRaWan, NB-IoT & Wi-SUN/6LowPan do not specify data model or payload for smart city & utility use cases. They only standardize the physical layer and the messaging protocol. This results in each smart city & utility solution provider using a specific proprietary data model preventing interoperability and generating vendor lock-in or expensive proprietary API integrations. 

  uCIFI® tackles this interoperability issue by specifying a unified data model for all smart city objects, that can be communicated on any open and proprietary IoT network. The version 2.0 of the uCIFI® data model already define a series of different connected sensors and devices – called reference objects – and is extensible to cover even more in the future. 
---
::

Please check the OMA LwM2M Registry page to access the 2.0 Datamodel.


::ShMultiColumn
---
cols: 4 # number of columns
---
    :::ShMicroCard 
    ---
    ui:
        title: text-6xl text-center
        subtitle: text-center
        text: text-center
    layout: flat
    text: | 
        All the uCIFI® data model objects and their associated attributes are modelized using LwM2M formats so they can be applied across any constrained IoT network.
    title: |
        1
    subtitle: |
        LwM2M Format
    ---
    :::


    :::ShMicroCard
    ---
    ui:
        title: text-6xl text-center
        subtitle: text-center
        text: text-center
    layout: flat        
    text: |
        All uCIFI® objects and attributes are described on the Open Mobile Alliance’s Lightweight M2M (LwM2M) registry. The uCIFI® data model can be implemented freely by any vendor in any product. However, only products using standardized IoT connectivity coupled with the uCIFI® data model can pass certification and be considered fully interoperable.
    title: |
        2
    subtitle: |
        Open Source
    ---
    :::

    :::ShMicroCard
    ---
    ui:
        title: text-6xl text-center
        subtitle: text-center
        text: text-center
    layout: flat    
    text: |
        The uCIFI® data model can be implemented on any standardized IoT network including Cellular (4g/5G, LTE, NB-IoT), LoRaWan and uCIFI® smart city stack on Wi-SUN (6LowPan) mesh. Thanks to the uCIFI® unified data model, no need to add data translators and software gateways between IoT networks and central applications.
    title: |
        3
    subtitle: |
        Multi-transport 
    ---
    :::

    :::ShMicroCard
    ---
    ui:
        title: text-6xl text-center
        subtitle: text-center
        text: text-center
    layout: flat
    text: |
        The uCIFI® reference implementation is designed to be easy to implement and cost efficient, so that both end-customers and solution suppliers have no reason not to adopt uCIFI®.
    title: |
        4
    subtitle: |
        Cost efficient
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