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
                    source={Images.hunter}/>
            </View>


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
    viewImg: {

        justifyContent: 'flex-start',
    },
    img: {
        height: 127,
        width: 170,
        borderRadius:5

    },
    title: {
        fontSize: 14,
        color: 'white',
        marginTop: 5,
        padding: 8
    },
    item: {
        borderRadius: 5,
        backgroundColor: 'green',
        marginRight: 11,
        marginVertical: 8,
        height: 240,
        width: 170,
    }

})