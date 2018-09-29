import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';

class HomePage extends Component {
  render() {
    return (
      <div>
        <FormattedMessage id="homepage-text" defaultMessage="This is some Text on the home page"/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
