import React, { Component } from 'react'
import { connect } from 'react-redux'
import { exchangeSelector } from '../store/selectors'
import { loadAllOrders } from '../store/interactions'
import Trades from './Trades'
import OrderBook from './OrderBook'
import MyTransactions from './MyTransactions'
import PriceChart from './PriceChart'

class Content extends Component {
	componentWillMount() {
    	this.loadBlockchainData(this.props.dispatch)
  	}

  async loadBlockchainData(dispatch) {
    	await loadAllOrders(this.props.exchange, dispatch)
    }

  render() {
    return (
        <div className="content">
          <div className="vertical-split">
            <div className="card bg-dark text-white">
              <div className="card-header">
                Card Title
              </div>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/#" className="card-link">Card link</a>
              </div>
            </div>
            <div className="card bg-dark text-white">
              <div className="card-header">
                Card Title
              </div>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/#" className="card-link">Card link</a>
              </div>
            </div>
          </div>
          <OrderBook />
          <div className="vertical-split">
            <PriceChart />
            <MyTransactions/>
          </div>
          <Trades />
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    exchange: exchangeSelector(state)
  }
}

export default connect(mapStateToProps)(Content);