import { PLANS_SERVICES } from '@/api/plan-services/plans.services';
import useSWR from 'swr';

const fetcher = async (key) => {
    const response = await PLANS_SERVICES.GET();
    return response;
};

export const usePlans = () => {
    const { data, error, isLoading, mutate } = useSWR('plans', fetcher);
    return {
        plans: data,
        error,
        isLoading,
        mutate
    };
};
