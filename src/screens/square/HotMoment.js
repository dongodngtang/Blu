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

export default class HotMoment extends Component {


    state = {
        data: [1, 2, 3, 4]
    }

    render() {
        return (<View style={{backgroundColor: '#252834', marginTop: 15}}>
            <Text style={styles.lbHot}>精选动态</Text>

            <FlatList
                style={{marginHorizontal: 8}}
                numColumns={2}
                data={this.state.data}
                extraData={this.state}
                renderItem={this._renderItem}/>

        </View>)
    }


    _renderItem = ({item}) => {

        return (<View style={styles.item}>

            <View style={styles.viewImg}>
                <Image
                    resizeMode='cover'
                    style={styles.img}
                    source={ {uri: 'http://img1.imgtn.bdimg.com/it/u=909890657,2585935063&fm=214&gp=0.jpg'}}/>
            </View>


            <Text
                numberOfLines={2}
                style={[styles.txtCard, {padding: 10, lineHeight: 20}]}>了卡技术的俩说了爱上大陆架法老师的法律界卡收到两份 交了</Text>

            <View style={styles.viewLike}>
                <Image
                    source={Images.up}
                    style={styles.imgLike}
                />
                <Text style={styles.txtNum}>32</Text>
                <Image
                    source={Images.comment}
                    style={[styles.imgLike, {marginLeft: 44}]}
                />
                <Text style={styles.txtNum}>32</Text>
            </View>

            <View style={[styles.viewLike, {
                marginTop: 10
            }]}>
                <Image
                    source={Images.avatar}
                    style={styles.imgAvatar}/>
                <Text style={styles.txtCard}>健康传奇</Text>
            </View>

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
    viewImg: {

        justifyContent: 'flex-start',
    },
    img: {
        height: 127,
        width: 170,
        borderRadius: 5

    },
    title: {
        fontSize: 14,
        color: 'white',
        padding: 10
    },
    item: {
        borderRadius: 5,
        backgroundColor: '#1B1E27',
        marginRight: 11,
        marginVertical: 8,
        height: 250,
        width: 170
    },
    imgLike: {
        width: 13,
        height: 13
    },
    viewLike: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10
    },
    imgAvatar: {
        height: 25,
        width: 25,
        borderRadius: 12.5,
        marginRight: 5
    },
    txtCard: {
        fontSize: 12,
        color: '#707888'
    },
    txtNum: {
        fontSize: 12,
        color: 'white',
        marginLeft: 5
    }

})