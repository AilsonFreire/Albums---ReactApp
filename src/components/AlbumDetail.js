import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <Text>{props.album.title}</Text> 
                {/* It wiil take this JSX or any thing you put in and pass as children by props */}
            </CardSection>
        </Card>
    );
};

export default AlbumDetail;