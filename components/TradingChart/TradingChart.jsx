"use client";
// TradingViewWidget.jsx
// TradingViewWidget.jsx
// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function TradingChart() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BSE:PERSISTENT",
          "interval": "D",
          "timezone": "Asia/Kolkata",
          "theme": "Dark",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
    container.current.appendChild(script);

    return () => {
      // Clean up function to remove the script when component unmounts
      container.current.removeChild(script);
    };
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height: "100%", width: "100%" }}
    >
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="Green-text">Persistent Systems Charts</span>
        </a>
      </div>
    </div>
  );
}

export default memo(TradingChart);
