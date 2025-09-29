import React, { useState, useEffect, FC } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  userId: number;
  onUserLoad?: (user: User) => void;
}

const UserProfile: FC<Props> = ({ userId, onUserLoad }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async (): Promise<void> => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/users/${userId}`);

        if (!response.ok) {
          throw new Error(`Failed to fetch user: ${response.statusText}`);
        }

        const userData: User = await response.json();
        setUser(userData);

        if (onUserLoad) {
          onUserLoad(userData);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    if (userId > 0) {
      fetchUser();
    }
  }, [userId, onUserLoad]);

  if (loading) {
    return <div aria-label="Loading user profile">Loading...</div>;
  }

  if (error) {
    return (
      <div role="alert" className="error">
        Error: {error}
      </div>
    );
  }

  if (!user) {
    return <div>No user found</div>;
  }

  return (
    <div className="user-profile">
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>User ID: {user.id}</p>
    </div>
  );
};

export default UserProfile;