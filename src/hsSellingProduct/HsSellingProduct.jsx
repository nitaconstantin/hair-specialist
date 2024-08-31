import "./hsSellingProduct.scss";
function HsSellingProduct() {
  return (
    <div className="hsSellingProduct-wrapper">
      <div className="hsSellingProduct-container container-fluid">
        <div className="hsSellingProduct-row row">
          <div className="col-12 px-0 text-center">
            <div className="hsSellingProduct-item">
              <div className="hsSellingProduct-img item1"></div>
              <div className="hsSellingProduct-info">
                <a href="#ProductInfo">View Product</a>
                <h2>Hair Straighter</h2>
              </div>
            </div>
          </div>
          <div className="col-12 px-0 text-center">
            <div className="hsSellingProduct-item">
              <div className="hsSellingProduct-img item2"></div>
              <div className="hsSellingProduct-info">
                <a href="#ProductInfo">View Product</a>
                <h2>Hair Color</h2>
              </div>
            </div>
          </div>
          <div className="col-12 px-0 text-center">
            <div className="hsSellingProduct-item">
              <div className="hsSellingProduct-img item3"></div>
              <div className="hsSellingProduct-info">
                <a href="#ProductInfo">View Product</a>
                <h2>Hair Spray</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HsSellingProduct;
