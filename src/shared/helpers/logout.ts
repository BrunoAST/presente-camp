import {setItem} from '../local-storage/user-local-storage';

export default function Logout(logout: () => void): void {
    setItem({interests: [], email: '', name: '', token: ''});
    logout();
}
