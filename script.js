// 获取页面元素
const counterElement = document.getElementById('counter');
const countButton = document.getElementById('count-btn');
const bgButton = document.getElementById('bg-btn');

// 初始化计数器
let count = 0;

// 为计数按钮绑定点击事件
countButton.addEventListener('click', () => {
  count++; // 增加计数
  counterElement.textContent = `计数：${count}`; // 更新页面显示
});

// 为背景变换按钮绑定点击事件
bgButton.addEventListener('click', () => {
  const randomColor1 = getRandomColor();
  const randomColor2 = getRandomColor();
  // 设置随机渐变背景色
  document.body.style.background = `linear-gradient(to bottom right, ${randomColor1}, ${randomColor2})`;
});

// 生成随机颜色的函数
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
