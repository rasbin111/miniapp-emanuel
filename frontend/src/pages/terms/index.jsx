import HeaderWithBackground from '../../components/headerWithBackground'
import { useNavigate } from 'react-router'

import "./styles.css"

const TermsPage = () => {
    const navigate = useNavigate();

    return (
        <div className='terms-container'>
            <HeaderWithBackground />
            <div className="terms-content">
                <div className='terms-top-text'>

                    <h1> Terms </h1>
                    <button onClick={() => navigate(-1)} className='terms-close-button'> Close and Go Back</button>
                </div>
                <div className='terms-text-content'>
                    <p>
                        BY clicking Invoice Now, you choose to register according to the information that you have typed in and the text on the registration page and the terms here, and you at the same time accept the terms here.
                    </p>

                    <p>
                        You can use the program FOR FREE for 14 days.
                    </p>

                    <p>
                        During the trial period of 14 days, you can use all the features of 123 Fakturera without any limitations. After the trial period, you can choose to continue using the program by paying the annual fee, or you can choose to stop using the program without any costs by giving us notice per email before 14 days from registration that you do not want to continue with the program.
                    </p>
                    <p>

                        123 Fakturera is so easy and self-explanatory that the chance that you will need support is minimal, but if you should need support, we are here for you, with our office manned for the most part of the day. After the trial period, the subscription continues and costs SEK 99 excluding VAT per month, which is billed annually. If you do not want to keep the program, just cancel the trial period by giving notice before 14 days from registration.
                    </p>

                    <p>

                        You have of course the right to terminate the use of the program without any costs, by giving us notice per email before 14 days from registration, that you do not want to continue with the program, and you then of course do not pay anything.
                    </p>

                    <p>
                        If we do not receive such a notice from you before 14 days from registration, then the order, for natural reasons, cannot be changed. With registration it is meant the date and time when you did choose to press the button Invoice Now.

                    </p>

                    <p>
                        Billing is for one year at a time.

                    </p>


                    <p>

                        (When using the offer price of SEK 99, the one-year period is calculated from registration.)
                    </p>

                    <p>

                        All prices are excluding. VAT.
                    </p>

                    <p>
                        Offer, Inventory Control, Member Invoicing, Multiuser version and English printout are (or can be) additional modules that can be ordered later.
                    </p>

                    <p>

                        Intermediation, as well as invoicing, may take place from K-Soft Sverige AB, Box 2826, 187 28 Täby. In the future, we may choose to cooperate with another company for e.g. intermediation and invoicing. However, the customer relationship is with us. The payment is made to the company from which the invoice comes.
                    </p>

                    <p>
                        The annual fee is on a continuous basis, but if you do not wish to continue using the program, all you have to do is give notice thirty days before the start of the next one-year period.
                    </p>


                    <p>

                        The introductory offer ( SEK 99 per month) is for the annual fee Start for the first year. After the first year, the ordinary price is billed, which is currently, for annual fee Start, one hundred and fifty-nine kroner per month, for annual fee Remote control, three hundred kroner per month and for annual fee Pro, three hundred and thirty-three kroner per month. After one year, the annual Remote Control fee is invoiced as standard, but you can choose Start or Pro by giving notice at any time before the due date.
                    </p>
                    <p>

                        The invoice is sent by email. If you want a paper invoice sent by post, there is an additional cost of SEK 50 including VAT per invoice.
                    </p>

                    <p>
                        You can of course cancel at any time. The cancellation takes effect at the end of the current paid period. No refunds are made for the remaining time of the paid period.
                    </p>

                    <p>
                        We reserve the right to change prices and terms with three months' notice. Changes are notified by email to the email address you provided when registering.
                    </p>

                    <p>
                        We reserve the right to refuse an order without giving any reason.
                    </p>

                    <p>
                        We reserve the right to change or stop the program without giving any reason. However, we will of course notify you in advance by email if we choose to stop the program.
                    </p>

                    <p>
                        We reserve all rights to the program, website, source code and the like.
                    </p>

                    <p>
                        We are not responsible for any damages, direct or indirect, which may occur due to the use of the program, website and the like. The use is at your own risk.
                    </p>
                    <p>

                        We are not responsible for any damages, direct or indirect, which may occur due to the use of the program, website and the like. The use is at your own risk.
                    </p>

                    <p>
                        We are not responsible for any damages, direct or indirect, which may occur due to the use of the program, website and the like. The use is at your own risk.
                    </p>
                    <p>
                        By registering, you accept that we store your information as stated below.
                    </p>
                    <p>
                        We store your name, address, email address, phone number, company name, organization number, bank account number and information about your use of the program. We use this information to be able to administer your use of the program, to be able to contact you regarding your use of the program, to be able to send you invoices and reminders, to be able to send you information about changes to the program, to be able to send you marketing information about our products and services, and to be able to improve the program.
                    </p>
                    <p>
                        We do not sell, rent or otherwise disclose your information to third parties, except as required by law or as necessary to administer your use of the program (e.g. to send invoices).
                    </p>
                    <p>
                        We take appropriate technical and organizational measures to protect your information from unauthorized access, disclosure, alteration or destruction.
                    </p>

                </div>
                <div className='terms-bottom-text'>

                    <button onClick={() => navigate(-1)} className='terms-close-button'> Close and Go Back </button>
                </div>
            </div>

        </div>
    )
}

export default TermsPage