// 咖啡产地数据
const coffeeData = [
  // 阿拉比卡咖啡产地
  {
    name: "埃塞俄比亚",
    lat: 9.1450,
    lon: 40.4897,
    type: "阿拉比卡",
    description: "埃塞俄比亚是阿拉比卡咖啡豆的发源地，具有浓郁的浆果和柑橘香气，口感清新明亮。",
    details: "埃塞俄比亚拥有超过2000种本土咖啡品种，是世界上咖啡遗传多样性的宝库。这里采用传统的日晒处理法，使得咖啡豆保留了更多的果香和花香。埃塞俄比亚的咖啡文化深厚，当地人将咖啡仪式视为重要的社交活动。",
    images: [
      "/images/ethiopia1.jpg",
      "/images/ethiopia2.jpg",
      "/images/ethiopia3.jpg"
    ]
  },
  {
    name: "哥伦比亚",
    lat: 4.5709,
    lon: -74.2973,
    type: "阿拉比卡",
    description: "哥伦比亚咖啡口感均衡，带有坚果和巧克力的味道，适合喜欢中等酸度的人。",
    details: "哥伦比亚是世界上最大的阿拉比卡咖啡生产国，其独特的地理条件和气候使得咖啡品质优异。哥伦比亚咖啡通常采用水洗处理法，这种方法能够产生更干净、更明亮的口感。哥伦比亚的咖啡农场多位于安第斯山脉的高海拔地区。",
    images: [
      "/images/colombia1.jpg",
      "/images/colombia2.jpg",
      "/images/colombia3.jpg"
    ]
  },
  {
    name: "巴西",
    lat: -14.2350,
    lon: -51.9253,
    type: "阿拉比卡",
    description: "巴西是世界上最大的咖啡生产国，其咖啡低酸度，带有坚果和焦糖的风味，常用于制作浓缩咖啡。",
    details: "巴西咖啡产量占全球总产量的三分之一以上，主要种植在东南部的米纳斯吉拉斯州。巴西的咖啡处理方式多样，包括日晒、水洗和半水洗法。巴西咖啡以其醇厚的口感和较低的酸度而闻名，是意式浓缩咖啡的重要成分。",
    images: [
      "/images/brazil1.jpg",
      "/images/brazil2.jpg",
      "/images/brazil3.jpg"
    ]
  },
  
  // 罗布斯塔咖啡产地
  {
    name: "乌干达",
    lat: 1.3733,
    lon: 32.2903,
    type: "罗布斯塔",
    description: "乌干达是非洲主要的罗布斯塔咖啡生产国，咖啡口感浓烈，苦味明显，酸度较低。",
    details: "乌干达的罗布斯塔咖啡主要生长在维多利亚湖周边的地区，这里的气候和土壤条件非常适合罗布斯塔咖啡的生长。乌干达的罗布斯塔咖啡以其高咖啡因含量和强烈的苦味而著称，常用于制作速溶咖啡和意式浓缩咖啡的混合品。",
    images: [
      "/images/uganda1.jpg",
      "/images/uganda2.jpg",
      "/images/uganda3.jpg"
    ]
  },
  {
    name: "越南",
    lat: 14.0583,
    lon: 108.2772,
    type: "罗布斯塔",
    description: "越南是世界第二大咖啡生产国，主要生产罗布斯塔咖啡豆，具有木质、泥土和坚果的风味。",
    details: "越南的咖啡种植主要集中在中部高原地区，这里有着适宜的气候和肥沃的火山土壤。越南的罗布斯塔咖啡通常采用特殊的加工方法，如在咖啡果中加入奶油或糖进行调味，制成独特的越南咖啡。",
    images: [
      "/images/vietnam1.jpg",
      "/images/vietnam2.jpg",
      "/images/vietnam3.jpg"
    ]
  },
  
  // 利比里卡咖啡产地
  {
    name: "利比里亚",
    lat: 6.4281,
    lon: -9.4244,
    type: "利比里卡",
    description: "利比里亚是利比里卡咖啡豆的发源地，咖啡口感独特，带有强烈的烟熏和木质风味。",
    details: "利比里卡咖啡豆是世界上第三大咖啡品种，其独特的风味使其在特定市场中备受青睐。这种咖啡豆的形状不规则，大小不一，表面粗糙。利比里卡咖啡具有很强的抗病能力，但产量不稳定。",
    images: [
      "/images/liberia1.jpg",
      "/images/liberia2.jpg",
      "/images/liberia3.jpg"
    ]
  },
  
  // 埃克塞尔萨咖啡产地
  {
    name: "菲律宾",
    lat: 12.8797,
    lon: 121.7740,
    type: "埃克塞尔萨",
    description: "菲律宾是埃克塞尔萨咖啡豆的主要生产国，咖啡风味复杂多变，既有轻盈的酸味，也有深沉的苦味。",
    details: "埃克塞尔萨咖啡豆曾经被认为是一个独立的咖啡品种，但现在被归类为利比里卡的一个变种。这种咖啡豆的风味复杂多变，带有葡萄、樱桃等水果的香气，有时还会有一些草本植物的味道。埃克塞尔萨咖啡豆常用于混合咖啡中，以增加层次感和复杂度。",
    images: [
      "/images/philippines1.jpg",
      "/images/philippines2.jpg",
      "/images/philippines3.jpg"
    ]
  }
];

export default coffeeData;