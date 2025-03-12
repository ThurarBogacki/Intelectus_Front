"use client";
import { AreaChart, XAxis, YAxis, Tooltip, ResponsiveContainer, Area } from "recharts";
import { useTheme } from "../context/ThemeContext";

const data = [
  { date: "16 jan", value: 0 },
  { date: "17 jan", value: 0 },
  { date: "18 jan", value: 0 },
  { date: "19 jan", value: 0 },
  { date: "20 jan", value: 0 },
  { date: "21 jan", value: 10 }, 
  { date: "22 jan", value: 20 },
  { date: "23 jan", value: 30 },
  { date: "24 jan", value: 20 },
  { date: "25 jan", value: 10 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-[#11CEC5]  text-center p-2 rounded-md shadow-md">
                <p className="text-sm text-[#000000b4]">{label}</p>
                <p className="text-base font-bold text-black">{`R$ ${Number(payload[0].value).toFixed(2).replace(".", ",")}`}</p>
            </div>
        );
    }
        return null;
    };

export default function RevenueChart() {
    const { theme } = useTheme();

    return (
        <div className={`h-full p-5 rounded-lg border border-[#818181] ${theme === 'dark' ? 'text-[#FFFFFF] bg-[#202020]' : 'text-[#000000b4] bg-[#FFFFFF]'}`}>
            <h2 className="text-lg mb-4">GRÁFICO DE FATURAMENTO</h2>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <XAxis dataKey="date" />
                    <YAxis domain={[0, "dataMax + 10"]} axisLine={false} tickLine={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#5BC4FF" 
                        strokeWidth={3} 
                        dot={{
                            fill: theme === 'dark' ? '#FFFFFF' : '#000000', 
                            r: 5 
                        }} 
                        fill="rgba(0, 255, 243, 0.15)" 
                        isAnimationActive={false} 
                        baseValue="dataMin"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
