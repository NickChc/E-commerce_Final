import { SProfile } from "@src/views/Profile";
import { useAuthProvider } from "@src/providers/AuthProvider";

export function Profile() {
  const { userData, logOut } = useAuthProvider();

  return (
    <SProfile>
      <h1>{userData?.first_name}</h1>

      <button onClick={() => logOut()}>LOG OUT</button>
    </SProfile>
  );
}
