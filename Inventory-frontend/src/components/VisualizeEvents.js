import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Nav } from "react-bootstrap";
import Plot from "./Plot";
class VisualizeEvents extends Component {
  state = {};

  render() {
    const { name, total, eventSum, stockEvents, products } = this.props;
    function formatMyDate(value, locale = "en-GB") {
      return new Date(value).toLocaleDateString(locale);
    }
    /* Chart Section */
    var xs = []; // starts empty, to be populated with .push
    var ys = []; // starts empty, to be populated with .push
    //var bestfit = [] // to be populated by tf.js

    //Push table data into x and y axis
    const num = stockEvents.length;
    for (let i = 0; i < num; i++) {
      xs[i] = i + 1;
      ys[i] = eventSum[i];
    }
    let overStock = 0;
    let underStock = 0;
    let message = "";
    const len = products.length;
    for (let i = 0; i < len; i++) {
      name === products[i].attributes.name
        ? (overStock = products[i].attributes.overstock)
        : (message = "No stock values");
      name === products[i].attributes.name
        ? (underStock = products[i].attributes.understock)
        : (message = "No stock values");
    }

    return (
      <div className="table-view">
        <hr />
        {stockEvents.length > 0 && (
          <>
            <h4>
              Product Name : {name} | Available Stock : {total}{" "}
            </h4>
            {overStock > 0
              ? (message = `Over-stock amount: ${overStock}`)
              : message}{" "}
            |
            {underStock !== 0
              ? (message = `Under-stock amount: ${underStock}`)
              : message}
            <br />
            {total >= overStock && total > underStock ? (
              <>
                {total >= overStock ? (
                  <div style={{ color: "red" }}>
                    <b>{(message = "This Product is already Overstocked")}</b>
                  </div>
                ) : (
                  <div style={{ color: "blue" }}>
                    <b>{(message = "The amount of stock is okay")}</b>
                  </div>
                )}
              </>
            ) : (
              <>
                {total <= underStock ? (
                  <div style={{ color: "red" }}>
                    {
                      <b>
                        {
                          (message =
                            "This Product is understocked. Please re-order soon")
                        }
                      </b>
                    }
                  </div>
                ) : (
                  <div style={{ color: "blue" }}>
                    <b>{(message = "The amount of stock is fair enough")}</b>
                  </div>
                )}
              </>
            )}
            <hr />
            <table>
              <thead>
                <th>Serial No.</th>
                <th>Event id</th>
                <th>Event Date</th>
                <th>Event Type</th>
                <th>Quantity</th>
                <th><center>Stock Amount</center></th>
                <th>Remarks</th>
              </thead>
              <tbody>
                {stockEvents.map((event, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{event.id}</td>
                    <td>{formatMyDate(event.attributes.updatedAt)}</td>
                    <td>{event.attributes.type}</td>
                    <td>{event.attributes.qty}</td>
                    <td className="EventSum"><center>{eventSum[i]}</center></td>
                    <td>
                      {total >= eventSum[i] && eventSum[i] > underStock ? (
                        <>
                          {eventSum[i] >= overStock ? (
                            <div style={{ color: "red" }}>
                              <b>{(message = "Overstocked")}</b>
                            </div>
                          ) : (
                            <div style={{ color: "blue" }}>
                              <b>{(message = "okay")}</b>
                            </div>
                          )}
                        </>
                      ) : (
                        <>
                          {eventSum[i] <= underStock ? (
                            <div style={{ color: "red" }}>
                              {<b>{(message = "Understocked")}</b>}
                            </div>
                          ) : (
                            <div style={{ color: "blue" }}>
                              <b>{(message = "okay")}</b>
                            </div>
                          )}
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <hr />
            <Nav.Link onClick={() => window.open("productanalysis.html")}>
              <button className="ASEbutton">Visualize </button>
            </Nav.Link>
            <hr />
            <BrowserRouter>
              <Switch>
                <Route exact path="/chart">
                  {stockEvents.map((event, i) => (
                    <div key={i} className="StockEventTable_Card">
                      <Plot
                        name={name}
                        tag={event.attributes.tag}
                        total={total}
                        stockEvents={stockEvents}
                        date={formatMyDate(event.attributes.updatedAt)}
                        xAix={xs}
                        yAxis={ys}
                      />
                    </div>
                  ))}
                </Route>
              </Switch>
            </BrowserRouter>
          </>
        )}
      </div>
    );
  }
}

export default VisualizeEvents;
