```mermaid
flowchart TD
    subgraph Local_System[Local System]
        app[Local Application]
        db[Local Database]
    end

    subgraph External_System[External System]
        extdb[External Database / Server]
    end

    subgraph Hardware[Park Grounds]
        mhc[Main Hardware Controller]
        cb[Control Boxes]
        valve[Valve On/Off]
        sensors[Sensors + Data]
    end

    %% Connections
    Local_System <--> External_System
    app <--> db

    app <--> mhc
    mhc <--> cb
    cb --> valve
    sensors --> cb

    %% Notes
    mhc -. CANbus .- cb
    sensors -. CANbus .- mhc
    valve -. CANbus .- mhc
```
