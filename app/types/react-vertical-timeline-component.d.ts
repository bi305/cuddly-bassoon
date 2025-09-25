declare module "react-vertical-timeline-component" {
  import * as React from "react";

  export interface VerticalTimelineProps {
    animate?: boolean;
    className?: string;
    layout?: "1-column" | "2-columns";
    children?: React.ReactNode;
  }

  export interface VerticalTimelineElementProps {
    className?: string;
    contentStyle?: React.CSSProperties;
    contentArrowStyle?: React.CSSProperties;
    date?: string | React.ReactNode;
    icon?: React.ReactNode;
    iconStyle?: React.CSSProperties;
    position?: "left" | "right";
    visible?: boolean;
    children?: React.ReactNode; // ✅ this was missing
  }

  export const VerticalTimeline: React.FC<VerticalTimelineProps>;
  export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
}
