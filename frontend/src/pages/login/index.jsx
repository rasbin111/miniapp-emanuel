import { useContext, useState } from "react";
import "./styles.css";
import { BiShow } from "react-icons/bi";
import { loginPost } from "../../api/main";
import { useNavigate } from "react-router";
import HeaderWithBackground from "../../components/headerWithBackground";
import { getContentData } from "../../api/main";
import { useQuery } from "@tanstack/react-query";
import { LanguageContext } from "../../context/languageContext";
const LoginPage = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);

    const [passwordEmptError, setPasswordEmptError] = useState(false)
    const [emailEmptError, setEmailEmtError] = useState(false)
    const { language } = useContext(LanguageContext)
    const { data: menuItems, isLoading } = useQuery({
        queryKey: ["menuItems", language],
        queryFn: async () => {
            const response = await getContentData(`/store/navigation-contents/?lang=${language}`)
            if (response.status === 200)
                return response.data
        }
    })

    const { data: lfi, isLoading: lfIsLoading } = useQuery({
        queryKey: ["loginItems", language],
        queryFn: async () => {
            const response = await getContentData(`/store/login-contents/?lang=${language}`)
            if (response.status === 200)
                return response.data
        }
    })



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

    if (!isLoading && !lfIsLoading) {

        return (
            <div className="login-container">
                <HeaderWithBackground />
                <div className="login-form-box">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <h2>{lfi.login_header}</h2>
                        <section className="login-section">
                            <div className="login-email">
                                <label htmlFor="" className="login-email-label">{lfi.email_label}</label>
                                <input type="email" id="email" required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onBlur={() => {
                                        if (email.length == 0) {
                                            setEmailEmtError(true)
                                        }
                                    }}
                                    placeholder={lfi.email_placeholder} />
                            </div>
                            {emailEmptError && <span className="email-error-span error-span">{lfi.email_error}</span>}
                            <div className="login-password">
                                <label htmlFor="" className="login-password-label">{lfi.password_label}</label>
                                <div className="password-input-div">
                                    <input type={showPassword ? "text" : "password"} id="password" required value={password} onChange={(e) => setPassword(e.target.value)}
                                        onBlur={() => {
                                            if (email.length == 0) {
                                                setPasswordEmptError(true)
                                            }
                                        }}
                                        placeholder={lfi.password_placeholder} />
                                    <BiShow onClick={() => setShowPassword(prev => !prev)} />
                                </div>
                            </div>
                            {passwordEmptError && <span className="password-error-span error-span">{lfi.password_error}</span>}
                        </section>
                        <div className="login-button-div">
                            <button className="login-button" type="submit">{lfi.login_header}</button>
                        </div>
                        <section className="other-links">
                            <a href="#" >{lfi.register_now}</a>
                            <a href="#">{lfi.forgot_password}</a>
                        </section>
                    </form>
                </div>
                <footer className="footer-div">
                    <div className="footer-text-section" >
                        <div className="footer-main-text">123 Fakturera </div>
                        <div className="footer-menu">
                            <a href="/home">{menuItems.home}</a>
                            <a href="/order">{menuItems.order}</a>
                            <a href="/contact-us">{menuItems.contact_us}</a>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <p className="copyright-text">© Lättfaktura, CRO no. 638537, 2025. All rights reserved. </p>
                    </div>
                </footer>
            </div >

        )
    }
}

export default LoginPage