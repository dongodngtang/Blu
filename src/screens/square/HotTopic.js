/**
 * Created by lorne on 2017/6/29.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    FlatList,
    Image,
    Text
} from 'react-native';

export default class HotTopic extends Component {


    state = {
        data: [1, 2, 3, 4]
    }

    render() {
        return (<View style={{backgroundColor: '#252834', marginTop: 15}}>
            <Text style={styles.lbHot}>热门圈子</Text>

            <FlatList
                horizontal={true}
                data={this.state.data}
                extraData={this.state}
                ItemSeparatorComponent={this._separator}
                renderItem={this._renderItem}/>

        </View>)
    }

    _separator = () => {
        return (<View
            style={{width: 10}}/>)
    }

    _renderItem = ({item}) => {

        return (<View style={styles.item}>
            <Image
                style={styles.img}
                source={{uri: 'http://img.zcool.cn/community/014026568b7bcc6ac725bb5c65e529.jpg@900w_1l_2o_100sh.jpg'}}/>

            <Text style={styles.title}>#为爱同行求组队#</Text>
        </View>)
    }
}

const styles = StyleSheet.create({
    lbHot: {
        fontSize: 14,
        color: '#00FFCC',
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 10,
        marginTop: 10

    },
    img: {
        height: 90,
        width: 90,
        borderRadius: 5,
        backgroundColor: 'red'
    },
    title: {
        width: 90,
        fontSize: 14,
        color: 'white',
        marginTop: 5
    },
    item: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 15,
    }

})