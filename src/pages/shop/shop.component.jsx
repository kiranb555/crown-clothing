import React, { Component } from "react";

import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from "../../components/collections-overview/collections-overview.component.jsx";
import CollectionPage from "../collection/collection.component.jsx";
import {updateCollections} from '../../redux/shop/shop.actions';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  state = {
    loading : true
  }

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    // when ever code changes or runs for first time fetches data from fire store
    collectionRef.get().then(
      snapshot => {
        const collectionMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionMap);
        this.setState({loading : false});
      });

  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>} />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => <CollectionsPageWithSpinner isLoading={loading} {...props}/>}
        />
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  updateCollections : collectionsMap  => dispatch(updateCollections(collectionsMap))
})

export default connect(null , mapDispatchToProps)(ShopPage);
