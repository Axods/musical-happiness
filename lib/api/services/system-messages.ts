import { createServerSupabaseClient } from '@/lib/supabase/server';
import type { SystemMessage, SystemMessageType } from '../types/system-messages';

export async function getActiveSystemMessages(type?: SystemMessageType): Promise<SystemMessage[]> {
  const supabase = createServerSupabaseClient();
  
  const { data, error } = await supabase
    .rpc('get_active_system_messages', { p_type: type });

  if (error) throw error;
  return data || [];
}