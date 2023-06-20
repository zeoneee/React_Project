import errimg from './assets/404.png'
import './Error.css'

function Error() {
    return (
        <div>
            <img src={errimg} alt="404" className="error"/>
            <div className="copyright">&copy; freepick</div>
        </div>
    );
}

export default Error;