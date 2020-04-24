import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div className="bg-primary  ">
        <div className="row  ">
          <div className=" d-flex justify-content-center m-5">
            <div className="col-lg-6 d-none d-lg-block bg-login-imagine "style={{height:"110%"}}>
              <img src={require("../../assets/funy dog.jpg")} />
            </div>
            <div className="col-lg-6 bg-white">
              <div className="p-5">
                <div className="text-center">
                  <h1>Welcom Back!</h1>
                </div>
                <form>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control rounded-pill"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Email Address .."
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control rounded-pill"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group form-check ">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" for="exampleCheck1">
                      Remember Me
                    </label>
                  </div>
                  <a
                    className="btn btn-primary btn-user btn-block rounded-pill"
                    href="http://localhost:3000/"
                  >
                    Login
                  </a>
                  <hr />
                  <div className="text-center ">
                    <a
                      className=" btn btn-danger btn-user btn-block mb-2 rounded-pill"
                      href="http://localhost:3000/"
                    >
                      <i class="fab fa-google fa-fw"></i>
                      Login with Google
                    </a>

                    <a className=" btn btn-info btn-user btn-block rounded-pill">
                      <i class="fab fa-facebook-f fa-fw"></i>
                      Login with Facebook
                    </a>
                    <hr />
                    <div>
                      <a
                        className="small"
                        href="https://blackrockdigital.github.io/startbootstrap-sb-admin-2/forgot-password.html"
                      >
                        Forgot Password?
                      </a>
                    </div>
                    <a
                      className="small"
                      href="https://blackrockdigital.github.io/startbootstrap-sb-admin-2/register.html"
                    >
                      Create an Account!
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
