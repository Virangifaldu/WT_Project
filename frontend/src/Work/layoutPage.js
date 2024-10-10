import { Link , Outlet,useLocation} from 'react-router-dom';
import '../index.css';
import Slider from './slider';

function Layoutpage(){
    const location = useLocation();
    return(
        <>
            <nav class="navchange navbar navbar-expand-lg navbar-light bg-light">
                <div class='myicon'>
                <a class="navbar-brand "  href="#" >
                    <img src="https://th.bing.com/th/id/OIP.UQZNXW3NC89HeDFAohr4zwHaHZ?w=208&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                </a>
                </div>
                
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link to="/home" class="nav-link" >HOME <span class="sr-only"></span></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/getAll" class="nav-link" >MY PRODUCT</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/insert" class="nav-link" >INSERT PRODUCT </Link>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            {location.pathname!=='/home' && location.pathname!=='/getAll' && location.pathname!=='/insert'&& !location.pathname.startsWith('/getAll/update/')&& !location.pathname.startsWith('/getAll/')&&<Slider/>}
            <Outlet/>


        </>
    )
}
export default Layoutpage;
