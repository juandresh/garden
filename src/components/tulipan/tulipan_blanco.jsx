import * as React from "react"
import { useState } from "react";
import "./tulipan.css";

const TulipanBlanco = (props) => {
  const [corazon, setCorazon] = useState(false);

  return (

  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    // width="10mm"
    // height="33mm"
    viewBox="0 0 10 33"
    onClick={() => setCorazon(!corazon)}
    style={{ cursor: "pointer" }}
    {...props}
    className="tupAma"
  >
    <path
      d="m20.934 57.708-.44-5.212s1.017-7.602 2.665-8.256c1.729-.686.83-.065.482.621l-.671 1.322-.943 3.016-.972 4.484s-.02.165-.186.952c-.166.787.065 3.073.065 3.073zM19.443 50.674c-.01-.062-.169-3.616-.169-3.616s-1.991-2.598-3.727-8.82c-.419-1.501-.43.19-.24 1.71.113.908.418 1.796.418 1.796s.876 2.671 1.813 4.399c.937 1.727 1.905 4.531 1.905 4.531z"
      style={{
        fill: "#a1bc98",
        fillOpacity: 1,
        stroke: "#5f8053",
        strokeWidth: 0.1,
        strokeLinecap: "round",
        strokeDasharray: "none",
        strokeOpacity: 1,
        paintOrder: "markers fill stroke",
      }}
      transform="translate(-14.684 -25.135)"
    />
    <path
      d="M18.715 35.278c.332 8.447.96 19.765.96 19.765l.059 2.753 1.23-.059-1.23-14.23-.41-8.49z"
      style={{
        fill: "#97a87a",
        fillOpacity: 1,
        stroke: "#65734b",
        strokeWidth: 0.1,
        strokeLinecap: "round",
        strokeDasharray: "none",
        strokeOpacity: 1,
        paintOrder: "markers fill stroke",
      }}
      transform="translate(-14.684 -25.135)"
    />
    <path
      d="M2.267 2.743c-.274.578-.586 1.468-.647 1.812-.103.58-.181 1.226-.225 1.755-.047.559.053 1.21.204 1.748.191.68.715-.215 1.019.427.104.22-.517-.074.477-.193 0 0 1.188.866 1.737.594.492-.243.424-1.02.521-1.562.143-.79.171-1.875.086-2.412a15.05 15.05 0 0 0-.42-1.744c-.079-.236-.397-1.229-.492-1.458-.147-.354-.294-.834-.466-1.077-.215-.303-1 .793-1 .793s-.574.852-.794 1.317z"
      style={{
        display: "inline",
        fill: "#d8bdbd",
        fillOpacity: 1,
        stroke: "#a17575",
        strokeWidth: 0.102269,
        strokeLinecap: "round",
        strokeDasharray: "none",
        strokeOpacity: 1,
        paintOrder: "markers fill stroke",
      }}
    />
    <g
      style={{
        display: "inline",
      }}
    >
      <path
        d="M15.432 26.306s.388.198.569.308c.39.237.74.537 1.066.856.223.218.418.466.603.718.282.385.576.77.768 1.208.181.411.277.859.351 1.302.06.357.067.722.074 1.084.007.385-.032.77-.037 1.156-.009.642.029 1.284.007 1.925-.004.14-.029.417-.029.417s-.295-1.957-.553-2.919c-.14-.52-.402-1-.557-1.515-.146-.49-.19-1.103-.35-1.493-.163-.39-.354-.565-.528-.85-.263-.427-.693-1.255-.742-1.31-.605-.692-.642-.887-.642-.887zM21.599 26.305s-.247.308-.366.426c-.23.229-.528.595-.728.96-.333.605-.374.866-.43 1.149-.134.673-.104.898-.215 1.637-.042.285-.248 1.001-.24 1.29.009.256-.084 1.025-.082 1.281.008.965-.14 1.56-.265 2.142l.935-1.811.231-1.1.223-.802.066-1.488.133-1.058.223-.802.29-.869z"
        style={{
          opacity: 1,
          fill: "#d8bdbd",
          fillOpacity: 1,
          stroke: "#a17575",
          strokeWidth: 0.1,
          strokeLinecap: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "markers fill stroke",
        }}
        transform="translate(-14.52 -24.948)"
      />
      <g className={`cora ${corazon ? "corazon" : ""}`}>
        <path
          d="M18.933 34.785s-1.51-1.436-1.932-2.387c-.26-.586-.534-1.315-.311-1.919.117-.318.45-.55.763-.617.44-.097.975.028 1.309.35.316.305.436 1.285.436 1.285s.123-1.003.436-1.335c.218-.232.566-.342.873-.317.338.027.765.169.903.5.278.667-.19 1.478-.514 2.12-.463.918-1.963 2.32-1.963 2.32z"
          style={{
            display: "inline",
            fill: "#9e3b3b",
            fillOpacity: 1,
            stroke: "#9e3b3b",
            strokeWidth: 0.137893,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "markers fill stroke",
          }}
          transform="translate(-14.52 -24.948)"
        />
      </g>
      <path
        d="m19.294 35.247.661-.066c.698-.07 1.142-.545 1.57-1.071.322-.395.624-1.06.692-1.354l.243-1.054c.098-.426.08-1.012.063-1.35L22.46 29.2c-.027-.495-.24-.937-.355-1.418-.1-.414-.311-1.215-.318-1.247-.012-.056-.073-.311-.144-.29-.079.022-.173.656-.281.942-.067.178-.181.391-.246.57-.09.248-.14.508-.21.761-.193.695-.402 1.384-.575 2.084-.065.26-.125.522-.174.785-.077.409-.121.822-.19 1.232-.046.27-.08.545-.15.81-.083.32-.23.618-.322.935-.083.29-.202.884-.202.884zM15.384 26.257c-.085-.072.085.767.07 1.102-.02.507-.131 1.006-.175 1.511-.047.534-.132 1.07-.093 1.605.045.639.177 1.277.383 1.884.149.44.347.87.61 1.252.212.308.357.5.622.764.19.19.5.473.734.603.307.169.674.19 1.015.269.089.02.283.012.283.012s-.192-1.19-.304-1.782c-.075-.399-.138-.8-.248-1.19-.15-.527-.404-1.019-.56-1.543-.134-.455-.134-.95-.32-1.387-.094-.22-.268-.397-.394-.6-.228-.373-.422-.767-.652-1.14-.19-.306-.6-.9-.6-.9s-.209-.324-.334-.43z"
        style={{
          display: "inline",
          opacity: 1,
          fill: "#fbefef",
          fillOpacity: 1,
          stroke: "#aa8383",
          strokeWidth: 0.1,
          strokeLinecap: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "markers fill stroke",
        }}
        transform="translate(-14.52 -24.948)"
      />
    </g>

    <path
      d="M18.22 28.011c-.274.552-.586 1.403-.648 1.732a18.208 18.208 0 0 0-.225 1.677c-.047.533.053 1.156.204 1.67.192.65.295 1.225.598 1.838.105.211.248.626 1.242.513 0 0 1.04-.959 1.395-1.56.268-.454.424-.975.522-1.493.142-.755.17-1.791.086-2.304a13.845 13.845 0 0 0-.42-1.667c-.08-.226-.398-1.174-.493-1.393-.147-.338-.295-.797-.466-1.029-.215-.29-1.001.758-1.001.758s-.574.814-.795 1.258z"
      style={{
        display: "inline",
        fill: "#fbefef",
        fillOpacity: 1,
        stroke: "#aa8383",
        strokeWidth: 0.1,
        strokeLinecap: "round",
        strokeDasharray: "none",
        strokeOpacity: 1,
        paintOrder: "markers fill stroke",
      }}
      transform="translate(-14.684 -25.135)"
    />
    <path
      d="M19.38 30.444c.17.998-.027 1.79-.089 2.415-.254 2.573-.461 2.58-.461 2.58"
      style={{
        opacity: 1,
        fill: "#d8bdbd",
        fillOpacity: 1,
        stroke: "#aa8383",
        strokeWidth: 0.1,
        strokeLinecap: "round",
        strokeDasharray: "none",
        strokeOpacity: 1,
        paintOrder: "markers fill stroke",
      }}
      transform="translate(-14.684 -25.135)"
    />
  </svg>
)}
export default TulipanBlanco

