import HeaderWithBackground from '../../components/headerWithBackground'
import { useNavigate } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import { getContentData } from '../../api/main'

import "./styles.css"
import { useContext } from 'react'
import { LanguageContext } from '../../context/languageContext'

const TermsPage = () => {
    const navigate = useNavigate();
    const { language } = useContext(LanguageContext)

    const { data: termsItems, isLoading } = useQuery({
        queryKey: ["loginItems", language],
        queryFn: async () => {
            const response = await getContentData(`/store/terms/?lang=${language}`)
            if (response.status === 200)
                return response.data
        }
    })
      if (isLoading || !termsItems) return null;

    if (isLoading) {

        return (
            <div className='terms-container'>
                <HeaderWithBackground />
                <div className="terms-content">
                    <div className='terms-top-text'>
                        <h1> {termsItems.term_heading} </h1>
                        <button onClick={() => navigate(-1)} className='terms-close-button'> {termsItems.term_close_button}</button>
                    </div>
                    <div className='terms-text-content'>
                        <div dangerouslySetInnerHTML={{ __html: termsItems.terms }} />
                    </div>
                    <div className='terms-bottom-text'>
                        <button onClick={() => navigate(-1)} className='terms-close-button'> {termsItems.term_close_button} </button>
                    </div>
                </div>

            </div>
        )
    }
}

export default TermsPage