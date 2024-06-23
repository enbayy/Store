import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button, Rating } from '@mui/material';
import './Sales.css';
import shoe from '../assets/ad1.png';
import shoe1 from '../assets/ad2.png';
import shoe2 from '../assets/ad3.png';

const App = () => {
    return (
        <div className='sales'>
            <div className='salesText'>
                Popular Sales
            </div>
            <div className='row'>
                <Card className="custom-card">
                    <CardMedia
                        className='shoe'
                        component="img"
                        height="200"
                        image={shoe}
                        alt="Shoe Image"
                    />
                    <CardContent>
                        <p className='shoeText'>
                            Adidas Ultra Boost 1.0
                        </p>
                        <div className='shoePrice'>
                            $181,23
                        </div>
                        <div className="rating-container">
                            <Rating className='shoeRating' name="read-only" value={3} readOnly />
                            <div className='shoePoint'>
                                3.0
                            </div>
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button className='shoeButton'>
                            Buy Now
                        </Button>
                    </CardActions>
                </Card>

                <Card className="custom-card">
                    <CardMedia
                        className='shoe'
                        component="img"
                        height="200"
                        image={shoe1}
                        alt="Shoe Image"
                    />
                    <CardContent>
                        <p className='shoeText'>
                            Adidas Tubular Shadow
                        </p>
                        <div className='shoePrice'>
                            $79,90
                        </div>
                        <div className="rating-container">
                            <Rating className='shoeRating' name="read-only" value={4} readOnly />
                            <div className='shoePoint'>
                                4.0
                            </div>
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button className='shoeButton'>
                            Buy Now
                        </Button>
                    </CardActions>
                </Card>

                <Card className="custom-card">
                    <CardMedia
                        className='shoe'
                        component="img"
                        height="200"
                        image={shoe2}
                        alt="Shoe Image"
                    />
                    <CardContent>
                        <p className='shoeText'>
                            Adidas NMD_R1
                        </p>
                        <div className='shoePrice'>
                            $141,63
                        </div>
                        <div className="rating-container">
                            <Rating className='shoeRating' name="read-only" value={2} readOnly />
                            <div className='shoePoint'>
                                2.0
                            </div>
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button className='shoeButton'>
                            Buy Now
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
};

export default App;