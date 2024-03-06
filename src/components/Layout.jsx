import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.scss';
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as NoteSVG } from '../assets/icons/add-note.svg';
import Title from './Title'
import NotePage from './NotePage'

const Layout = () => {
  return (
    <div className="main bg-dark d-flex flex-column align-items-center justify-content-center">
      <Title className="" />
            <Link to="/notes">
                <div className="bg-gray-800 border-gray-600 wpx-230 hpx-150 rounded-3 d-flex align-items-center justify-content-center cursor-pointer hover">
                    <NoteSVG className="transform-scale fill-gray hover-fill" />
                </div>
            </Link>

      <Outlet />
    </div>
  )
};

export default Layout;