import * as React from 'react'
import * as ReactDom from 'react-dom'

import { Home } from './components/Home'

ReactDom.render(<Home name="Marcel" age={27} />, document.getElementById('app'))
