import { create } from 'zustand';
import { getProfile } from '@/api/user-services/services/profile-management';

const useProfileStore = create((set) => ({
  data: null,
  loading: false,
  error: null,
  
  fetchMyProfile: async () => {
    set({ loading: true, error: null });
    try {
      const response = await getProfile();
      console.log(response,'response');
      set({ data: response, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useProfileStore;