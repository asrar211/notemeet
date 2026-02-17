import Login from '@/components/Auth/Login';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function LoginUser() {
    const session = await getServerSession();

    if(session){
        redirect('/dashboard');
    }
    
    return <Login/>
};
