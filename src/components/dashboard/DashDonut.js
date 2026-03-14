"use client"
import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { browser: "chrome", visitors: 975, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 500, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 147, fill: "var(--color-firefox)" },
]
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "#626bcc",
  },
  safari: {
    label: "Safari",
    color: "#8BC5B1",
  },
  firefox: {
    label: "Firefox",
    color: "#F9E4BC",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} 
export function DashDonut() {
  return (
    <div className=" mx-auto ">
      <div className=" pb-0">
        
        <div>January - June 2024</div>
      </div>
      <div className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className=" h-60 w-60 mx-auto "
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={55}
            />
          </PieChart>
        </ChartContainer>
      </div>
      <CardFooter className="flex-col gap-2 text-sm">
       
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </div>
  )
}
