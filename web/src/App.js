import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Earth from './components/Earth';
import './App.css';

function App() {
  const [selectedRegion, setSelectedRegion] = useState(null);

  return (
    <div className="App">
      <h1 className="app-title">3D 咖啡产地地图</h1>
      <Canvas camera={{ position: [0, 0, 2.5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Stars radius={100} depth={50} count={5000} factor={4} />
          <Earth onRegionSelect={setSelectedRegion} />
        </Suspense>
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
          minDistance={1.5}
          maxDistance={5}
        />
      </Canvas>
      <div className="instructions">
        <p>拖拽旋转地球 | 滚轮缩放 | 点击标记查看产地信息</p>
      </div>
      
      {/* 覆层模态框 */}
      {selectedRegion && (
        <div className="modal-overlay" onClick={() => setSelectedRegion(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedRegion(null)}>×</button>
            <h3>{selectedRegion.name}</h3>
            <p>{selectedRegion.description}</p>
            <div className="region-details">
              <p>{selectedRegion.details}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;