import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login, signInWithGoogle } = useAuth();
    const navigate = useNavigate();

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(email, password);
            navigate('/');
        } catch (error) {
            setError('Failed to sign in: ' + error.message);
        }
        setLoading(false);
    }

    async function handleGoogleSignIn() {
        try {
            setError('');
            setLoading(true);
            await signInWithGoogle();
            navigate('/');
        } catch (error) {
            setError('Failed to sign in with Google: ' + error.message);
        }
        setLoading(false);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f7f8fa]">
            <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg flex flex-col gap-6">
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-black">Welcome back</h2>
                    <p className="text-gray-500 mt-1">Sign in to your account to continue</p>
                </div>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    {error && (
                        <div className="bg-red-100 text-red-700 p-2 rounded text-center text-sm">{error}</div>
                    )}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-sm font-medium text-black text-left">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black bg-white text-black placeholder-gray-400"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="text-sm font-medium text-black text-left">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black bg-white text-black placeholder-gray-400"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-2 w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-900 transition-colors disabled:opacity-50 cursor-pointer"
                    >
                        {loading ? 'Signing in...' : 'Sign in'}
                    </button>
                </form>
                <div className="flex items-center gap-2 my-2">
                    <div className="flex-1 h-px bg-gray-200" />
                    <span className="text-xs text-gray-400">OR CONTINUE WITH</span>
                    <div className="flex-1 h-px bg-gray-200" />
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={handleGoogleSignIn}
                        disabled={loading}
                        className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 bg-white hover:bg-gray-50 transition-colors text-black font-medium cursor-pointer"
                    >
                        <FcGoogle className="text-xl" /> Google
                    </button>
                </div>
                <div className="text-center text-sm text-gray-500 mt-2">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-black font-semibold hover:underline">Sign up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login; 