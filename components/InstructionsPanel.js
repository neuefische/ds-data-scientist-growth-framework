// @flow

import React from "react";

class InstructionsPanel extends React.Component<Props> {
  render() {
    return (
      <div style={{ marginBottom: `80px` }}>
        <h3>How to use the framework</h3>
        <p style={{lineHeight: `1.2`}}>
          Data Science is a multi faceted discipline. Some of the required skills are not obvious and most often not mentioned on job descriptions.
          Some of the skills will also be flavoured depending on the discipline the company hiring is focusing on.
          </p>
          <p>
          For each aspiring data scientist it is important to understand how to evaluate your skills but also to track your growth during the bootcamp. So do this exercise at the beginning of the bootcamp and again at the end.
          Compare the results! How much did you grow?
        </p>
        <p>
          The framework captures skillsets in 5 verticals. Each vertical
          contains several areas. Each area goes from level 1 to level 4. The
          expectations at each level are cumulative. The examples listed at each
          level demonstrate how comfortable you could be in that skill at that level. Since they are examples, they vary between different focus areas
          and shouldn't be treated as a checklist.
        </p>
      </div>
    );
  }
}
export default InstructionsPanel;
