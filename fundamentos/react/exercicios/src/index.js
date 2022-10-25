import { divide } from 'lodash'
import React from 'react'
import ReactDom from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDom.render(
    <div>
    <Pai nome="Nikson" sobrenome="Daltro">
      <Filho nome="Nikolas" />
      <Filho nome="Nikson"  />
      <Filho nome="Carla"  /> 
    </Pai>
    </div>
    , document.getElementById('root'))