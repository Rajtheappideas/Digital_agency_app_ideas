import React from "react";

const Products = () => {
  return (
    <div className="container">
      <div className="row mb-4 mt-5 d-flex justify-content-between align-items-center">
        <div className="col-md-8">
          <h5 className="mb-0">Popular items</h5>
        </div>
        <div className="col-md-4">
          {" "}
          <a
            className="btn btn-link float-right"
            data-toggle="collapse"
            href="#multiCollapseExample1"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapseExample1"
          >
            Refine Search <i className="las la-plus" />{" "}
          </a>{" "}
        </div>
      </div>
      <div
        className="collapse multi-collapse refine-search-wrap"
        id="multiCollapseExample1"
      >
        <form className="card">
          <div className="card-body">
            <div className="card border-0">
              <div className="row">
                <div className="col-md-3">
                  <h6>File Types</h6>
                  <div className="custom-control custom-checkbox mb-2">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label w-100"
                      htmlFor="customCheck1"
                    >
                      PSD
                      <span className="badge badge-light float-right">9</span>
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-2">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck2"
                    />
                    <label
                      className="custom-control-label w-100"
                      htmlFor="customCheck2"
                    >
                      HTML{" "}
                      <span className="badge badge-light float-right">49</span>
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-2">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck3"
                    />
                    <label
                      className="custom-control-label w-100"
                      htmlFor="customCheck3"
                    >
                      JS{" "}
                      <span className="badge badge-light float-right">142</span>
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-2">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck4"
                    />
                    <label
                      className="custom-control-label w-100"
                      htmlFor="customCheck4"
                    >
                      CSS{" "}
                      <span className="badge badge-light float-right">457</span>
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-2">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck5"
                    />
                    <label
                      className="custom-control-label w-100"
                      htmlFor="customCheck5"
                    >
                      Vector{" "}
                      <span className="badge badge-light float-right">27</span>
                    </label>
                  </div>
                </div>
                {/*end: col */}
                <div className="col-md-3">
                  <h6>File Category</h6>
                  <div className="custom-control custom-checkbox mb-2">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck10"
                    />
                    <label
                      className="custom-control-label w-100"
                      htmlFor="customCheck10"
                    >
                      HTML template
                      <span className="badge badge-light float-right">875</span>
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-2">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck11"
                    />
                    <label
                      className="custom-control-label w-100"
                      htmlFor="customCheck11"
                    >
                      WordPress Theme{" "}
                      <span className="badge badge-light float-right">
                        1485
                      </span>
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-2">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck12"
                    />
                    <label
                      className="custom-control-label w-100"
                      htmlFor="customCheck12"
                    >
                      eCommerce
                      <span className="badge badge-light float-right">626</span>
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-2">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck13"
                    />
                    <label
                      className="custom-control-label w-100"
                      htmlFor="customCheck13"
                    >
                      Magento{" "}
                      <span className="badge badge-light float-right">58</span>
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-2">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck14"
                    />
                    <label
                      className="custom-control-label w-100"
                      htmlFor="customCheck14"
                    >
                      UI kits{" "}
                      <span className="badge badge-light float-right">114</span>
                    </label>
                  </div>
                </div>
                {/*end: col */}
                <div className="col-md-3">
                  <h6>Tags</h6>
                  <div className="custom-control custom-checkbox mb-2">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck15"
                    />
                    <label
                      className="custom-control-label w-100"
                      htmlFor="customCheck15"
                    >
                      HTML template
                      <span className="badge badge-light float-right">
                        1321
                      </span>
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-2">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck16"
                    />
                    <label
                      className="custom-control-label w-100"
                      htmlFor="customCheck16"
                    >
                      WordPress Theme{" "}
                      <span className="badge badge-light float-right">525</span>
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-2">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck17"
                    />
                    <label
                      className="custom-control-label w-100"
                      htmlFor="customCheck17"
                    >
                      eCommerce
                      <span className="badge badge-light float-right">487</span>
                    </label>
                  </div>
                  <hr />
                  <h6 className="mt-4">Sales</h6>
                  <div className="custom-control custom-checkbox mb-2">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck18"
                    />
                    <label
                      className="custom-control-label w-100"
                      htmlFor="customCheck18"
                    >
                      Magento{" "}
                      <span className="badge badge-light float-right">521</span>
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-2">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck19"
                    />
                    <label
                      className="custom-control-label w-100"
                      htmlFor="customCheck19"
                    >
                      UI kits{" "}
                      <span className="badge badge-light float-right">987</span>
                    </label>
                  </div>
                </div>
                {/*end: col */}
                <div className="col-md-3">
                  <h6>Select Pricing range</h6>
                  <div className="form-row d-flex align-items-center justify-content-center" />
                  <div className="row">
                    <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 padding0">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">$</div>
                        </div>
                        <input
                          type="text"
                          id="price-min-input"
                          name="price-min"
                          data-toggle="dropdown"
                          className="form-control"
                          placeholder="Min"
                          defaultValue=""
                        />
                        <ul id="price-min" className="dropdown-menu">
                          <li>
                            <a href="#" data-value={5} data-toggle="dropdown">
                              Min Price
                            </a>
                          </li>
                          <li>
                            <a href="#" data-value={10} data-toggle="dropdown">
                              10
                            </a>
                          </li>
                          <li>
                            <a href="#" data-value={50} data-toggle="dropdown">
                              50
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1 text-center padding0">
                      <p> - </p>
                    </div>
                    <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 padding0">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">$</div>
                        </div>
                        <input
                          type="text"
                          id="price-max-input"
                          name="price-max"
                          data-toggle="dropdown"
                          className="form-control"
                          placeholder="Max"
                          defaultValue=""
                        />
                        <ul id="price-max" className="dropdown-menu">
                          <li>
                            <a href="#" data-value={500} data-toggle="dropdown">
                              Max Price
                            </a>
                          </li>
                          <li>
                            <a href="#" data-value={50} data-toggle="dropdown">
                              50
                            </a>
                          </li>
                          <li>
                            <a href="#" data-value={100} data-toggle="dropdown">
                              100
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <button type="button" className="btn btn-outline-primary">
                    Refine search
                  </button>
                </div>
                {/* end: col*/}
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="card item-card h-100 border-0">
            <div className="item-card__image rounded">
              <a href="/single-product">
                <img
                  src={require("../../assets/images/520x400.png")}
                  className="img-fluid rounded"
                  alt=""
                />
              </a>
              <div className="hover-icons">
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="/single-product"
                      ta-toggle="tooltip"
                      data-placement="left"
                      title="Demo"
                    >
                      <i className="las la-desktop" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Bookmark"
                    >
                      <i className="lar la-bookmark" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* end: Item card image */}
            <div className="card-body px-0 pt-3">
              <div className="d-flex justify-content-between align-items-start">
                <div className="item-title">
                  <a href="#">
                    <h3 className="h5 mb-0 text-truncate">
                      Mockup Bundle Vol 3
                    </h3>
                  </a>
                </div>
                <div className="item-price">
                  <span>$14</span>
                </div>
              </div>
              {/* end: Card info */}
              <div className="d-flex justify-content-between align-items-center item-meta">
                <div className="short-description mb-0">
                  <p className="mb-0 extension-text">
                    <a href="#">UI Kit</a>
                    <span className="ml-1">in</span> <a href="#">Corporate</a>{" "}
                  </p>
                </div>
              </div>
              {/* end: Card meta */}
            </div>
            {/* edn:Card body */}
          </div>
          {/* end: Card */}
        </div>
        {/* end: col */}
        <div className="col-md-3">
          <div className="card item-card h-100 border-0">
            <div className="item-card__image rounded">
              <a href="/single-product" me="swap-link">
                <img
                  src={require("../../assets/images/520x400.png")}
                  className="img-fluid rounded"
                  alt=""
                />
              </a>
              <div className="hover-icons">
                <ul className="list-unstyled">
                  <li>
                    <a href="/single-product">
                      <i className="las la-desktop" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lar la-bookmark" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* end: Item card image */}
            <div className="card-body px-0 pt-3">
              <div className="d-flex justify-content-between align-items-start">
                <div className="item-title">
                  <a href="#">
                    <h3 className="h5 mb-0 text-truncate">
                      Font Bundle 99% OFF
                    </h3>
                  </a>
                </div>
                <div className="item-price">
                  <span>$14</span>
                </div>
              </div>
              {/* end: Card info */}
              <div className="d-flex justify-content-start align-items-center item-meta">
                <div className="short-description mb-0">
                  <p className="mb-0 extension-text">
                    <a href="#">WordPress</a>
                    <span className="ml-1">in</span> <a href="#">Creative</a>{" "}
                  </p>
                </div>
              </div>
              {/* end: Card meta */}
            </div>
            {/* edn:Card body */}
          </div>
          {/* end: Card */}
        </div>
        {/* end: col */}
        <div className="col-md-3">
          <div className="card item-card h-100 border-0">
            <div className="item-card__image rounded">
              <a href="/single-product" me="swap-link">
                <img
                  src={require("../../assets/images/520x400.png")}
                  className="img-fluid rounded"
                  alt=""
                />
              </a>
              <div className="hover-icons">
                <ul className="list-unstyled">
                  <li>
                    <a href="/single-product">
                      <i className="las la-desktop" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lar la-bookmark" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* end: Item card image */}
            <div className="card-body px-0 pt-3">
              <div className="d-flex justify-content-between align-items-start">
                <div className="item-title">
                  <a href="#">
                    <h3 className="h5 mb-0 text-truncate">Retro Font</h3>
                  </a>
                </div>
                <div className="item-price">
                  <span>$14</span>
                </div>
              </div>
              {/* end: Card info */}
              <div className="d-flex justify-content-start align-items-center item-meta">
                <div className="short-description mb-0">
                  <p className="mb-0 extension-text">
                    <a href="#">HTML</a>
                    <span className="ml-1">in</span>{" "}
                    <a href="#">Landing page</a>{" "}
                  </p>
                </div>
              </div>
              {/* end: Card meta */}
            </div>
            {/* edn:Card body */}
          </div>
          {/* end: Card */}
        </div>
        {/* end: col */}
        <div className="col-md-3">
          <div className="card item-card h-100 border-0">
            <div className="item-card__image rounded">
              <a href="/single-product" me="swap-link">
                <img
                  src={require("../../assets/images/520x400.png")}
                  className="img-fluid rounded"
                  alt=""
                />
              </a>
              <div className="hover-icons">
                <ul className="list-unstyled">
                  <li>
                    <a href="/single-product">
                      <i className="las la-desktop" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lar la-bookmark" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* end: Item card image */}
            <div className="card-body px-0 pt-3">
              <div className="d-flex justify-content-between align-items-start">
                <div className="item-title">
                  <a href="#">
                    <h3 className="h5 mb-0 text-truncate">
                      Entire Store Bundle
                    </h3>
                  </a>
                </div>
                <div className="item-price">
                  <span>$14</span>
                </div>
              </div>
              {/* end: Card info */}
              <div className="d-flex justify-content-start align-items-center item-meta">
                <div className="short-description mb-0">
                  <p className="mb-0 extension-text">
                    <a href="#">PSD</a>
                    <span className="ml-1">in</span>{" "}
                    <a href="#">Landing page</a>{" "}
                  </p>
                </div>
              </div>
              {/* end: Card meta */}
            </div>
            {/* edn:Card body */}
          </div>
          {/* end: Card */}
        </div>
        {/* end: col */}
      </div>
      <hr className="divider divider-fade" />
      <div className="row mb-4 mt-3 d-flex justify-content-between align-items-center">
        <div className="col-md-8">
          <h5 className="mb-0">HTML Templates</h5>
        </div>
        <div className="col-md-4">
          {" "}
          <a href="#" className="btn btn-link float-right">
            Explore all <i className="las la-long-arrow-alt-right" />{" "}
          </a>{" "}
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="card item-card h-100 border-0">
            <div className="item-card__image rounded">
              <a href="/single-product" me="swap-link">
                <img
                  src={require("../../assets/images/520x400.png")}
                  className="img-fluid rounded"
                  alt=""
                />
              </a>
              <div className="hover-icons">
                <ul className="list-unstyled">
                  <li>
                    <a href="/single-product">
                      <i className="las la-desktop" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lar la-bookmark" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* end: Item card image */}
            <div className="card-body px-0 pt-3">
              <div className="d-flex justify-content-between align-items-start">
                <div className="item-title">
                  <a href="#">
                    <h3 className="h5 mb-0 text-truncate">
                      Magazine Mockup Kit
                    </h3>
                  </a>
                </div>
                <div className="item-price">
                  <span>$14</span>
                </div>
              </div>
              {/* end: Card info */}
              <div className="d-flex justify-content-start align-items-center item-meta">
                <div className="short-description mb-0">
                  <p className="mb-0 extension-text">
                    <a href="#">WordPress</a>
                    <span className="ml-1">in</span> <a href="#">Creative</a>{" "}
                  </p>
                </div>
              </div>
              {/* end: Card meta */}
            </div>
            {/* edn:Card body */}
          </div>
          {/* end: Card */}
        </div>
        {/* end: col */}
        <div className="col-md-3">
          <div className="card item-card h-100 border-0">
            <div className="item-card__image rounded">
              <a href="/single-product" me="swap-link">
                <img
                  src={require("../../assets/images/520x400.png")}
                  className="img-fluid rounded"
                  alt=""
                />
              </a>
              <div className="hover-icons">
                <ul className="list-unstyled">
                  <li>
                    <a href="/single-product">
                      <i className="las la-desktop" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lar la-bookmark" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* end: Item card image */}
            <div className="card-body px-0 pt-3">
              <div className="d-flex justify-content-between align-items-start">
                <div className="item-title">
                  <a href="#">
                    <h3 className="h5 mb-0 text-truncate">
                      Resume Template / CV
                    </h3>
                  </a>
                </div>
                <div className="item-price">
                  <span>$14</span>
                </div>
              </div>
              {/* end: Card info */}
              <div className="d-flex justify-content-start align-items-center item-meta">
                <div className="short-description mb-0">
                  <p className="mb-0 extension-text">
                    <a href="#">WordPress</a>
                    <span className="ml-1">in</span> <a href="#">Creative</a>{" "}
                  </p>
                </div>
              </div>
              {/* end: Card meta */}
            </div>
            {/* end:Card body */}
          </div>
          {/* end: Card */}
        </div>
        {/* end: col */}
        <div className="col-md-3">
          <div className="card item-card h-100 border-0">
            <div className="item-card__image rounded">
              <a href="/single-product" me="swap-link">
                <img
                  src={require("../../assets/images/520x400.png")}
                  className="img-fluid rounded"
                  alt=""
                />
              </a>
              <div className="hover-icons">
                <ul className="list-unstyled">
                  <li>
                    <a href="/single-product">
                      <i className="las la-desktop" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lar la-bookmark" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* end: Item card image */}
            <div className="card-body px-0 pt-3">
              <div className="d-flex justify-content-between align-items-start">
                <div className="item-title">
                  <a href="#">
                    <h3 className="h5 mb-0 text-truncate">Media/Press Kit</h3>
                  </a>
                </div>
                <div className="item-price">
                  <span>$14</span>
                </div>
              </div>
              {/* end: Card info */}
              <div className="d-flex justify-content-start align-items-center item-meta">
                <div className="short-description mb-0">
                  <p className="mb-0 extension-text">
                    <a href="#">UI Kit</a>
                    <span className="ml-1">in</span> <a href="#">Corporate</a>{" "}
                  </p>
                </div>
              </div>
              {/* end: Card meta */}
            </div>
            {/* edn:Card body */}
          </div>
          {/* end: Card */}
        </div>
        {/* end: col */}
        <div className="col-md-3">
          <div className="card item-card h-100 border-0">
            <div className="item-card__image rounded">
              <a href="/single-product" me="swap-link">
                <img
                  src={require("../../assets/images/520x400.png")}
                  className="img-fluid rounded"
                  alt=""
                />
              </a>
              <div className="hover-icons">
                <ul className="list-unstyled">
                  <li>
                    <a href="/single-product">
                      <i className="las la-desktop" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lar la-bookmark" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* end: Item card image */}
            <div className="card-body px-0 pt-3">
              <div className="d-flex justify-content-between align-items-start">
                <div className="item-title">
                  <a href="#">
                    <h3 className="h5 mb-0 text-truncate">Box Mockup Vol.3</h3>
                  </a>
                </div>
                <div className="item-price">
                  <span>$14</span>
                </div>
              </div>
              {/* end: Card info */}
              <div className="d-flex justify-content-start align-items-center item-meta">
                <div className="short-description mb-0">
                  <p className="mb-0 extension-text">
                    <a href="#">UI Kit</a>
                    <span className="ml-1">in</span> <a href="#">Corporate</a>{" "}
                  </p>
                </div>
              </div>
              {/* end: Card meta */}
            </div>
            {/* edn:Card body */}
          </div>
          {/* end: Card */}
        </div>
        {/* end: col */}
      </div>
      <hr className="divider divider-fade" />
      <div className="row mb-4 mt-3 d-flex justify-content-between align-items-center">
        <div className="col-md-8">
          <h5 className="mb-0">HTML Templates</h5>
        </div>
        <div className="col-md-4">
          {" "}
          <a href="#" className="btn btn-link float-right">
            Explore all <i className="las la-long-arrow-alt-right" />{" "}
          </a>{" "}
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="card item-card h-100 border-0">
            <div className="item-card__image rounded">
              <a href="/single-product" me="swap-link">
                <img
                  src={require("../../assets/images/520x400.png")}
                  className="img-fluid rounded"
                  alt=""
                />
              </a>
              <div className="hover-icons">
                <ul className="list-unstyled">
                  <li>
                    <a href="javascript:void(0)">
                      <i className="las la-desktop" />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lar la-bookmark" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* end: Item card image */}
            <div className="card-body px-0 pt-3">
              <div className="d-flex justify-content-between align-items-start">
                <div className="item-title">
                  <a href="#">
                    <h3 className="h5 mb-0 text-truncate">Complete Pack</h3>
                  </a>
                </div>
                <div className="item-price">
                  <span>$14</span>
                </div>
              </div>
              {/* end: Card info */}
              <div className="d-flex justify-content-start align-items-center item-meta">
                <div className="short-description mb-0">
                  <p className="mb-0 extension-text">
                    <a href="#">WordPress</a>
                    <span className="ml-1">in</span> <a href="#">Creative</a>{" "}
                  </p>
                </div>
              </div>
              {/* end: Card meta */}
            </div>
            {/* edn:Card body */}
          </div>
          {/* end: Card */}
        </div>
        {/* end: col */}
        <div className="col-md-3">
          <div className="card item-card h-100 border-0">
            <div className="item-card__image rounded">
              <a href="/single-product" me="swap-link">
                <img
                  src={require("../../assets/images/520x400.png")}
                  className="img-fluid rounded"
                  alt=""
                />
              </a>
              <div className="hover-icons">
                <ul className="list-unstyled">
                  <li>
                    <a href="/single-product">
                      <i className="las la-desktop" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lar la-bookmark" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* end: Item card image */}
            <div className="card-body px-0 pt-3">
              <div className="d-flex justify-content-between align-items-start">
                <div className="item-title">
                  <a href="#">
                    <h3 className="h5 mb-0 text-truncate">
                      Gift Boxes and Bags
                    </h3>
                  </a>
                </div>
                <div className="item-price">
                  <span>$14</span>
                </div>
              </div>
              {/* end: Card info */}
              <div className="d-flex justify-content-start align-items-center item-meta">
                <div className="short-description mb-0">
                  <p className="mb-0 extension-text">
                    <a href="#">WordPress</a>
                    <span className="ml-1">in</span> <a href="#">Creative</a>{" "}
                  </p>
                </div>
              </div>
              {/* end: Card meta */}
            </div>
            {/* end:Card body */}
          </div>
          {/* end: Card */}
        </div>
        {/* end: col */}
        <div className="col-md-3">
          <div className="card item-card h-100 border-0">
            <div className="item-card__image rounded">
              <a href="/single-product" me="swap-link">
                <img
                  src={require("../../assets/images/520x400.png")}
                  className="img-fluid rounded"
                  alt=""
                />
              </a>
              <div className="hover-icons">
                <ul className="list-unstyled">
                  <li>
                    <a href="/single-product">
                      <i className="las la-desktop" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lar la-bookmark" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* end: Item card image */}
            <div className="card-body px-0 pt-3">
              <div className="d-flex justify-content-between align-items-start">
                <div className="item-title">
                  <a href="#">
                    <h3 className="h5 mb-0 text-truncate">Minimal mock-ups</h3>
                  </a>
                </div>
                <div className="item-price">
                  <span>$14</span>
                </div>
              </div>
              {/* end: Card info */}
              <div className="d-flex justify-content-start align-items-center item-meta">
                <div className="short-description mb-0">
                  <p className="mb-0 extension-text">
                    <a href="#">UI Kit</a>
                    <span className="ml-1">in</span> <a href="#">Corporate</a>{" "}
                  </p>
                </div>
              </div>
              {/* end: Card meta */}
            </div>
            {/* edn:Card body */}
          </div>
          {/* end: Card */}
        </div>
        {/* end: col */}
        <div className="col-md-3">
          <div className="card item-card h-100 border-0">
            <div className="item-card__image rounded">
              <a href="/single-product">
                <img
                  src={require("../../assets/images/520x400.png")}
                  className="img-fluid rounded"
                  alt=""
                />{" "}
              </a>
              <div className="hover-icons">
                <ul className="list-unstyled">
                  <li>
                    <a href="/single-product">
                      <i className="las la-desktop" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lar la-bookmark" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* end: Item card image */}
            <div className="card-body px-0 pt-3">
              <div className="d-flex justify-content-between align-items-start">
                <div className="item-title">
                  <a href="#">
                    <h3 className="h5 mb-0 text-truncate">
                      Noonic - Brand Identity &amp; Style Guide
                    </h3>
                  </a>
                </div>
                <div className="item-price">
                  {" "}
                  <span>$14</span>{" "}
                </div>
              </div>
              {/* end: Card info */}
              <div className="d-flex justify-content-start align-items-center item-meta">
                <div className="short-description mb-0">
                  <p className="mb-0 extension-text">
                    <a href="#">UI Kit</a>
                    <span className="ml-1">in</span> <a href="#">Corporate</a>{" "}
                  </p>
                </div>
              </div>
              {/* end: Card meta */}
            </div>
            {/* edn:Card body */}
          </div>
          {/* end: Card */}
        </div>
        {/* end: col */}
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-7 text-center mt-3">
          {" "}
          <a href="#" className="btn btn-white ">
            <i className="las la-redo-alt mr-2" />
            Load more...
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default Products;
