import create from 'zustand';
import { PLANS_SERVICES } from './services/plansServices'; // Import your service layer

const planStores = create((set) => ({
  plans: [],
  setPlans: (plans) => set({ plans }),

}));

export default planStores;
