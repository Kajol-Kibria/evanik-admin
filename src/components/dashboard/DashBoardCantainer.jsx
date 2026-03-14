
import React from 'react'
import TopDashboard from './TopDashboard'
import VisitPlatform from './VisitPlatform'
import DashboardButtons from './DashboardButtons'
import DashboardBarChart from './DashboardBarChart'
import DashboardMap from './DashboardMap'
import DashboardDonut from './DashboardDonut'
import DashboardTopSelling from './DashboardTopSelling'
import DashboardBottom from './DashboardBottom'
import useProfileStore from '@/app/stores/user-service/profile-store'
import { Card } from '../ui/card'
import { CardContent } from '../ui/card'
import { CardHeader } from '../ui/card'

export default function DashBoardCantainer() {
 
    return (
        <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
            <TopDashboard />
            <VisitPlatform />
            <DashboardButtons />
            <DashboardBarChart />
            {/* <Card className="col-span-4">
            <Card className="col-span-4">
                <CardHeader>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='text-sm text-muted-foreground'>Overview</p>
                            <p className='text-2xl font-semibold'>Sales</p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="h-[400px] w-full">
                    <DashboardBarChart />
                </CardContent>
            </Card> */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 '>
                <DashboardMap />
                <DashboardDonut />
                <DashboardTopSelling />
            </div>
            <DashboardBottom />
        </div>
    )
}
