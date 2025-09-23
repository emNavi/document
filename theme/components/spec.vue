<script setup lang="ts">
// 这里可以添加你需要的逻辑
</script>

<template>
  <div class="specs-container">
    <h1 class="specs-title">Specifications</h1>
    <div class="specs-grid">
      <div>
        <h2 class="specs-header">CPU:</h2>
        <ul>
          <li>2.25GHz A76 x4 + 1.8GHz A55 x4</li>
          <li>6TOPS Build-in NPU</li>
        </ul>
      </div>
      <div>
        <h2 class="specs-header">GPU&VPU:</h2>
        <ul>
          <li>ARM Mali-G610 MC4 (up to 700MHz clock speed)</li>
          <li>Max Resolution of Decoding up to 8K@60fps</li>
          <li>Max Resolution of Encoding up to 8K@30fps</li>
        </ul>
      </div>
      <div>
        <h2 class="specs-header">Storage:</h2>
        <ul>
          <li>Basic: 8GB 64-bit 2112MHz LPDDR4X + 32GB eMMC 5.1</li>
          <li>Pro: 16GB 64-bit 2112MHz LPDDR4X + 64GB eMMC 5.1</li>
        </ul>
      </div>
      <div>
        <h2 class="specs-header">Interface:</h2>
        <ul>
          <li>Ampak AP6275P Wi-Fi6, MAX to 800Mbits/sec</li>
          <li>HDMI2.1, Max Resolution up to 8K@60fps</li>
          <li>Full-featured type-C port</li>
          <li>MIPI-CSI x3, up to 48MP</li>
          <li>MIPI-DSI x2, up to 4K@60Hz</li>
        </ul>
      </div>
      <div>
        <h2 class="specs-header">Khadas Only:</h2>
        <ul>
          <li>Khadas TST</li>
          <li>Khadas KBI</li>
          <li>OOWOW</li>
          <li>Fenix</li>
        </ul>
      </div>
    </div>
    <div class="specs-btn-wrap">
      <button class="specs-btn">Full Specs</button>
    </div>
  </div>
</template>

<style scoped>
.specs-container {
  background: #000;
  color: #fff;
  padding: 40px 20px;
  min-height: 100vh;
  font-family: 'Montserrat', Arial, sans-serif;
}
.specs-title {
  text-align: center;
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 40px;
}
.specs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 32px 48px;
  max-width: 1000px;
  margin: 0 auto 40px auto;
}
.specs-header {
  color: #00baff;
  font-size: 1.3rem;
  margin-bottom: 10px;
  font-weight: bold;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  margin-bottom: 6px;
  font-size: 1rem;
}
.specs-btn-wrap {
  text-align: center;
}
.specs-btn {
  background: #00baff;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 10px 32px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}
.specs-btn:hover {
  background: #009fd9;
}
</style>
