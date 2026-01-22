import * as React from "react"
import { useState } from "react";
import "./girasol.css";

const Girasol = (props) => {
  const [girar, setGirar] = useState(false);

  return (
  <svg
    
    xmlns="http://www.w3.org/2000/svg"
    width="42mm"
    height="87mm"
    viewBox="0 0 42 87"
    onClick={() => setGirar(!girar)}
    style={{ cursor: "pointer" }}
    {...props}
  >
    <path
      d="M42.943 74.109s1.577-1.293 2.247-1.744a16.41 16.41 0 0 1 2.412-1.326c.702-.317 1.417-.636 2.174-.781.993-.192 2.021-.076 3.032-.11.798-.026 1.597-.022 2.393-.072.641-.04 1.292-.04 1.919-.182.721-.163 1.386-.513 2.082-.762.103-.038.31-.11.31-.11s-.252 1.079-.438 1.599c-.287.805-.664 1.576-1.041 2.343-.424.865-.836 1.741-1.37 2.543-.397.596-.768 1.255-1.352 1.671-.764.545-1.713.872-2.649.963-.748.073-1.502-.153-2.229-.345-.907-.24-1.772-.622-2.63-.999-.593-.26-1.125-.657-1.736-.872-.628-.22-1.299-.298-1.954-.418a31.893 31.893 0 0 0-1.206-.163z"
      style={{
        fill: "#a1bc98",
        fillOpacity: 1,
        stroke: "#5f8053",
        strokeWidth: 0.0879891,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeOpacity: 1,
        paintOrder: "markers fill stroke",
      }}
      transform="translate(-21.2 -19.005)"
    />
    <path
      d="M42.834 74.69s2.846-.745 4.304-.85c1.14-.082 2.286.267 3.426.176a8.473 8.473 0 0 0 2.05-.44c1.218-.415 2.376-1.01 3.483-1.668.373-.222 1.054-.762 1.054-.762"
      style={{
        fill: "#a1bc98",
        fillOpacity: 1,
        stroke: "#5f8053",
        strokeWidth: 0.1,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeOpacity: 1,
        paintOrder: "markers fill stroke",
      }}
      transform="translate(-21.2 -19.005)"
    />
    <path
      d="M47.16 73.833c.746-.555 1.234-1.238 2.401-1.581M50.556 74.023c1.017.596 1.99.907 2.928.996M54.04 72.932c.126-.509.602-.962 1.113-1.434"
      style={{
        fill: "#a1bc98",
        fillOpacity: 1,
        stroke: "#5f8053",
        strokeWidth: 0.1,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeOpacity: 1,
        paintOrder: "markers fill stroke",
      }}
      transform="translate(-21.2 -19.005)"
    />
    <path
      d="M42.943 74.109s1.577-1.293 2.247-1.744a16.41 16.41 0 0 1 2.412-1.326c.702-.317 1.417-.636 2.174-.781.993-.192 2.021-.076 3.032-.11.798-.026 1.597-.022 2.393-.072.641-.04 1.292-.04 1.919-.182.721-.163 1.386-.513 2.082-.762.103-.038.31-.11.31-.11s-.252 1.079-.438 1.599c-.287.805-.664 1.576-1.041 2.343-.424.865-.836 1.741-1.37 2.543-.397.596-.768 1.255-1.352 1.671-.764.545-1.713.872-2.649.963-.748.073-1.502-.153-2.229-.345-.907-.24-1.772-.622-2.63-.999-.593-.26-1.125-.657-1.736-.872-.628-.22-1.299-.298-1.954-.418a31.893 31.893 0 0 0-1.206-.163z"
      style={{
        fill: "#a1bc98",
        fillOpacity: 1,
        stroke: "#5f8053",
        strokeWidth: 0.0879891,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeOpacity: 1,
        paintOrder: "markers fill stroke",
      }}
      transform="matrix(-.88452 -.15487 -.10987 .89892 66.16 -9.975)"
    />
    <path
      d="M42.834 74.69s2.846-.745 4.304-.85c1.14-.082 2.286.267 3.426.176a8.473 8.473 0 0 0 2.05-.44c1.218-.415 2.376-1.01 3.483-1.668.373-.222 1.054-.762 1.054-.762"
      style={{
        fill: "#a1bc98",
        fillOpacity: 1,
        stroke: "#5f8053",
        strokeWidth: 0.1,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeOpacity: 1,
        paintOrder: "markers fill stroke",
      }}
      transform="matrix(-.88452 -.15487 -.10987 .89892 66.16 -9.975)"
    />
    <path
      d="M47.16 73.833c.746-.555 1.234-1.238 2.401-1.581M50.556 74.023c1.017.596 1.99.907 2.928.996M54.04 72.932c.126-.509.602-.962 1.113-1.434"
      style={{
        fill: "#a1bc98",
        fillOpacity: 1,
        stroke: "#5f8053",
        strokeWidth: 0.1,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeOpacity: 1,
        paintOrder: "markers fill stroke",
      }}
      transform="matrix(-.88452 -.15487 -.10987 .89892 66.16 -9.975)"
    />
    <path
      d="m40.164 42.98 1.822.165 1.987 61.943-2.319.083z"
      style={{
        fill: "#97a87a",
        fillOpacity: 1,
        stroke: "#65734b",
        strokeWidth: 0.1,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeOpacity: 1,
        paintOrder: "markers fill stroke",
      }}
      transform="translate(-21.034 -19.047)"
    />
    <g style={{display: "inline",}} className={`exterior ${girar ? "girar" : ""}`}>
      <g
        style={{
          opacity: 1,
          fill: "#e5ba41",
          fillOpacity: 1,
          stroke: "#72540f",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M36.73 35.807s-1.173-1.017-1.625-1.64c-.388-.532-.637-1.155-.908-1.756-.283-.63-.579-1.262-.746-1.932-.225-.897-.317-1.828-.337-2.752-.022-.999.123-1.994.234-2.987a64.41 64.41 0 0 1 .322-2.225s1.249.833 1.845 1.288c.908.694 1.878 1.34 2.635 2.196.645.73 1.139 1.59 1.58 2.46.527 1.035.94 2.132 1.26 3.25.144.506.293 1.551.293 1.551s-.99.165-1.464.322c-.407.135-.796.321-1.172.527-.42.231-.847.467-1.2.79-.284.261-.717.908-.717.908z"
          style={{
            opacity: 1,
            fill: "#e5ba41",
            fillOpacity: 1,
            stroke: "#72540f",
            strokeWidth: 0.15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "markers fill stroke",
          }}
          transform="matrix(-1.05553 -.2182 -.34486 .95711 77.998 -7.91)"
        />
        <path
          d="M35.512 38.919s-3.906.436-8.6-2.421M36.136 36.97s-1.595-1.024-4.155-1.589c-1.125-.248-2.764-.408-4.305.046"
          style={{
            display: "inline",
            fill: "#e5ba41",
            fillOpacity: 1,
            stroke: "#72540f",
            strokeWidth: 0.0976699,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "markers fill stroke",
          }}
          transform="matrix(-.90537 .55564 .50619 .88831 38.431 -37.405)"
        />
      </g>
      <g
        style={{
          fill: "#e5ba41",
          fillOpacity: 1,
          stroke: "#72540f",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M36.73 35.807s-1.173-1.017-1.625-1.64c-.388-.532-.637-1.155-.908-1.756-.283-.63-.579-1.262-.746-1.932-.225-.897-.317-1.828-.337-2.752-.022-.999.123-1.994.234-2.987a64.41 64.41 0 0 1 .322-2.225s1.249.833 1.845 1.288c.908.694 1.878 1.34 2.635 2.196.645.73 1.139 1.59 1.58 2.46.527 1.035.94 2.132 1.26 3.25.144.506.293 1.551.293 1.551s-.99.165-1.464.322c-.407.135-.796.321-1.172.527-.42.231-.847.467-1.2.79-.284.261-.717.908-.717.908z"
          style={{
            opacity: 1,
            fill: "#e5ba41",
            fillOpacity: 1,
            stroke: "#72540f",
            strokeWidth: 0.15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "markers fill stroke",
          }}
          transform="matrix(-.87705 .52866 .44328 .92804 39.445 -37.9)"
        />
        <path
          d="M37.835 34.582s-2.692-3.947-3.236-8.646M39.236 33.804c.353-.25-.89-5.076-3.71-7.975"
          style={{
            display: "inline",
            fill: "#e5ba41",
            fillOpacity: 1,
            stroke: "#72540f",
            strokeWidth: 0.0976699,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "markers fill stroke",
          }}
          transform="matrix(-.87705 .52866 .44328 .92804 39.445 -37.9)"
        />
      </g>
      <g
        style={{
          fill: "#e5ba41",
          fillOpacity: 1,
          stroke: "#72540f",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M36.73 35.807s-1.173-1.017-1.625-1.64c-.388-.532-.637-1.155-.908-1.756-.283-.63-.579-1.262-.746-1.932-.225-.897-.317-1.828-.337-2.752-.022-.999.123-1.994.234-2.987a64.41 64.41 0 0 1 .322-2.225s1.249.833 1.845 1.288c.908.694 1.878 1.34 2.635 2.196.645.73 1.139 1.59 1.58 2.46.527 1.035.94 2.132 1.26 3.25.144.506.293 1.551.293 1.551s-.99.165-1.464.322c-.407.135-.796.321-1.172.527-.42.231-.847.467-1.2.79-.284.261-.717.908-.717.908z"
          style={{
            opacity: 1,
            fill: "#e5ba41",
            fillOpacity: 1,
            stroke: "#72540f",
            strokeWidth: 0.15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "markers fill stroke",
          }}
          transform="matrix(-.25084 .99286 .96811 .34715 -7.196 -34.042)"
        />
        <path
          d="M37.82 34.506s-2.777-3.863-3.19-8.587M39.239 33.764c.221-.136-1.483-4.602-3.512-8.131"
          style={{
            fill: "#e5ba41",
            fillOpacity: 1,
            stroke: "#72540f",
            strokeWidth: 0.0976699,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "markers fill stroke",
          }}
          transform="matrix(-.25084 .99286 .96811 .34715 -7.196 -34.042)"
        />
      </g>
      <g
        style={{
          fill: "#e5ba41",
          fillOpacity: 1,
          stroke: "#72540f",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M36.73 35.807s-1.173-1.017-1.625-1.64c-.388-.532-.637-1.155-.908-1.756-.283-.63-.579-1.262-.746-1.932-.225-.897-.317-1.828-.337-2.752-.022-.999.123-1.994.234-2.987a64.41 64.41 0 0 1 .322-2.225s1.249.833 1.845 1.288c.908.694 1.878 1.34 2.635 2.196.645.73 1.139 1.59 1.58 2.46.527 1.035.94 2.132 1.26 3.25.144.506.293 1.551.293 1.551s-.99.165-1.464.322c-.407.135-.796.321-1.172.527-.42.231-.847.467-1.2.79-.284.261-.717.908-.717.908z"
          style={{
            opacity: 1,
            fill: "#e5ba41",
            fillOpacity: 1,
            stroke: "#72540f",
            strokeWidth: 0.15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "markers fill stroke",
          }}
          transform="matrix(.48395 .9025 .94913 -.39611 -36.936 -.373)"
        />
        <path
          d="M39.066 33.786c.317-.395-1.003-5.597-3.651-8.364"
          style={{
            display: "inline",
            fill: "#e5ba41",
            fillOpacity: 1,
            stroke: "#72540f",
            strokeWidth: 0.102905,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "markers fill stroke",
          }}
          transform="matrix(.48395 .9025 .94913 -.39611 -36.936 -.373)"
        />
        <path
          d="M38.108 34.334s-3.103-3.378-3.712-8.393"
          style={{
            display: "inline",
            fill: "#e5ba41",
            fillOpacity: 1,
            stroke: "#72540f",
            strokeWidth: 0.105358,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "markers fill stroke",
          }}
          transform="matrix(.48395 .9025 .94913 -.39611 -36.936 -.373)"
        />
      </g>
      <g
        style={{
          fill: "#e5ba41",
          fillOpacity: 1,
          stroke: "#72540f",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M36.73 35.807s-1.173-1.017-1.625-1.64c-.388-.532-.637-1.155-.908-1.756-.283-.63-.579-1.262-.746-1.932-.225-.897-.317-1.828-.337-2.752-.022-.999.123-1.994.234-2.987a64.41 64.41 0 0 1 .322-2.225s1.249.833 1.845 1.288c.908.694 1.878 1.34 2.635 2.196.645.73 1.139 1.59 1.58 2.46.527 1.035.94 2.132 1.26 3.25.144.506.293 1.551.293 1.551s-.99.165-1.464.322c-.407.135-.796.321-1.172.527-.42.231-.847.467-1.2.79-.284.261-.717.908-.717.908z"
          style={{
            opacity: 1,
            fill: "#e5ba41",
            fillOpacity: 1,
            stroke: "#72540f",
            strokeWidth: 0.15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "markers fill stroke",
          }}
          transform="matrix(-.54473 -.90427 -.91944 .48019 80.072 39.554)"
        />
        <path
          d="M39.261 33.728c.302-.17-1.35-5.116-4.006-8.418M37.931 34.501s-2.885-4.043-3.59-8.685"
          style={{
            display: "inline",
            fill: "#e5ba41",
            fillOpacity: 1,
            stroke: "#72540f",
            strokeWidth: 0.0956513,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "markers fill stroke",
          }}
          transform="matrix(-.54473 -.90427 -.91944 .48019 80.072 39.554)"
        />
      </g>
      <g
        style={{
          fill: "#e5ba41",
          fillOpacity: 1,
          stroke: "#72540f",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M36.73 35.807s-1.173-1.017-1.625-1.64c-.388-.532-.637-1.155-.908-1.756-.283-.63-.579-1.262-.746-1.932-.225-.897-.317-1.828-.337-2.752-.022-.999.123-1.994.234-2.987a64.41 64.41 0 0 1 .322-2.225s1.249.833 1.845 1.288c.908.694 1.878 1.34 2.635 2.196.645.73 1.139 1.59 1.58 2.46.527 1.035.94 2.132 1.26 3.25.144.506.293 1.551.293 1.551s-.99.165-1.464.322c-.407.135-.796.321-1.172.527-.42.231-.847.467-1.2.79-.284.261-.717.908-.717.908z"
          style={{
            opacity: 1,
            fill: "#e5ba41",
            fillOpacity: 1,
            stroke: "#72540f",
            strokeWidth: 0.15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "markers fill stroke",
          }}
          transform="matrix(.9872 .3498 .44877 -.94377 -37.327 44.466)"
        />
        <path
          d="M39.556 33.59c.589-.431-1.581-4.128-3.9-7.818"
          style={{
            display: "inline",
            fill: "#e5ba41",
            fillOpacity: 1,
            stroke: "#72540f",
            strokeWidth: 0.104876,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "markers fill stroke",
          }}
          transform="matrix(.9872 .3498 .44877 -.94377 -37.327 44.466)"
        />
        <path
          d="M37.903 34.446s-3.007-3.385-3.571-8.768"
          style={{
            display: "inline",
            fill: "#e5ba41",
            fillOpacity: 1,
            stroke: "#72540f",
            strokeWidth: 0.108318,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "markers fill stroke",
          }}
          transform="matrix(.9872 .3498 .44877 -.94377 -37.327 44.466)"
        />
      </g>
      <g
        style={{
          fill: "#e5ba41",
          fillOpacity: 1,
          stroke: "#72540f",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M36.73 35.807s-1.173-1.017-1.625-1.64c-.388-.532-.637-1.155-.908-1.756-.283-.63-.579-1.262-.746-1.932-.225-.897-.317-1.828-.337-2.752-.022-.999.123-1.994.234-2.987a64.41 64.41 0 0 1 .322-2.225s1.249.833 1.845 1.288c.908.694 1.878 1.34 2.635 2.196.645.73 1.139 1.59 1.58 2.46.527 1.035.94 2.132 1.26 3.25.144.506.293 1.551.293 1.551s-.99.165-1.464.322c-.407.135-.796.321-1.172.527-.42.231-.847.467-1.2.79-.284.261-.717.908-.717.908z"
          style={{
            opacity: 1,
            fill: "#e5ba41",
            fillOpacity: 1,
            stroke: "#72540f",
            strokeWidth: 0.15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "markers fill stroke",
          }}
          transform="matrix(.91509 -.52823 -.46208 -.92798 1.184 80.32)"
        />
        <path
          d="M37.947 34.514s-2.887-3.68-3.657-8.31M39.266 33.721c.114-.09-1.24-5.325-4.011-8.178"
          style={{
            display: "inline",
            fill: "#e5ba41",
            fillOpacity: 1,
            stroke: "#72540f",
            strokeWidth: 0.0956395,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "markers fill stroke",
          }}
          transform="matrix(.91509 -.52823 -.46208 -.92798 1.184 80.32)"
        />
      </g>
      <g
        style={{
          fill: "#e5ba41",
          fillOpacity: 1,
          stroke: "#72540f",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M36.73 35.807s-1.173-1.017-1.625-1.64c-.388-.532-.637-1.155-.908-1.756-.283-.63-.579-1.262-.746-1.932-.225-.897-.317-1.828-.337-2.752-.022-.999.123-1.994.234-2.987a64.41 64.41 0 0 1 .322-2.225s1.249.833 1.845 1.288c.908.694 1.878 1.34 2.635 2.196.645.73 1.139 1.59 1.58 2.46.527 1.035.94 2.132 1.26 3.25.144.506.293 1.551.293 1.551s-.99.165-1.464.322c-.407.135-.796.321-1.172.527-.42.231-.847.467-1.2.79-.284.261-.717.908-.717.908z"
          style={{
            opacity: 1,
            fill: "#e5ba41",
            fillOpacity: 1,
            stroke: "#72540f",
            strokeWidth: 0.15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "markers fill stroke",
          }}
          transform="matrix(.27268 -1.02644 -.97866 -.37872 48.576 78.574)"
        />
        <path
          d="M37.877 34.472s-2.84-3.383-3.035-8.043M39.184 33.803s-.918-4.556-2.968-7.844"
          style={{
            display: "inline",
            fill: "#e5ba41",
            fillOpacity: 1,
            stroke: "#72540f",
            strokeWidth: 0.0950097,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "markers fill stroke",
          }}
          transform="matrix(.27268 -1.02644 -.97866 -.37872 48.576 78.574)"
        />
      </g>
    </g>
    <g style={{display: "inline",opacity: 1,}} className={`interior ${girar ? "girar" : ""}`}>
      <path
        d="M36.73 35.807s-1.173-1.017-1.625-1.64c-.388-.532-.637-1.155-.908-1.756-.283-.63-.579-1.262-.746-1.932-.225-.897-.317-1.828-.337-2.752-.022-.999.123-1.994.234-2.987a64.41 64.41 0 0 1 .322-2.225s1.249.833 1.845 1.288c.908.694 1.878 1.34 2.635 2.196.645.73 1.139 1.59 1.58 2.46.527 1.035.94 2.132 1.26 3.25.144.506.293 1.551.293 1.551s-.99.165-1.464.322c-.407.135-.796.321-1.172.527-.42.231-.847.467-1.2.79-.284.261-.717.908-.717.908z"
        style={{
          opacity: 1,
          fill: "#face68",
          fillOpacity: 1,
          stroke: "#dea41d",
          strokeWidth: 0.15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "markers fill stroke",
        }}
        transform="translate(-21.034 -19.047)"
      />
      <path
        d="M37.897 34.422s-2.218-1.982-2.827-4.65"
        style={{
          fill: "#face68",
          fillOpacity: 1,
          stroke: "#dea41d",
          strokeWidth: 0.158452,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "markers fill stroke",
        }}
        transform="translate(-21.034 -19.047)"
      />
      <path
        d="M39.259 33.801s-1.58-2.27-2.015-5.327"
        style={{
          fill: "#face68",
          fillOpacity: 1,
          stroke: "#dea41d",
          strokeWidth: 0.143171,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "markers fill stroke",
        }}
        transform="translate(-21.034 -19.047)"
      />
      <path
        d="M36.73 35.807s-1.173-1.017-1.625-1.64c-.388-.532-.637-1.155-.908-1.756-.283-.63-.579-1.262-.746-1.932-.225-.897-.317-1.828-.337-2.752-.022-.999.123-1.994.234-2.987a64.41 64.41 0 0 1 .322-2.225s1.249.833 1.845 1.288c.908.694 1.878 1.34 2.635 2.196.645.73 1.139 1.59 1.58 2.46.527 1.035.94 2.132 1.26 3.25.144.506.293 1.551.293 1.551s-.99.165-1.464.322c-.407.135-.796.321-1.172.527-.42.231-.847.467-1.2.79-.284.261-.717.908-.717.908z"
        style={{
          opacity: 1,
          fill: "#face68",
          fillOpacity: 1,
          stroke: "#dea41d",
          strokeWidth: 0.15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "markers fill stroke",
        }}
        transform="rotate(49.531 51.9 7.267)"
      />
      <path
        d="M37.897 34.422s-2.218-1.982-2.827-4.65"
        style={{
          fill: "#face68",
          fillOpacity: 1,
          stroke: "#dea41d",
          strokeWidth: 0.158452,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "markers fill stroke",
        }}
        transform="rotate(49.531 51.9 7.267)"
      />
      <path
        d="M39.259 33.801s-1.58-2.27-2.015-5.327"
        style={{
          fill: "#face68",
          fillOpacity: 1,
          stroke: "#dea41d",
          strokeWidth: 0.143171,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "markers fill stroke",
        }}
        transform="rotate(49.531 51.9 7.267)"
      />
      <path
        d="M36.73 35.807s-1.173-1.017-1.625-1.64c-.388-.532-.637-1.155-.908-1.756-.283-.63-.579-1.262-.746-1.932-.225-.897-.317-1.828-.337-2.752-.022-.999.123-1.994.234-2.987a64.41 64.41 0 0 1 .322-2.225s1.249.833 1.845 1.288c.908.694 1.878 1.34 2.635 2.196.645.73 1.139 1.59 1.58 2.46.527 1.035.94 2.132 1.26 3.25.144.506.293 1.551.293 1.551s-.99.165-1.464.322c-.407.135-.796.321-1.172.527-.42.231-.847.467-1.2.79-.284.261-.717.908-.717.908z"
        style={{
          opacity: 1,
          fill: "#face68",
          fillOpacity: 1,
          stroke: "#dea41d",
          strokeWidth: 0.15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "markers fill stroke",
        }}
        transform="rotate(94.24 40.151 20.69)"
      />
      <path
        d="M37.897 34.422s-2.218-1.982-2.827-4.65"
        style={{
          fill: "#face68",
          fillOpacity: 1,
          stroke: "#dea41d",
          strokeWidth: 0.158452,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "markers fill stroke",
        }}
        transform="rotate(94.24 40.151 20.69)"
      />
      <path
        d="M39.259 33.801s-1.58-2.27-2.015-5.327"
        style={{
          fill: "#face68",
          fillOpacity: 1,
          stroke: "#dea41d",
          strokeWidth: 0.143171,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "markers fill stroke",
        }}
        transform="rotate(94.24 40.151 20.69)"
      />
      <path
        d="M36.73 35.807s-1.173-1.017-1.625-1.64c-.388-.532-.637-1.155-.908-1.756-.283-.63-.579-1.262-.746-1.932-.225-.897-.317-1.828-.337-2.752-.022-.999.123-1.994.234-2.987a64.41 64.41 0 0 1 .322-2.225s1.249.833 1.845 1.288c.908.694 1.878 1.34 2.635 2.196.645.73 1.139 1.59 1.58 2.46.527 1.035.94 2.132 1.26 3.25.144.506.293 1.551.293 1.551s-.99.165-1.464.322c-.407.135-.796.321-1.172.527-.42.231-.847.467-1.2.79-.284.261-.717.908-.717.908z"
        style={{
          opacity: 1,
          fill: "#face68",
          fillOpacity: 1,
          stroke: "#dea41d",
          strokeWidth: 0.15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "markers fill stroke",
        }}
        transform="rotate(135.258 35.142 26.43)"
      />
      <path
        d="M37.897 34.422s-2.218-1.982-2.827-4.65"
        style={{
          fill: "#face68",
          fillOpacity: 1,
          stroke: "#dea41d",
          strokeWidth: 0.158452,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "markers fill stroke",
        }}
        transform="rotate(135.258 35.142 26.43)"
      />
      <path
        d="M39.259 33.801s-1.58-2.27-2.015-5.327"
        style={{
          fill: "#face68",
          fillOpacity: 1,
          stroke: "#dea41d",
          strokeWidth: 0.143171,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "markers fill stroke",
        }}
        transform="rotate(135.258 35.142 26.43)"
      />
      <path
        d="M36.73 35.807s-1.173-1.017-1.625-1.64c-.388-.532-.637-1.155-.908-1.756-.283-.63-.579-1.262-.746-1.932-.225-.897-.317-1.828-.337-2.752-.022-.999.123-1.994.234-2.987a64.41 64.41 0 0 1 .322-2.225s1.249.833 1.845 1.288c.908.694 1.878 1.34 2.635 2.196.645.73 1.139 1.59 1.58 2.46.527 1.035.94 2.132 1.26 3.25.144.506.293 1.551.293 1.551s-.99.165-1.464.322c-.407.135-.796.321-1.172.527-.42.231-.847.467-1.2.79-.284.261-.717.908-.717.908z"
        style={{
          opacity: 1,
          fill: "#face68",
          fillOpacity: 1,
          stroke: "#dea41d",
          strokeWidth: 0.15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "markers fill stroke",
        }}
        transform="rotate(-44.808 8.468 56.281)"
      />
      <path
        d="M37.897 34.422s-2.218-1.982-2.827-4.65"
        style={{
          fill: "#face68",
          fillOpacity: 1,
          stroke: "#dea41d",
          strokeWidth: 0.158452,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "markers fill stroke",
        }}
        transform="rotate(-44.808 8.468 56.281)"
      />
      <path
        d="M39.259 33.801s-1.58-2.27-2.015-5.327"
        style={{
          fill: "#face68",
          fillOpacity: 1,
          stroke: "#dea41d",
          strokeWidth: 0.143171,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "markers fill stroke",
        }}
        transform="rotate(-44.808 8.468 56.281)"
      />
      <path
        d="M36.73 35.807s-1.173-1.017-1.625-1.64c-.388-.532-.637-1.155-.908-1.756-.283-.63-.579-1.262-.746-1.932-.225-.897-.317-1.828-.337-2.752-.022-.999.123-1.994.234-2.987a64.41 64.41 0 0 1 .322-2.225s1.249.833 1.845 1.288c.908.694 1.878 1.34 2.635 2.196.645.73 1.139 1.59 1.58 2.46.527 1.035.94 2.132 1.26 3.25.144.506.293 1.551.293 1.551s-.99.165-1.464.322c-.407.135-.796.321-1.172.527-.42.231-.847.467-1.2.79-.284.261-.717.908-.717.908z"
        style={{
          opacity: 1,
          fill: "#face68",
          fillOpacity: 1,
          stroke: "#dea41d",
          strokeWidth: 0.15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "markers fill stroke",
        }}
        transform="rotate(-89.655 22.045 41.321)"
      />
      <path
        d="M37.897 34.422s-2.218-1.982-2.827-4.65"
        style={{
          fill: "#face68",
          fillOpacity: 1,
          stroke: "#dea41d",
          strokeWidth: 0.158452,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "markers fill stroke",
        }}
        transform="rotate(-89.655 22.045 41.321)"
      />
      <path
        d="M39.259 33.801s-1.58-2.27-2.015-5.327"
        style={{
          fill: "#face68",
          fillOpacity: 1,
          stroke: "#dea41d",
          strokeWidth: 0.143171,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "markers fill stroke",
        }}
        transform="rotate(-89.655 22.045 41.321)"
      />
      <path
        d="M36.73 35.807s-1.173-1.017-1.625-1.64c-.388-.532-.637-1.155-.908-1.756-.283-.63-.579-1.262-.746-1.932-.225-.897-.317-1.828-.337-2.752-.022-.999.123-1.994.234-2.987a64.41 64.41 0 0 1 .322-2.225s1.249.833 1.845 1.288c.908.694 1.878 1.34 2.635 2.196.645.73 1.139 1.59 1.58 2.46.527 1.035.94 2.132 1.26 3.25.144.506.293 1.551.293 1.551s-.99.165-1.464.322c-.407.135-.796.321-1.172.527-.42.231-.847.467-1.2.79-.284.261-.717.908-.717.908z"
        style={{
          opacity: 1,
          fill: "#face68",
          fillOpacity: 1,
          stroke: "#dea41d",
          strokeWidth: 0.15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "markers fill stroke",
        }}
        transform="rotate(-133.714 27.488 35.265)"
      />
      <path
        d="M37.897 34.422s-2.218-1.982-2.827-4.65"
        style={{
          fill: "#face68",
          fillOpacity: 1,
          stroke: "#dea41d",
          strokeWidth: 0.158452,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "markers fill stroke",
        }}
        transform="rotate(-133.714 27.488 35.265)"
      />
      <path
        d="M39.259 33.801s-1.58-2.27-2.015-5.327"
        style={{
          fill: "#face68",
          fillOpacity: 1,
          stroke: "#dea41d",
          strokeWidth: 0.143171,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "markers fill stroke",
        }}
        transform="rotate(-133.714 27.488 35.265)"
      />
      <path
        d="M36.73 35.807s-1.173-1.017-1.625-1.64c-.388-.532-.637-1.155-.908-1.756-.283-.63-.579-1.262-.746-1.932-.225-.897-.317-1.828-.337-2.752-.022-.999.123-1.994.234-2.987a64.41 64.41 0 0 1 .322-2.225s1.249.833 1.845 1.288c.908.694 1.878 1.34 2.635 2.196.645.73 1.139 1.59 1.58 2.46.527 1.035.94 2.132 1.26 3.25.144.506.293 1.551.293 1.551s-.99.165-1.464.322c-.407.135-.796.321-1.172.527-.42.231-.847.467-1.2.79-.284.261-.717.908-.717.908z"
        style={{
          opacity: 1,
          fill: "#face68",
          fillOpacity: 1,
          stroke: "#dea41d",
          strokeWidth: 0.15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "markers fill stroke",
        }}
        transform="rotate(178.488 31.481 30.646)"
      />
      <path
        d="M37.897 34.422s-2.218-1.982-2.827-4.65"
        style={{
          fill: "#face68",
          fillOpacity: 1,
          stroke: "#dea41d",
          strokeWidth: 0.158452,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "markers fill stroke",
        }}
        transform="rotate(178.488 31.481 30.646)"
      />
      <path
        d="M39.259 33.801s-1.58-2.27-2.015-5.327"
        style={{
          fill: "#face68",
          fillOpacity: 1,
          stroke: "#dea41d",
          strokeWidth: 0.143171,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "markers fill stroke",
        }}
        transform="rotate(178.488 31.481 30.646)"
      />
    </g>
    <g
      style={{
        display: "inline",
      }}
      transform="matrix(1.0174 0 0 1.01672 -21.645 -19.839)"
    >
      <ellipse
        cx={41.771}
        cy={40.372}
        rx={6.854}
        ry={6.943}
        style={{
          opacity: 1,
          fill: "#b87c4c",
          fillOpacity: 1,
          stroke: "#614126",
          strokeWidth: 0.122263,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeOpacity: 1,
          paintOrder: "markers fill stroke",
        }}
      />
      <path
        d="M38.383 36.603c.21.15-.098.356-.248.348-.408-.021-.555-.514-.449-.845.19-.593.912-.78 1.443-.549.778.339 1.008 1.315.648 2.04-.48.965-1.72 1.24-2.636.748-1.153-.619-1.474-2.125-.849-3.233.757-1.342 2.532-1.707 3.83-.949 1.53.894 1.942 2.938 1.05 4.427-1.031 1.72-3.345 2.176-5.025 1.15-1.909-1.168-2.41-3.751-1.249-5.622 1.303-2.098 4.157-2.645 6.218-1.349 2.288 1.44 2.88 4.564 1.45 6.815-.179.28-.384.542-.612.783"
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#916039",
          strokeWidth: 0.264583,
          strokeOpacity: 1,
        }}
        transform="matrix(1.19844 0 0 1.29467 -4.7 -6.727)"
      />
    </g>
  </svg>
  )}

export default Girasol;