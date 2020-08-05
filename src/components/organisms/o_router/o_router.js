import React from 'react';
import Home from '../o_home/o_home';
import Gallery from '../o_gallery/o_gallery';
import Contact from '../o_contact/o_contact';
import About from '../o_about/o_about';
import GalleryAdmin from '../o_gallery-admin/o_gallery-admin'
import {withRouter,Route} from 'react-router-dom';
const Routes=()=>{
    return(
        <>
    <Route exact path="/home" component={withRouter(Home)} />

        <Route path="/gallery" component={withRouter(Gallery)} />

        <Route path="/contact" component={withRouter(Contact)} />

        <Route path="/about" component={withRouter(About)} />

        <Route path="/gallery-admin" component={withRouter(GalleryAdmin)} />

        </>
    );
}
export default Routes;
