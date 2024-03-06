import 'bootstrap/dist/css/bootstrap.min.css';


const appName = <span className="text-warning">Noted</span>;
const welcome = "Welcome";

const Title = () => {
    return (
        <header className="d-flex flex-column align-items-center justify-content-center mb-5">
            <h1 className="font-weight-bold text-white">{welcome} to {appName}!</h1>
            
        <p className="text-gray-500">Don't let your ideas become just an idea, write it down and make it happen.</p>
        </header>
    );
}

export default Title;