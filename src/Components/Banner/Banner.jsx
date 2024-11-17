import heroImg from "../../assets/istockphoto-1349328691-2048x2048.jpg"
const Banner = () => {
    return (
        <div>
            <div className="hero my-14">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={heroImg}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Dentals Valley</h1>
                        <p className="py-6">
                           Here you found your all dental solutions.We have the <br /> best dentist in the city
                           .We are well known for years.
                        </p>
                        <button className="btn btn-primary">Book now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;