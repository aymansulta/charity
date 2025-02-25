import serviceFrame from '../assets/serviceFrame.png'
import PropTypes from 'prop-types'

const Service = ( { selectedService }) => {
    return (
        <div className='relative flex justify-center'>
            <img src={serviceFrame} alt="serviceFrame" className="border-2 border-accent rounded-lg" />
            <h1 className="absolute pt-8 text-2xl w-38 leading-relaxed text-center">{selectedService}</h1>
        </div>
    )
}

Service.propTypes = {
    selectedService: PropTypes.string
}

export default Service