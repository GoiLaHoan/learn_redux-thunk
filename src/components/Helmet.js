import React from "react";
import PropTypes from "prop-types";

const Helmet = (props) => {
    document.title = props.title + " - Eren Shop";

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <div className="ui grid container">{props.children}</div>;
};

Helmet.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Helmet;
