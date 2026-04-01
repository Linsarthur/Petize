import Navbar from "../components/Navbar";
import UserPosts from "../components/UserPosts";
import UserProfile from "../components/UserProfile";

const Profile = () => {
  return (
    <>
      <Navbar />
      <UserProfile />
      <UserPosts />
    </>
  );
};

export default Profile;
