import { useQuery } from "@tanstack/react-query";
import { Activity } from "./interface";

const fetchTimeData = async():Promise<Activity[]> => {
   const request = await fetch('/Time-tracking-dashboard/json/data.json');
   if(!request.ok){
    throw new Error("Something went wrong while fetching the data.");
   }
   return request.json();
};

export const useTimeData = (queryKey = 'timeData') =>{
    const { data, error, isLoading } = useQuery<Activity[], Error>({
        queryKey: [queryKey],
        queryFn: fetchTimeData,
    });

    return {
        loading:isLoading,
        error: error? error.message: null,
        data: data || [],
    }

}