import { PROJECT_NAME } from 'constants/main'
import { Helmet } from 'react-helmet'

const Head = ({ title }) => {
    return (
        <Helmet>
            <title>{title || PROJECT_NAME}</title>
            <meta name="description" content={''} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700;900&display=swap"
                rel="stylesheet"
            />
        </Helmet>
    )
}

export default Head