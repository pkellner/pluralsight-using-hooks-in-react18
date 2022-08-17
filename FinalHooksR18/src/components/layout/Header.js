export default function Header() {
  return (
    <div className="hero px-4 py-5">
      <div className="container">
        <div className="row flex-lg-row-reverse align-items-center">
          <div className="col-lg-6">
            <div>
              <img src="/images/SVCClogo.png" alt="SVCC Logo" />
            </div>
            <h2>Silicon Valley Code Camp 2019</h2>
          </div>
          <div className="col-lg-6">
            <h6 className="text-uppercase">October 19-20 2019</h6>
            <h6 className="text-uppercase">San Jose, California</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
