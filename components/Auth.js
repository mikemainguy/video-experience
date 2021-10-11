import { useUser } from '@auth0/nextjs-auth0';

export default function Auth() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        Welcome {user.name}!{' '}
        <a
          className="block w-full text-center btn-primary"
          href="/api/auth/logout"
        >
          Logout
        </a>
      </div>
    );
  }

  return (
    <a className="block w-full text-center btn-primary" href="/api/auth/login">
      Login
    </a>
  );
}
