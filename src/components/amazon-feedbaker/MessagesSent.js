"use client"

import { Bar, BarChart, CartesianGrid, Label, XAxis, YAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  
  { month: "Jan 04 2025", Quantity: 305, Value: 200 },
 
  { month: "Fbb 04 2025", Quantity: 214, Value: 140 },
  { month: "March 04 2025", Quantity: 214, Value: 140 },
  { month: "April 04 2025", Quantity: 186, Value: 80 },
  { month: "May 04 2025", Quantity: 305, Value: 200 },
 
  { month: "June 04 2025", Quantity: 214, Value: 140 },
  { month: "June 04 2025", Quantity: 214, Value: 240 },
  { month: "June 04 2025", Quantity: 214, Value: 240 },
  { month: "June 04 2025", Quantity: 214, Value: 240 },
  
 
  
 
 
]

const chartConfig = {
  Quantity: {
    label: "Quantity",
    color: "#2563eb",
  },
  Value: {
    label: "Value",
    color: "#60a5fa",
  },
} 

export function MessagesSent() {
  return (
    <div className=" p-8 rounded-xl w-full shd sm:h-[40vh] my-4 sm:my-0">

    <ChartContainer config={chartConfig} className="h-[300px]  w-full">
      <BarChart  accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
      
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar  yAxisId="left" dataKey="Value" fill="var(--color-Value)" radius={4} />
        <Bar  yAxisId="right" dataKey="Quantity" fill="var(--color-Quantity)" radius={4} />
      </BarChart>
    </ChartContainer>
    </div>
  )
}
