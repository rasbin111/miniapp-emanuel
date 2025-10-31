import { useState } from "react";
import "./styles.css";
import { BiShow } from "react-icons/bi";
import { loginPost } from "../../api/main";
import { useNavigate } from "react-router";
import HeaderWithBackground from "../../components/headerWithBackground";
const LoginPage = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);

    const [passwordEmptError, setPasswordEmptError] = useState(false)
    const [emailEmptError, setEmailEmtError] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        const response = await loginPost("/users/login/", { "email": email, "password": password })
        console.log(response)
        if (response.status === 200) {
            localStorage.setItem("access", response.data.access)
            localStorage.setItem("refresh", response.data.refresh)
            navigate('/', { replace: true })
        }
    }

    return (
        <div className="login-container">
            <HeaderWithBackground />
            <div className="login-form-box">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2>Log in</h2>
                    <section className="login-section">
                        <div className="login-email">
                            <label htmlFor="" className="login-email-label">Enter your email address</label>
                            <input type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" />
                        </div>
                        {emailEmptError && <span className="email-error-span error-span">Please enter a valid email address</span>}
                        <div className="login-password">
                            <label htmlFor="" className="login-password-label">Enter your password</label>
                            <div className="password-input-div">
                                <input type={showPassword ? "text" : "password"} id="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                <BiShow onClick={() => setShowPassword(prev => !prev)} />
                            </div>
                        </div>
                        {passwordEmptError && <span className="password-error-span error-span">This field cannot be empty</span>}
                    </section>
                    <div className="login-button-div">
                        <button className="login-button" type="submit">Log in</button>
                    </div>
                    <section className="other-links">
                        <a href="#" >Register</a>
                        <a href="#">Forgotten password?</a>
                    </section>
                </form>
            </div>
            <footer className="footer-div">
                <div className="footer-text-section" >
                    <div className="footer-main-text">123 Fakturera </div>
                    <div className="footer-menu">
                        <a href="/home">Home</a>
                        <a href="/order">Order</a>
                        <a href="/contact-us">Contact us</a>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p className="copyright-text">© Lättfaktura, CRO no. 638537, 2025. All rights reserved. </p>
                </div>
            </footer>
        </div >

    )
}

export default LoginPage