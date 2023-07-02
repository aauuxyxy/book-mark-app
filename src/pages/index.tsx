import { useSession, signIn, signOut } from 'next-auth/react';

const Home = () => {
  const { data: session } = useSession();
  // セッション情報が確認できる.
  console.log(session);

  // セッションによって表示切り替え.
  // ログインしていればここ.
  if (session) {
    return (
      <>
        Singed in as {session.user?.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  // ログインしてなかったらこれ.
  return (
    <>
      Noto signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default Home;
