import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import styles from '@/styles/sample.module.css';

/**
 * 페이지 : /sample
 * @constructor
 */
function SamplePage() {

  // Auth0 로그인 상태를 불러옵니다.
  const { user, error, isLoading } = useUser();

  // 페이지 컴포넌트
  return (
    <div className={styles.container}>
      {isLoading && (
        <h1>Loading ...</h1>
      )}
      {error && (
        <div>{error.message}</div>
      )}
      {!!user ? (
        <>
          <h1>Welcome Back!</h1>
          <p>
            email : {user.email} ({user.email_verified})
          </p>
          <Link href="/api/auth/logout">Logout</Link>
        </>
      ):(
        <>
          <h1>Welcome Stranger!</h1>
          <p>
            Please
            <Link href="/api/auth/login">Login</Link>
          </p>
        </>
      )}
    </div>
  );
}
export default SamplePage;
