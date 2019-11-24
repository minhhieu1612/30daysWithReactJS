import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './styles.css'

class Loading extends Component {
  render() {
    let { loading } = this.props
    return (
      loading &&
      <div className="loading">
        <img src="./loading.gif" alt="" />
      </div>
    )
  }
}

Loading.propTypes = {
  loading: PropTypes.bool.isRequired
}

let mapStateToProps = state => ({
  loading: state.loading
})

let mapDispatchToProps = (dispatch, props) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Loading) 