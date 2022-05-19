import React, { Component } from "react";

class Plot extends Component {
  state = {};

  render() {
    const { name, tag, total, stockEvents, date, xAxis, yAxis } = this.props;
    return (
        <div className="table-view">
        <hr />
        {stockEvents.length > 0 && (
          <>
            <h4>
              Product Name : {name} | Tag : {tag} | Total Stock : {total}{" "}
            </h4>
            <hr />
            <table>
              <thead>
                <th>Serial No.</th>
                <th>Event id</th>
                <th>Event Date</th>
                <th>Event Type</th>
                <th>Quantity</th>
                <th>Amount in stock @Event</th>
              </thead>
              <tbody>
                {stockEvents.map((event, i) => (
                  <tr key={i}>
                    <td>{xAxis[i]}</td>
                    <td>{event.id}</td>
                    <td>{date}</td>
                    <td>{event.attributes.type}</td>
                    <td>{event.attributes.qty}</td>
                    <td>{yAxis[i]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <hr />
            <button className="ASEbutton">Visualize </button>
            <hr />            
          </>
        )}
      </div>
    );
  }
}

export default Plot;
