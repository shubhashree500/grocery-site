'use client'; // This marks the file as a client-side component

import { useEffect, useState } from 'react';
import Image from 'next/image';

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Simulate fetching user data (e.g., from an API or localStorage)
        const fetchedUser = {
            name: 'John Doe',
            email: 'johndoe@example.com',
            avatar: '/path-to-avatar.jpg', 
        };
        setUser(fetchedUser);
    }, []);

    if (!user) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Profile</h1>
            <div className="flex items-center space-x-6 mb-6">
                <Image
                    src={user.avatar}
                    alt="Avatar"
                    width={128} 
                    height={128}
                    className="rounded-full object-cover"
                />
                <div>
                    <h2 className="text-2xl font-semibold">{user.name}</h2>
                    <p className="text-lg text-gray-600">{user.email}</p>
                </div>
            </div>
            <div className="mt-8">
                <button
                    onClick={() => alert('Edit Profile Clicked')}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Edit Profile
                </button>
            </div>
        </div>
    );
};

export default Profile;
