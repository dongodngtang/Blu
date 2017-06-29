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
    Text,
    TouchableOpacity
} from 'react-native';
import Images from '../../assert/Images';
const {width, height} = Dimensions.get('window')

export default class Menu extends Component {

    render() {
        return (<View style={styles.menu}>
            <TouchableOpacity style={styles.btn}>
                <Image
                    style={styles.icon}
                    source={Images.circle}/>
                <Text style={styles.name}>圈子</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Image
                    style={styles.icon}
                    source={Images.topic}/>
                <Text style={styles.name}>话题</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Image
                    style={styles.icon}
                    source={Images.column}/>
                <Text style={styles.name}>专栏</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Image
                    style={styles.icon}
                    source={Images.activity}/>
                <Text style={styles.name}>活动</Text>

            </TouchableOpacity>
        </View>)
    }
}

const styles = StyleSheet.create({
    btn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    menu: {
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        width: width,
    },
    icon: {
        height: 30,
        width: 30
    },
    name: {
        fontSize: 14,
        color: 'white',
        marginTop: 10
    }
});