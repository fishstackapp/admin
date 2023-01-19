import { FC } from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import { FinanceChartTooltip } from '../finance-chart-tooltip/finance-chart-tooltip.component';

interface FinanceChartProps {
  data: any[],
}



export const FinanceChart: FC<FinanceChartProps> = ({data}) => {
  return (
    <BarChart width={789} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date"/>
      <YAxis />
      <Tooltip content={<FinanceChartTooltip />} />
      <Bar dataKey="sum" fill="#0EA5E9" />
    </BarChart>
  );
};
