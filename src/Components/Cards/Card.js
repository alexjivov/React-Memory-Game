import React, { Component } from 'react';
import { Card, CardTitle, Grid, Cell } from 'react-mdl';


class Cards extends Component {
    render() {
        return (
            <Grid className="cards-grid">
                <Cell col={2}><p>hey</p></Cell>
                <Cell col={2}><p>hey</p></Cell>
                <Cell col={2}><p>hey</p></Cell>
                <Cell col={2}><p>hey</p></Cell>
            </Grid>

        )
    }
}

export default Cards;