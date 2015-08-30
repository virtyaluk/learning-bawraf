var React = require('react'),
    Header = require('./components/common/header'),
    Home = require('./components/homePage'),
    About = require('./components/about/aboutPage');

(function(win) {
	"use strict";
	var App = React.createClass({
            render: function() {
                var Child;

                switch(this.props.route) {
                    case 'about': Child = About; break;
                    default: Child = Home;
                }

                return (
                    <div>
                        <Header/>
                        <Child/>
                    </div>
                );

            }
        }),
        render = function () {
            var route = window.location.hash.substr(1);
            React.render(<App route={route} />, document.getElementById('app'));
        };

	window.addEventListener('hashchange', render);
	render();
})(window);