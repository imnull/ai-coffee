import React, { useRef, useState, memo, useMemo } from 'react';
import * as THREE from 'three';
import CoffeeMarker from './CoffeeMarker';
import coffeeData from '../data/coffeeData';
import './Earth.css';

// 使用 memo 优化组件渲染
const Earth = memo(({ onRegionSelect }) => {
  const earthRef = useRef();
  const [hoveredRegion, setHoveredRegion] = useState(null);

  // 创建地球几何体
  const earthGeometry = useMemo(() => new THREE.SphereGeometry(1, 64, 64), []);
  
  // 创建地球材质并应用纹理
  const earthMaterial = useMemo(() => {
    // 创建一个更明亮的地球材质
    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,        // 白色基础色
      specular: 0x111111,     // 进一步减少镜面反射
      shininess: 3,           // 降低光泽度
      emissive: 0x333333,     // 增加自发光效果
      emissiveIntensity: 0.3, // 增加自发光强度
      reflectivity: 0.1       // 减少反射率
    });
    
    // 加载纹理
    const texture = new THREE.TextureLoader().load('/textures/earth_bright.png');
    material.map = texture;
    
    return material;
  }, []);

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