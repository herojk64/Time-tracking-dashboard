interface Timeframe {
    current: number;
    previous: number;
  }
 export interface Activity {
    title: string;
    timeframes: {
      daily: Timeframe;
      weekly: Timeframe;
      monthly: Timeframe;
    };
  }