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
const {width, height} = Dimensions.get('window');
import Images from '../../assert/Images';

export default class HotCircle extends Component {

    state = {
        data: [1, 2, 3, 4]
    }

    render() {
        return (<View style={{backgroundColor: '#252834'}}>
            <Text style={styles.lbHot}>热门圈子</Text>
            <FlatList
                data={this.state.data}
                extraData={this.state}
                ItemSeparatorComponent={this._separator}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}/>

        </View>)
    }

    _separator = () => {
        return (<View style={{
            flex: 1,
            marginRight: 15, marginLeft: 15,
            backgroundColor: 'gray',
            height: 0.5
        }}/>)
    }

    _renderItem = ({item}) => {
        return (<View style={styles.item}>
            <View style={{flex: 1, marginRight: 22}}>
                <Text style={styles.title}>圈子名称</Text>

                <Text
                    style={styles.desc}
                    numberOfLines={1}>立刻精神阿善良的肌肤阿拉斯加的了放假啊是了解对方辣椒素到了放假说到了放假</Text>
                <View style={styles.viewPost}>

                    <Image
                        source={Images.people}
                        style={styles.icPost}/>

                    <Text style={styles.txtPost}>234</Text>
                    <Image
                        source={Images.posts}
                        style={[styles.icPost, styles.marginLeft]}/>
                    <Text style={styles.txtPost}>634</Text>
                </View>

                <View style={styles.viewStatus}>
                    <Text style={styles.txtStatus}>PK赛：全马畅快跑</Text>
                    <View style={{flex: 1}}/>
                    <Text style={styles.txtStatus}>进行中</Text>
                </View>

            </View>

            <Image
                style={styles.img}
                source={{uri: 'http://img0.pclady.com.cn/pclady/1701/11/1655244_3.jpg'}}/>

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
    item: {
        flexDirection: 'row',
        margin: 15
    },
    title: {
        fontSize: 20,
        color: 'white'
    },
    desc: {
        fontSize: 13,
        color: 'white',
        marginTop: 10
    },
    viewPost: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    icPost: {
        height: 12,
        width: 12
    },
    txtPost: {
        fontSize: 11,
        color: 'rgba(255,255,255,0.3)',
        marginLeft: 5
    },
    marginLeft: {
        marginLeft: 25
    },
    txtStatus: {
        fontSize: 11,
        color: '#00FFCC'
    },
    viewStatus: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    img: {
        width: 100,
        height: 90,
        backgroundColor: 'green'
    }
});