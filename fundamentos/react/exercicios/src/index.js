import { divide } from 'lodash'
import React from 'react'
import ReactDom from 'react-dom'

import Multi,{BoaNoite} from './componentes/Multiplos'

ReactDom.render(
    <div>
    <Multi.BoaTarde nome="Nikolas"/>
    <BoaNoite nome="Mônica"/>
    </div>
    , document.getElementById('root'))