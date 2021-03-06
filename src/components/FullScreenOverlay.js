import React from "react";
import { useDrag } from "react-use-gesture";

import Icon, { close } from "./Icon";

const defaultStyles = {
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  backgroundColor: "black",
  zIndex: "1",
  visibility: "hidden"
};

export default function FullScreenOverlayContainer({
  children,
  show,
  className,
  onClose
}) {
  const bind = useDrag(({ event }) => {
    /* 
      We capture drag events in the overlay to stop any leakage of these events to parent layers.
      This is needed if a draggable component is nested in the overlay, but its drag binding does not
      extend to the edges of the overlay. This will almost always be true (due to other nav, etc)
    */
    event.stopPropagation();
  });

  let styles = defaultStyles;

  if (show) {
    styles = { ...defaultStyles, visibility: "visible" };
  } else {
    styles = { ...defaultStyles, visibility: "hidden" };
  }

  return (
    <div {...bind()} style={{ ...styles }} className={className}>
      <Icon
        className="close-overlay"
        icon={close}
        onClick={onClose}
        style={{ color: "white" }}
      />
      {children}
    </div>
  );
}
