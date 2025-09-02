import React, { useRef, useState, memo } from 'react';
import * as THREE from 'three';
import CoffeeMarker from './CoffeeMarker';
import coffeeData from '../data/coffeeData';
import './Earth.css';

// 使用 memo 优化组件渲染
const Earth = memo(({ onRegionSelect }) => {
  const earthRef = useRef();
  const [hoveredRegion, setHoveredRegion] = useState(null);

  // 创建地球几何体
  const earthGeometry = new THREE.SphereGeometry(1, 64, 64);
  
  // 创建地球材质
  const earthMaterial = new THREE.MeshPhongMaterial({
    color: 0x223366,
    specular: 0x333333,
    shininess: 5
  });

  return (
    <group ref={earthRef}>
      {/* 地球主体 */}
      <mesh geometry={earthGeometry} material={earthMaterial} />
      
      {/* 咖啡产地标记 */}
      {coffeeData.map((region, index) => (
        <CoffeeMarker 
          key={index}
          region={region}
          isHovered={hoveredRegion === region.name}
          onPointerOver={() => setHoveredRegion(region.name)}
          onPointerOut={() => setHoveredRegion(null)}
          onClick={() => onRegionSelect(region)}
        />
      ))}
    </group>
  );
});

export default Earth;