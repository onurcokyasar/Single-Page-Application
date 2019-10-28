import React from 'react';
import Actress from './actress';
import Actresses from './actresses';
import { Route } from 'react-router-dom';
import { ActressList } from '../data/actresses';

const ActressesContainer = (props) => {
    let actressUrl = ActressList.map((actress) => {
        return (
            <Route path={`/actresses/${actress.url}`} render={() => <Actress image={actress.profile_img} name={actress.name} details={actress.description} />} />
        );
    });
    return (
        <React.Fragment>
            <Route exact path="/actresses" render={ () => <Actresses title="Best Actresses" />} />
            {actressUrl}
        </React.Fragment>
    );
};

export default ActressesContainer;