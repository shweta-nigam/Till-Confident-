import { useState, useEffect } from "react";
import { Pedometer } from 'expo-sensors';

export default function usePedometer() {
    const [isPedometerAvailable, setIsPedometerAvailable] = useState<boolean | 'checking'>('checking');
    const [pastStepCount, setPastStepCount] = useState(0);
    const [currentStepCount, setCurrentStepCount] = useState(0);

    useEffect(() => {
        let subscription: Pedometer.Subscription | null = null;

        const subscribe = async () => {
            const available = await Pedometer.isAvailableAsync();
            setIsPedometerAvailable(available)

            if (available) {
                const end = new Date();
                const start = new Date();
                start.setDate(end.getDate() - 1)

                const result = await Pedometer.getStepCountAsync(start, end);
                setPastStepCount(result.steps)

                subscription = Pedometer.watchStepCount((res) => {
                    setCurrentStepCount(res.steps)
                })
            }
        }

        subscribe();

        return () => subscription?.remove()
    }, []);

    return { isPedometerAvailable, pastStepCount, currentStepCount }

}


//isAvailable --> checks whether device can actually count steps
// subscribe --> a connection to get the updated data