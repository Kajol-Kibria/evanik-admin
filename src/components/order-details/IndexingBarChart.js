"use client"

import React from "react"
import { Bar, BarChart, CartesianGrid, Label, XAxis, YAxis, ResponsiveContainer } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    {
        name: "Jan",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Feb",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Mar",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Apr",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "May",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Jun",
        total: Math.floor(Math.random() * 5000) + 1000,
    }
]

const chartConfig = {
  Quantity: {
    label: "Quantity",
    color: "#5356f7",
  },
  Value: {
    label: "Value",
    color: "#7678f8",
  },
} 

export function IndexingBarChart() {
    return (
        <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                    <XAxis
                        dataKey="name"
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${value}`}
                    />
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <Bar
                        dataKey="total"
                        fill="#5356f7"
                        radius={[4, 4, 0, 0]}
                        opacity={0.9}
                        barSize={30}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
