import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth-provider/AuthProvider";
const Login = () => {
    const { SignIn } = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        SignIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                const errorMessage = error.message;
                console.error(errorMessage);
            })
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row w-full">
                <div className="md:w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="p-5 card flex-shrink-0 w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <h3 className="text-center text-3xl font-bold">Login</h3>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-center">Do not have account? Please <Link to="/signup" className="text-orange-800">Sign Up.</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;