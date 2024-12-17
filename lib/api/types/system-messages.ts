export interface SystemMessage {
    id: string;
    type: string;
    message: string;
    priority: number;
    isActive: boolean;
    startDate?: string;
    endDate?: string;
  }
  
  export type SystemMessageType = 'auth' | 'maintenance' | 'announcement' | 'alert';