import React, { Component } from 'react';
import { Card, CardTitle, Grid, Cell } from 'react-mdl';


class Cards extends Component {
    render() {
        return (
            <Grid className="cards-grid">
                <Cell col={3}><p>card 1</p></Cell>
                <Cell col={3}><p>card 2</p></Cell>
                <Cell col={3}><p>card 3</p></Cell>
                <Cell col={3}><p>card 4</p></Cell>
                <br/>
                <Cell col={3}><p>card 5</p></Cell>
                <Cell col={3}><p>card 6</p></Cell>
                <Cell col={3}><p>card 7</p></Cell>
                <Cell col={3}><p>card 8</p></Cell>
            </Grid>

        )
    }
}

export default Cards;