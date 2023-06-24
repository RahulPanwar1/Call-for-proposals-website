// import classes from "./layout.module.css";
import MainNavigation from "./mainNavigation";
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
function Layout(props) {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    
    <div>

      <h1 className='text-center text-2xl font-bold'>
        Firebase Google Auth & Context
      </h1>
      {user?.displayName ? (
        <button onClick={handleSignOut}>Logout</button>
      ) : (
        <Link to='/signin'>Sign in</Link>
        
      )
      }
   <MainNavigation />
      <main> {props.children}</main>
           
    </div>
  );
}
export default Layout;
