/**
 * Created by lorne on 2017/6/29.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Animated,
    Dimensions,
    Image,
    Text
} from 'react-native';
import {PagerDotIndicator, IndicatorViewPager} from 'rn-viewpager';
import Carousels from 'react-native-looped-carousel';

export default class Carousel extends Component {


    render() {

        return (
            <Carousels
                delay={2000}
                style={{height: 120}}
                autoplay
                pageInfo
                onAnimateNextPage={p => console.log(p)}>

                <View style={{backgroundColor: '#BADA55',  flex: 1}}><Text>1</Text></View>
                <View style={{backgroundColor: 'red', flex: 1}}><Text>2</Text></View>
                <View style={{backgroundColor: 'blue', flex: 1}}><Text>3</Text></View>

            </Carousels>)

    }

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3}/>;
    }
}

