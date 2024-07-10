import React from 'react'

const Jumbotron = () => {
    return (
        <div className='pt-4 container' style={{
            backgroundImage: "url('https://coreui.io/bootstrap-react/static/react-83088efde08a5dedde9f67a954cb4b5b.jpg')",
            backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '18rem' 
        }}>
            <div className="jumbotron">
                <h1>REACT</h1>
                <h5 className='mb-5'>The four pillars of learning React</h5>
                <div className='row pt-5'>
                    <h4 className='col-6 col-sm-3'>Tags</h4>
                    <h4 className='col-6 col-sm-3'>ClassName</h4>
                    <h4 className='col-6 col-sm-3'>Styles</h4>
                    <h4 className='col-6 col-sm-3'>Propertys</h4>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron