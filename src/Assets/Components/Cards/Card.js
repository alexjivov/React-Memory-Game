import React, { Component } from 'react';
import { Card, Grid, Cell } from 'react-mdl';


class Cards extends Component {
    render() {
        return (
            <Grid className="cards-grid">
     
                <Card shadow={0} style={{width: '180px', height: '180px', background: 'url(http://media.148apps.com/icons/117886/117886_180.jpg) center / cover', margin: 'auto'}}>
                </Card>
       
                <Cell col={3}>
                <Card shadow={0} style={{width: '180px', height: '180px', background: 'url(https://www.mnfieldtriplibrary.org/wp-content/uploads/2017/01/SeaLife_JanGroup-180x180.jpg) center / cover', margin: 'auto'}}>
                </Card>
                </Cell>
                <Cell col={3}>
                <Card shadow={0} style={{width: '180px', height: '180px', background: 'url(https://www.townsvilleholidays.com/wp-content/uploads/2013/10/Melbourne-SEA-LIFE-Aquarium-Gordon-Flood-on-Flickr-180x180.jpg) center / cover', margin: 'auto'}}>
                </Card>
                
                
                
                </Cell>
                <Cell col={3}>
                <Card shadow={0} style={{width: '180px', height: '180px', background: 'url(https://ssl.c.photoshelter.com/img-get2/I0000DPkezAHgaoo/fit=/fill=180x180/g=G0000G7lpT1IfVzU/I0000DPkezAHgaoo.jpg) center / cover', margin: 'auto'}}>
                </Card>
                </Cell>
                <br/>
                <Cell col={3}>
                <Card shadow={0} style={{width: '180px', height: '180px', background: 'url(https://i.pinimg.com/236x/80/02/c0/8002c0eaed50f7925569c53f4572d25a--underwater-animals-underwater-creatures.jpg) center / cover', margin: 'auto'}}>
                </Card>
                
                
                
                </Cell>
                <Cell col={3}>
                <Card shadow={0} style={{width: '180px', height: '180px', background: 'url(http://www.douk.com/images/places/sea-life-brighton/square_180x180_sea-life-brighton2.jpg) center / cover', margin: 'auto'}}>
                </Card>
                
                
                
                </Cell>
                <Cell col={3}>
                <Card shadow={0} style={{width: '180px', height: '180px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUpsBNsVspiVs_GKw0baKluCdmGgtYUFPg0CqG_-inTYFXp08cTQ) center / cover', margin: 'auto'}}>
                </Card>
                
                
                
                
                </Cell>
                <Cell col={3}>
                <Card shadow={0} style={{width: '180px', height: '180px', background: 'url(https://lh3.googleusercontent.com/OU5ASwZSR3DIlEKYyNKX7WCMwDxjfzrctiQ_Epvykhg4ggVIXrO2dK0pnTM7Au5UTg=s180) center / cover', margin: 'auto'}}>
                </Card>
            
                </Cell>
            </Grid>

        )
    }
}

export default Cards;