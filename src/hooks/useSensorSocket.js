import { useEffect, useRef, useState } from "react";

export default function useSensorSocket(url) {
  const [data, setData] = useState(null);
  const wsRef = useRef(null);
  const reconnectTimer = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const connect = () => {
      const ws = new WebSocket(url);
      wsRef.current = ws;

      ws.onopen = () => {
        console.log("WebSocket connected");
      };

      ws.onmessage = (event) => {
        try {
          const parsed = JSON.parse(event.data);

          if (isMounted) {
            setData(parsed);
          }
        } catch (error) {
          console.error("Invalid JSON received:", error);
        }
      };

      ws.onerror = (error) => {
        console.error("WebSocket error:", error);
        ws.close();
      };

      ws.onclose = () => {
        console.warn("WebSocket disconnected. Reconnecting...");

        // auto reconnect after 2 seconds
        reconnectTimer.current = setTimeout(() => {
          connect();
        }, 2000);
      };
    };

    connect();

    return () => {
      isMounted = false;

      if (wsRef.current) {
        wsRef.current.close();
      }

      if (reconnectTimer.current) {
        clearTimeout(reconnectTimer.current);
      }
    };
  }, [url]);

  return data;
}
