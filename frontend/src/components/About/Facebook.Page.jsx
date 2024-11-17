
import { useEffect } from "react";

export default function FacebookPage() {
  useEffect(() => {
    if (!window.FB) {
      const script = document.createElement("script");
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0";
      script.async = true;
      script.crossOrigin = "anonymous";
      script.onload = () => {
        if (window.FB) window.FB.XFBML.parse();
      };
      document.body.appendChild(script);
    } else {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="flex justify-center my-4">
      <div
        className="fb-page"
        data-href="https://www.facebook.com/unitylandmarkltd?ref=embed_page"
        data-tabs="timeline"
        data-width="800"
        data-height="500"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      ></div>
    </div>
  );
}
