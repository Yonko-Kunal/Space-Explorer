import { useAuth } from '../../contexts/AuthContext';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const drawerRef = useRef(null);

    const handleLogout = async () => {
        setDrawerOpen(false);
        try {
            await logout();
            navigate('/');
        } catch (error) {
            // Optionally handle error
        }
    };

    // Close drawer when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (drawerRef.current && !drawerRef.current.contains(event.target)) {
                setDrawerOpen(false);
            }
        }
        if (drawerOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [drawerOpen]);

    return (
        <nav className="w-full p-[1rem] md:py-4 md:px-8 bg-transparent flex items-center justify-between">
            {/* Left side: (optional logo/title) */}
            <div />
            {/* Right side: Auth buttons */}
            <div className="flex items-center gap-4 ml-auto relative">
                {currentUser ? (
                    <>
                        <button
                            onClick={() => setDrawerOpen(true)}
                            className="p-2 rounded hover:bg-gray-800/40 transition-colors cursor-pointer"
                            aria-label="Menu"
                        >
                            <FiMenu className="text-2xl text-white" />
                        </button>
                        {/* Side Drawer */}
                        {drawerOpen && (
                            <>
                                {/* Blur Overlay */}
                                <div
                                    className="fixed inset-0 z-40 bg-black/10 backdrop-blur-md transition-opacity"
                                    onClick={() => setDrawerOpen(false)}
                                    style={{ WebkitBackdropFilter: 'blur(12px)', backdropFilter: 'blur(12px)' }}
                                />
                                {/* Drawer */}
                                <div
                                    ref={drawerRef}
                                    className="fixed top-0 left-0 h-full w-[70vw] max-w-[400px] min-w-[220px] bg-[#1a1a1a] z-50 shadow-lg flex flex-col p-6 animate-slideIn justify-between"
                                    style={{ width: '30vw', minWidth: 220, maxWidth: 400 }}
                                >
                                    <div>
                                        <button
                                            onClick={() => setDrawerOpen(false)}
                                            className="self-end mb-6 text-2xl text-gray-700 hover:text-white focus:outline-none"
                                            aria-label="Close menu"
                                        >
                                            <FiX />
                                        </button>
                                        <div className="mb-8">
                                            <span className="text-gray-200 text-base block mb-1">Welcome,</span>
                                            <span className="text-white text-lg font-semibold break-all">{currentUser.displayName || currentUser.email}</span>
                                        </div>
                                        {/* Add more menu items here if needed */}
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-base transition-colors cursor-pointer w-full text-left mt-auto"
                                    >
                                        Logout
                                    </button>
                                </div>
                                {/* Animation style */}
                                <style>{`
                                    @keyframes slideIn {
                                        from { transform: translateX(-100%); }
                                        to { transform: translateX(0); }
                                    }
                                    .animate-slideIn {
                                        animation: slideIn 0.25s ease;
                                    }
                                `}</style>
                            </>
                        )}
                    </>
                ) : (
                    <>
                        <RouterLink
                            to="/login"
                            className="bg-white border border-white hover:bg-transparent hover:text-white hover:border-white text-black px-4 py-2 rounded text-sm transition-colors cursor-pointer"
                        >
                            Login
                        </RouterLink>
                        <RouterLink
                            to="/signup"
                            className="bg-transparent border border-white text-white px-4 py-2 rounded text-sm hover:bg-white hover:text-black transition-colors cursor-pointer"
                        >
                            Sign Up
                        </RouterLink>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar; 