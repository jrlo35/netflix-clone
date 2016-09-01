var MyTitle = require('./MyTitle.js')
var React = require('react')
var ReactDOM = require('react-dom')
var div = React.DOM.div


var MyTitleFactory = React.createFactory(MyTitle)
var ce = React.createElement

var myFirstComponent = (
	//attributes
  div (null, 
  	MyTitleFactory({title: 'Props are great', color:'green'}),
  	ce(MyTitle,{title: 'Props everywhere', color: 'mediumaquamarine'}),
  	React.createElement(MyTitle,{title: 'more props', color:'peru'})
  )
)
ReactDOM.render(myFirstComponent, document.getElementById('app'))
