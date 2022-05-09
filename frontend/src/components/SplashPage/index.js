import './splashPage.css'
import background from "../../images/background.jpg";

function SplashPage() {
    return (
        <div className='background' style={{ backgroundImage: `url(${background})` }}>
            <div className='title'>
                <h1 className='h1-say-less'>Say Less</h1>
            </div>
            <div className='quote'>

                <h3>Sometimes less is more, sometimes not</h3>
            </div>
        </div>

    )
}

export default SplashPage;
