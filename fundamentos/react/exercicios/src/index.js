import { divide } from 'lodash'
import React from 'react'
import ReactDom from 'react-dom'

import Pai from './componentes/Pai'

ReactDom.render(
    <div>
    <Pai nome="Nikson" sobrenome="Daltro"/>
    </div>
    , document.getElementById('root'))