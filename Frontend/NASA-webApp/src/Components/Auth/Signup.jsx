import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { updateProfile } from 'firebase/auth';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { signup, signInWithGoogle } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        if (password !== confirmPassword) {
            return setError('Passwords do not match');
        }
        if (!username.trim()) {
            return setError('Username is required');
        }

        try {
            setError('');
            setLoading(true);
            const userCredential = await signup(email, password);
            await updateProfile(userCredential.user, { displayName: username });
            navigate('/');
        } catch (error) {
            setError('Failed to create an account: ' + error.message);
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
            setError('Failed to sign up with Google: ' + error.message);
        }
        setLoading(false);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f7f8fa]">
            <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg flex flex-col gap-6">
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-black">Create your account</h2>
                    <p className="text-gray-500 mt-1">Sign up to get started</p>
                </div>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    {error && (
                        <div className="bg-red-100 text-red-700 p-2 rounded text-center text-sm">{error}</div>
                    )}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="username" className="text-sm font-medium text-black text-left">Username</label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            required
                            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black bg-white text-black placeholder-gray-400"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
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
                            autoComplete="new-password"
                            required
                            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black bg-white text-black placeholder-gray-400"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="confirm-password" className="text-sm font-medium text-black text-left">Confirm Password</label>
                        <input
                            id="confirm-password"
                            name="confirm-password"
                            type="password"
                            autoComplete="new-password"
                            required
                            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black bg-white text-black placeholder-gray-400"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-2 w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-900 transition-colors disabled:opacity-50 cursor-pointer"
                    >
                        {loading ? 'Creating account...' : 'Sign up'}
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
                    Already have an account?{' '}
                    <Link to="/login" className="text-black font-semibold hover:underline">Sign in</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup; 