import { useEffect, useState } from "react";

import VideoBackground from "./components/VideoBackground";
import TopBar from "./components/TopBar";
import LeftStatusPanel from "./components/LeftStatusPanel";
import WaterLevel from "./components/WaterLevel";
import Crosshair from "./components/Crosshair";
import PersonsDetected from "./components/PersonsDetected";
import UltrasonicRadar from "./components/UltrasonicRadar";

function App() {
  const [sensorData, setSensorData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://192.168.50.135/data"); // ESP32 IP
        const data = await res.json();

        setSensorData({
          online: true,
          battery: data.battery ?? 100,
          torch: data.torch ?? false,
          recording: false,

          flame: data.flame,
          gas: data.gas,
          temperature: data.temperature,


          //water: data.water,
          ultrasonic: data.ultrasonic,
          persons: data.persons ?? 0
        });

      } catch (err) {
        console.log("ESP not reachable", err);
        setSensorData(null);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 2000);

    return () => clearInterval(interval);
  }, []);

  const isFireDetected =
  sensorData &&
  sensorData.temperature > 25 &&
  sensorData.gas > 400 &&
  sensorData.flame === true;

return (
  <>
    <VideoBackground />

    {!sensorData && (
      <div style={{ color: "red", position: "absolute", top: 20 }}>
        Sensor offline...
      </div>
    )}

    {sensorData && (
      <>
        <TopBar
          online={sensorData.online}
          battery={sensorData.battery}
          torch={sensorData.torch}
          recording={sensorData.recording}
        />

        <LeftStatusPanel
          fireDetected={isFireDetected}
          gasDetected={sensorData.gas>450}
          temperature={sensorData.temperature}
          flameDetected={sensorData.flame}
        />

        
        
        <Crosshair />
        
      </>
    )}
  </>
);
}

export default App;
