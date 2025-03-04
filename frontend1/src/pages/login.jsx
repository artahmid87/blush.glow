import { useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie'; 
import { useAdminLoginMutation } from '@/redux/api/Api';

export default function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
 
  const [login, { isLoading, isSuccess, isError, error }] = useAdminLoginMutation();


  const handleLogin = async (e) => {
    e.preventDefault();


    try {
      const response = await login({ email, password }).unwrap();
      const { token } = response;
      Cookies.set('token', token);
      router.push('/dashboard');
    } catch (error) {
      console.error('Login failed', error);
    }
  };


  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleLogin} className="bg-white p-8 shadow-lg">
        <h2 className="text-2xl mb-6 text-center">Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <button className="bg-blue-500 text-white p-2 w-full">Login</button>
        <p>
          {isLoading && <span>Loading...</span> }
          {isSuccess && <span className='text-green-500 py-2'>Loging success</span> }
          {isError && <span className='text-red-500 py-2'>Try Again</span> }
        </p>
      </form>
    </div>
  );
}
