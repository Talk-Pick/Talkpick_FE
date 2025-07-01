import { useRef, useEffect } from 'react';
import {
  Chart,
  ArcElement,
  DoughnutController,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
  type Plugin
} from 'chart.js';
import type { ArcElement as ChartJsArcElement } from "chart.js";

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<'doughnut'> | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const centerImage: Plugin<'doughnut'> = {
      id: 'centerImage',
      beforeDraw: (chart) => {
        const { width, height, ctx } = chart;
        const image = new Image();
        image.src = '/images/logos/black_logo.png'

        image.onload = () => {
          const centerX = width / 2;
          const centerY = height / 2;
    
          // 도넛 내부 반지름 가져오기
          const meta = chart.getDatasetMeta(0);
          const arc = meta.data[0] as ChartJsArcElement;
          const innerRadius = arc.innerRadius;
    
          // 최대 이미지 크기 = 내부 지름의 80%
          const maxSize = innerRadius * 2 * 0.6;
    
          // 비율 유지하며 사이즈 계산
          const { width: imgW, height: imgH } = image;
          const ratio = imgW / imgH;
    
          let drawWidth = maxSize;
          let drawHeight = maxSize;
    
          if (ratio > 1) {
            // 가로가 긴 이미지
            drawHeight = maxSize / ratio;
          } else {
            // 세로가 긴 이미지
            drawWidth = maxSize * ratio;
          }
    
          const drawX = centerX - drawWidth / 2;
          const drawY = centerY - drawHeight / 2;
    
          ctx.drawImage(image, drawX, drawY, drawWidth, drawHeight);
        };
      },
    };

    const data: ChartData<'doughnut'> = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
          ],
          borderColor: 'white',
          borderWidth: 2,
        },
      ],
    };

    const options: ChartOptions<'doughnut'> = {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
    };

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(chartRef.current, {
      type: 'doughnut',
      data,
      options,
      plugins: [centerImage], // ⬅️ 여기서 이미지 플러그인 주입
    });

    return () => {
      chartInstance.current?.destroy();
    };
  }, []);

  return (
    <div className="w-40 h-40 mx-auto">
      <canvas ref={chartRef} className="w-full h-full" />
    </div>
  );
};

export default DoughnutChart;
