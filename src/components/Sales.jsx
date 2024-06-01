import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button, Rating } from '@mui/material';
import './Sales.css';
import shoe from '../assets/aykb1.png';

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
                            Shoe Model
                        </p>
                        <div className='shoePrice'>
                            $99.99
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
                        image={shoe}
                        alt="Shoe Image"
                    />
                    <CardContent>
                        <p className='shoeText'>
                            Shoe Model
                        </p>
                        <div className='shoePrice'>
                            $99.99
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
                        image={shoe}
                        alt="Shoe Image"
                    />
                    <CardContent>
                        <p className='shoeText'>
                            Shoe Model
                        </p>
                        <div className='shoePrice'>
                            $99.99
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
            </div>
        </div>
    );
};

export default App;