import React, { useState, memo } from 'react';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import './CoffeeMarker.css';

// 将经纬度转换为3D坐标的函数
const sphericalToCartesian = (lat, lon, radius) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  
  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
};

// 使用 memo 优化组件渲染
const CoffeeMarker = memo(({ region, isHovered, onPointerOver, onPointerOut, onClick }) => {
  // 计算标记位置
  const position = sphericalToCartesian(region.lat, region.lon, 1.01);

  // 标记材质
  const markerColor = isHovered ? 0xffaa00 : 0xff0000;
  
  return (
    <group position={position}>
      {/* 标记球体 */}
      <mesh 
        onPointerOver={onPointerOver} 
        onPointerOut={onPointerOut}
        onClick={onClick}
      >
        <sphereGeometry args={[isHovered ? 0.03 : 0.02, 16, 16]} />
        <meshBasicMaterial color={markerColor} />
      </mesh>
    </group>
  );
});

export default CoffeeMarker;