import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./hsPricingPlan.scss";

function hsPricingPlan() {
  return (
    <div className="hsPricingPlan-wrapper">
      <div className="hsPricingPlan-container container">
        <div className="hsPricingPlan-header">
          <div className="hsPricingPlanH-text">Explore Our Plan</div>
          <h2>Pricing Plan</h2>
        </div>
        <Tabs
          defaultActiveKey="special"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="special" title="Special">
            <div className="hsPricingList-wrapper">
              <ul className="hsPricingList">
                <li className="hsPricingItem">
                  <div className="hsPricingItem-title-text">
                    <h4 className="hsPricingItem-title">Quiff Cutting</h4>
                    <div className="hsPricingItem-text">
                      Awesome hair cut service i here
                    </div>
                  </div>
                  <div className="hsPricingItem-price">$40</div>
                </li>
                <li className="hsPricingItem">
                  <div className="hsPricingItem-title-text">
                    <h4 className="hsPricingItem-title">Formal Cutting</h4>
                    <div className="hsPricingItem-text">
                      Awesome hair cut service i here
                    </div>
                  </div>
                  <div className="hsPricingItem-price">$55</div>
                </li>
                <li className="hsPricingItem">
                  <div className="hsPricingItem-title-text">
                    <h4 className="hsPricingItem-title">Blow Cutting</h4>
                    <div className="hsPricingItem-text">
                      Awesome hair cut service i here
                    </div>
                  </div>
                  <div className="hsPricingItem-price">$45</div>
                </li>
                <li className="hsPricingItem">
                  <div className="hsPricingItem-title-text">
                    <h4 className="hsPricingItem-title">Pixie Cutting</h4>
                    <div className="hsPricingItem-text">
                      Awesome hair cut service i here
                    </div>
                  </div>
                  <div className="hsPricingItem-price">$60</div>
                </li>
                <li className="hsPricingItem">
                  <div className="hsPricingItem-title-text">
                    <h4 className="hsPricingItem-title">Hair Cutting</h4>
                    <div className="hsPricingItem-text">
                      Awesome hair cut service i here
                    </div>
                  </div>
                  <div className="hsPricingItem-price">$40</div>
                </li>
                <li className="hsPricingItem">
                  <div className="hsPricingItem-title-text">
                    <h4 className="hsPricingItem-title">Short Thin Hair</h4>
                    <div className="hsPricingItem-text">
                      Awesome hair cut service i here
                    </div>
                  </div>
                  <div className="hsPricingItem-price">$30</div>
                </li>
              </ul>
            </div>
          </Tab>
          <Tab eventKey="men" title="Men">
            <div className="hsPricingList-wrapper">
              <ul className="hsPricingList">
                <li className="hsPricingItem">
                  <div className="hsPricingItem-title-text">
                    <h4 className="hsPricingItem-title">Quiff Cutting</h4>
                    <div className="hsPricingItem-text">
                      Awesome hair cut service i here
                    </div>
                  </div>
                  <div className="hsPricingItem-price">$40</div>
                </li>
                <li className="hsPricingItem">
                  <div className="hsPricingItem-title-text">
                    <h4 className="hsPricingItem-title">Formal Cutting</h4>
                    <div className="hsPricingItem-text">
                      Awesome hair cut service i here
                    </div>
                  </div>
                  <div className="hsPricingItem-price">$55</div>
                </li>
                <li className="hsPricingItem">
                  <div className="hsPricingItem-title-text">
                    <h4 className="hsPricingItem-title">Blow Cutting</h4>
                    <div className="hsPricingItem-text">
                      Awesome hair cut service i here
                    </div>
                  </div>
                  <div className="hsPricingItem-price">$45</div>
                </li>
                <li className="hsPricingItem">
                  <div className="hsPricingItem-title-text">
                    <h4 className="hsPricingItem-title">Pixie Cutting</h4>
                    <div className="hsPricingItem-text">
                      Awesome hair cut service i here
                    </div>
                  </div>
                  <div className="hsPricingItem-price">$60</div>
                </li>
                <li className="hsPricingItem">
                  <div className="hsPricingItem-title-text">
                    <h4 className="hsPricingItem-title">Hair Cutting</h4>
                    <div className="hsPricingItem-text">
                      Awesome hair cut service i here
                    </div>
                  </div>
                  <div className="hsPricingItem-price">$40</div>
                </li>
                <li className="hsPricingItem">
                  <div className="hsPricingItem-title-text">
                    <h4 className="hsPricingItem-title">Short Thin Hair</h4>
                    <div className="hsPricingItem-text">
                      Awesome hair cut service i here
                    </div>
                  </div>
                  <div className="hsPricingItem-price">$30</div>
                </li>
              </ul>
            </div>
          </Tab>
          <Tab eventKey="women" title="Women">
            <div className="hsPricingList-wrapper">
              <ul className="hsPricingList">
                <li className="hsPricingItem">
                  <div className="hsPricingItem-title-text">
                    <h4 className="hsPricingItem-title">Quiff Cutting</h4>
                    <div className="hsPricingItem-text">
                      Awesome hair cut service i here
                    </div>
                  </div>
                  <div className="hsPricingItem-price">$40</div>
                </li>
                <li className="hsPricingItem">
                  <div className="hsPricingItem-title-text">
                    <h4 className="hsPricingItem-title">Formal Cutting</h4>
                    <div className="hsPricingItem-text">
                      Awesome hair cut service i here
                    </div>
                  </div>
                  <div className="hsPricingItem-price">$55</div>
                </li>
                <li className="hsPricingItem">
                  <div className="hsPricingItem-title-text">
                    <h4 className="hsPricingItem-title">Blow Cutting</h4>
                    <div className="hsPricingItem-text">
                      Awesome hair cut service i here
                    </div>
                  </div>
                  <div className="hsPricingItem-price">$45</div>
                </li>
                <li className="hsPricingItem">
                  <div className="hsPricingItem-title-text">
                    <h4 className="hsPricingItem-title">Pixie Cutting</h4>
                    <div className="hsPricingItem-text">
                      Awesome hair cut service i here
                    </div>
                  </div>
                  <div className="hsPricingItem-price">$60</div>
                </li>
                <li className="hsPricingItem">
                  <div className="hsPricingItem-title-text">
                    <h4 className="hsPricingItem-title">Hair Cutting</h4>
                    <div className="hsPricingItem-text">
                      Awesome hair cut service i here
                    </div>
                  </div>
                  <div className="hsPricingItem-price">$40</div>
                </li>
                <li className="hsPricingItem">
                  <div className="hsPricingItem-title-text">
                    <h4 className="hsPricingItem-title">Short Thin Hair</h4>
                    <div className="hsPricingItem-text">
                      Awesome hair cut service i here
                    </div>
                  </div>
                  <div className="hsPricingItem-price">$30</div>
                </li>
              </ul>
            </div>
          </Tab>
          <Tab eventKey="kid" title="Kid">
            <div className="hsPricingList-wrapper">
              <ul className="hsPricingList">
                <li className="hsPricingItem">
                  <div className="hsPricingItem-title-text">
                    <h4 className="hsPricingItem-title">Quiff Cutting</h4>
                    <div className="hsPricingItem-text">
                      Awesome hair cut service i here
                    </div>
                  </div>
                  <div className="hsPricingItem-price">$40</div>
                </li>
                <li className="hsPricingItem">
                  <div className="hsPricingItem-title-text">
                    <h4 className="hsPricingItem-title">Formal Cutting</h4>
                    <div className="hsPricingItem-text">
                      Awesome hair cut service i here
                    </div>
                  </div>
                  <div className="hsPricingItem-price">$55</div>
                </li>
                <li className="hsPricingItem">
                  <div className="hsPricingItem-title-text">
                    <h4 className="hsPricingItem-title">Blow Cutting</h4>
                    <div className="hsPricingItem-text">
                      Awesome hair cut service i here
                    </div>
                  </div>
                  <div className="hsPricingItem-price">$45</div>
                </li>
                <li className="hsPricingItem">
                  <div className="hsPricingItem-title-text">
                    <h4 className="hsPricingItem-title">Pixie Cutting</h4>
                    <div className="hsPricingItem-text">
                      Awesome hair cut service i here
                    </div>
                  </div>
                  <div className="hsPricingItem-price">$60</div>
                </li>
                <li className="hsPricingItem">
                  <div className="hsPricingItem-title-text">
                    <h4 className="hsPricingItem-title">Hair Cutting</h4>
                    <div className="hsPricingItem-text">
                      Awesome hair cut service i here
                    </div>
                  </div>
                  <div className="hsPricingItem-price">$40</div>
                </li>
                <li className="hsPricingItem">
                  <div className="hsPricingItem-title-text">
                    <h4 className="hsPricingItem-title">Short Thin Hair</h4>
                    <div className="hsPricingItem-text">
                      Awesome hair cut service i here
                    </div>
                  </div>
                  <div className="hsPricingItem-price">$30</div>
                </li>
              </ul>
            </div>
          </Tab>
        </Tabs>

        <div className="hsPricingPlan-appointment-wrapper">
          <div className="hsPricingPlan-appointment">
            <h4>Lorem ipsum dolor</h4>
            <ul className="appointment-program">
              <li className="appointment-program-item">
                <div className="default-program">
                  <span className="default-program-text">
                    Sunday to Saturday:
                  </span>
                  <span className="default-program-hours">
                    09:30am - 08:00pm
                  </span>
                </div>
                <div className="special-program">
                  <span className="special-program-text">Friday:</span>
                  <span className="special-program-hours">Close</span>
                </div>
              </li>
            </ul>
            <button className="btnStyle1">Make Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default hsPricingPlan;
