import { useAuth } from '../../contexts/AuthContext';
import { Link as RouterLink } from 'react-router-dom';

const Navigation = () => {
    const { currentUser, logout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error('Failed to log out:', error);
        }
    };

    return (
        <div className="fixed top-8 right-8 z-[1000] flex items-center gap-4">
            {currentUser ? (
                <div className="flex items-center gap-4">
                    <span className="text-white text-sm hidden md:block">
                        Welcome, {currentUser.email}
                    </span>
                    <button
                        onClick={handleLogout}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm transition-colors"
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <div className="flex items-center gap-2">
                    <RouterLink
                        to="/login"
                        className="bg-[#fff] hover:bg-transparent text-black border-white hover:text-white hover:border px-4 py-2 rounded text-sm transition-colors"
                    >
                        Login
                    </RouterLink>
                    <RouterLink
                        to="/signup"
                        className="bg-transparent border border-white text-white px-4 py-2 rounded text-sm hover:bg-white hover:text-black transition-colors"
                    >
                        Sign Up
                    </RouterLink>
                </div>
            )}
        </div>
    );
};

export default Navigation; 