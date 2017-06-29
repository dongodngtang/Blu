/**
 * Created by lorne on 2017/6/29.
 */
/**
 * Created by lorne on 2017/6/29.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    Image
} from 'react-native';
import Carousel from './Carousel';
import Menu from './Menu';
import HotCircle from './HotCircle';
import HotTopic from './HotTopic';
import HotMoment from './HotMoment';


export default class SquarePage extends Component {

    render() {

        return (<ScrollView style={styles.page}>
            <Carousel/>
            <Menu/>
            <HotCircle/>
            <HotTopic/>
            <HotMoment/>


        </ScrollView>)
    }
}


const styles = StyleSheet.create({
    page: {
        backgroundColor: '#1B1E27',
        flex: 1
    },
    viewPager: {
        height: 240
    }

});