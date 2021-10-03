import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import {Accordion} from "./components/Accordion/Accordion";
import {dataAccordion} from "./dataAccordion";

ReactDOM.render(
    <React.StrictMode>
        <Accordion items={dataAccordion}/>
    </React.StrictMode>,
    document.getElementById('root')
);
