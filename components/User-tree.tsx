'use client'

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Tree = dynamic(() => import("react-d3-tree"), { ssr: false });

// Custom render function for tree nodes
const renderCustomNode = ({ nodeDatum }: { nodeDatum: any }) => (
  <g>
    <image href={nodeDatum.name} x="-25" y="-25" width="50" height="50" />
  </g>
);

const BinaryTree = ({ treeData } : {treeData: any}) => {
  const [dimensions, setDimensions] = useState({ width: 800, height: 500 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth * 0.75,
        height: window.innerHeight * 0.7
      });
    };

    window.addEventListener("resize", updateDimensions);
    updateDimensions();
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="w-full flex justify-center items-center" style={{ height: dimensions.height }}>
      <Tree
        data={treeData}
        orientation="vertical"
        pathFunc="straight"
        separation={{ siblings: 1, nonSiblings: 1.5 }}
        nodeSize={{ x: dimensions.width / 8, y: dimensions.height / 4 }}
        translate={{ x: dimensions.width / 2, y: dimensions.height / 4}}
        renderCustomNodeElement={renderCustomNode}
        zoomable={false}
        draggable={true}
        collapsible={false}
      />
    </div>
  );
};

export default BinaryTree;
