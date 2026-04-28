import { useEffect, useState } from "react";
import { Pedometer } from "expo-sensors";

export default function useStepHistory() {
    const [todaySteps, setTodaySteps] = useState(0);
    const [weekSteps, setWeekSteps] = useState(0)
    const [monthSteps, setMonthSteps] = useState(0)


    useEffect(() => {
        const getHistory = async () => {
            const isAvailable = await Pedometer.isAvailableAsync()

            if (!isAvailable) {
                console.error("pedometer not available")
                return
            }

            const now = new Date()

            // today
            const startOfDate = new Date()
            startOfDate.setHours(0, 0, 0, 0);

            const todayResult = await Pedometer.getStepCountAsync(
                startOfDate,
                now
            )

            setTodaySteps(todayResult.steps)

            // week
            const startOfWeek = new Date()
            startOfWeek.setDate(now.getDate() - 7)

            const weekResult = await Pedometer.getStepCountAsync(
                startOfWeek, now
            )

            setWeekSteps(weekResult.steps)

            //month
            const startOfMonth = new Date()
            startOfMonth.setMonth(now.getDate() - 30)

            const monthResult = await Pedometer.getStepCountAsync(
                startOfMonth, now
            )

            setMonthSteps(monthResult.steps)
        }

        getHistory()


    }, [])
    return { todaySteps, weekSteps, monthSteps }

}