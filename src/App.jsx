import VideoBackground from "./components/VideoBackground";
import TopBar from "./components/TopBar";
import LeftStatusPanel from "./components/LeftStatusPanel";
import WaterLevel from "./components/WaterLevel";
import Crosshair from "./components/Crosshair";
import PersonsDetected from "./components/PersonsDetected";

import useSensorSocket from "./hooks/useSensorSocket";

function App() {
  // 🔴 CONNECTS TO mock_server.py
  const sensorData = useSensorSocket("ws://localhost:5174");

  // wait until first data packet arrives
  if (!sensorData) {
    return (
      <div style={{ color: "white", padding: "20px" }}>
        Waiting for sensor data…
      </div>
    );
  }

  return (
    <>
      <VideoBackground />

      <TopBar
        online={sensorData.online}
        battery={sensorData.battery}
        torch={sensorData.torch}
        recording={sensorData.recording}
      />

      <LeftStatusPanel
        fireDetected={sensorData.fire}
        gasDetected={sensorData.gas}
        temperature={sensorData.temperature}
      />

      <WaterLevel level={sensorData.water} />

      <Crosshair />

      <PersonsDetected count={sensorData.persons} />
    </>
  );
}

export default App;
