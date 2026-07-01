// import RegCard from "../components/RegCard"
// import RegDetailsPage from "../components/RegDetailsPage"
// import RegForm from "../components/RegForm"


const  RegPage = () => {

    return(
        <>
        <main>
            <div class="login-wrapper">

    <div class="logo-box">

        <div class="logo-circle">
            <i class="fa-solid fa-cube"></i>
        </div>

        <h1>APTECH COURSE PORTAL</h1>
        <h2>KUBWA</h2>

        <p>Mastering UI/UX Design</p>

    </div>

    <div class="login-card">

        <form action="payment.html">

            <label>Registration Email</label>

            <div class="input-group">
                <i class="fa-regular fa-user"></i>
                <input
                type="text"
                placeholder="Enter your Email"
                required/>
            </div>

            <div class="password-row">
                <label>Phone Number</label>
                
            </div>

            <div class="input-group">
                <i class="fa-solid fa-lock"></i>
                <input
                type="password"
                placeholder="••••••••"
                required/>
            </div>

            <div class="remember">
                <input type="checkbox"/>
                <span>Remember device</span>
            </div>

            <button class="login-btn">
                Enter →
            </button>

        </form>

        <div class="social">

            <p>SOCIAL SIGN-IN</p>

            <div class="social-buttons">

                <button>
                    <i class="fa-brands fa-google"></i>
                </button>

                <button>
                    <i class="fa-brands fa-microsoft"></i>
                </button>

            </div>

        </div>

    </div>

    <div class="signup">
        New User?
        <a href="#">Request account</a>
    </div>

    <div class="footer-links">
        <a href="#">Support</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
    </div>

</div>



<div class="assistant-card">

    <div class="assistant-avatar">
        👨‍💼
    </div>

    <div>
        <small>LIVEHELP</small>
        <h4>Ask Assistant</h4>
    </div>

</div>
        </main>
        </>

    )
}

export default RegPage;

