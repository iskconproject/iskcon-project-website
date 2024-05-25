"use client";

import { useEffect, useState } from "react";

const FacebookWidget = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const handleIframeLoad = () => {
      setIframeLoaded(true);
    };

    const handleIframeError = () => {
      setLoadError(true);
    };

    const iframe = document.getElementById("facebookIframe");

    if (iframe) {
      iframe.addEventListener("load", handleIframeLoad);
      iframe.addEventListener("error", handleIframeError);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener("load", handleIframeLoad);
        iframe.removeEventListener("error", handleIframeError);
      }
    };
  }, []);

  return (
    <div>
      {loadError ? (
        <div>Error loading Facebook widget.</div>
      ) : (
        <iframe
          id="facebookIframe"
          className="mx-auto"
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100072286610743&tabs=timeline&width=800&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="500"
          height="500"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      )}
      {!iframeLoaded && !loadError && <div>Loading...</div>}
    </div>
  );
};

export default FacebookWidget;
