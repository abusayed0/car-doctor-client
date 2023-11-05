import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth-provider/AuthProvider";

const SingUp = () => {
    const {createUser} = useContext(AuthContext);
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password );
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(errro => {
            const errorMessage = errro.message;
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
                    <h3 className="text-center text-3xl font-bold">Sign Up</h3>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <p className="text-center">Already have an account? Please <Link to="/login" className="text-orange-800">Login.</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SingUp;