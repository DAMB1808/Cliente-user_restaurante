import { useMenuStore } from '../../features/users/store/menuStore.js';
import { useEventStore } from '../../features/users/store/eventStore.js';
import { useReservationStore } from '../../features/users/store/reservationStore.js';

export function resetAppStores() {
  if (useMenuStore?.setState) {
    useMenuStore.setState({ menuItems: [], loading: false, error: null });
  }
  if (useEventStore?.setState) {
    useEventStore.setState({ events: [], loading: false, error: null });
  }
  if (useReservationStore?.setState) {
    useReservationStore.setState({ reservations: [], loading: false, error: null });
  }
}
