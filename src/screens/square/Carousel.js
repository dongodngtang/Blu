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
import {PagerDotIndicator,IndicatorViewPager} from 'rn-viewpager';

export default class Carousel extends Component {


    render() {
        return (<IndicatorViewPager
            style={{backgroundColor: 'white', height: 120}}
            indicator={this._renderDotIndicator()}>

            <View style={{backgroundColor: 'cadetblue'}}>
                <Text>page one</Text>
            </View>
            <View style={{backgroundColor: 'cornflowerblue'}}>
                <Text>page two</Text>
            </View>
            <View style={{backgroundColor: '#1AA094'}}>
                <Text>page three</Text>
            </View>

        </IndicatorViewPager>)
    }

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3}/>;
    }
}

