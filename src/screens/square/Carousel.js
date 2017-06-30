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

                <View style={{backgroundColor: '#BADA55',  flex: 1}}>
                    <Image style={{height:120}}
                    source={{uri:'http://img1.3lian.com/2015/a1/144/d/69.jpg'}}/>
                </View>
                <View style={{backgroundColor: 'red', flex: 1}}>
                    <Image style={{height:120}}
                           source={{uri:'http://img17.3lian.com/d/file/201702/20/b1b95fd7b88f9c3c08985ee4c3ecd9dc.jpg'}}/>
                </View>
                <View style={{backgroundColor: 'blue', flex: 1}}>
                    <Image style={{height:120}}
                           source={{uri:'http://img.taopic.com/uploads/allimg/110727/1819-110HG5512219.jpg'}}/>
                </View>

            </Carousels>)

    }

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3}/>;
    }
}

