import '../css/home.css'

function Home() {

    return (
        <>
            <div className="container-fluid" style={{
                backgroundColor: '#212529',
                height: '800px'
            }}>
                <div className="row">
                    <div className="col-md-2 pt-5 mt-5 ">

                    </div>
                    <div className="col-md-5 pt-5 mt-5 ">
                        <h2 style={{ color: 'white' }}>Hi, I'm Shivam Singh.</h2>
                    </div>
                    <div className="col-md-5 pt-5 mt-5" >
                        <img src={`${process.env.PUBLIC_URL}/img/myImg.jpg`} alt="Avatar" />
                    </div>
                </div>
            </div>


        </>

    )
}
export default Home;