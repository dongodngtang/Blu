import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import {BleManager} from 'react-native-ble-plx';
import find from 'lodash/find';
import isEqual from 'lodash/isEqual';

const SERVICE_UUID = '46A970E0-0D5F-11E2-8B5E-0002A5D5C51B';
const CHAR_UUID = '0AAD7EA0-0D60-11E2-8E3C-0002A5D5C51B';

class Push extends React.Component {

    constructor(props) {
        super(props);
        this.manager = new BleManager();
        this.state = {
            devices: [],
            deviceServices: [],
            serviceCharacteristics: [],
            connectedDevice: undefined,
            readValue: '',
            log: 'Entry point',
            poweredOn: false
        }

        this.msg =[];
    }


    componentWillMount() {
        const subscription = this.manager.onStateChange((state) => {
            if (state === 'PoweredOn') {
                this.setState({
                    log: 'PoweredOn',
                    poweredOn: true
                });
                this.scanAndConnect();
                subscription.remove();
            } else
                this.setState({
                    log: 'PoweredOff',
                    poweredOn: false
                })
        }, true);
    }

    componentWillUnmount() {
        this.manager.destroy();
        delete this.manager;
    }

    logger = (msg) => {
        return this.msg.concat(msg + '\n')
    };

    render() {

        const {poweredOn, log} = this.state;

        return (
            <ScrollView style={styles.container}>

                <Text>{this.logger(log)}</Text>
                <View
                    style={{
            backgroundColor: 'pink',
            marginTop: 20,
            marginBottom:20
          }}
                >
                    <Text>{poweredOn ? '蓝牙已打开' : '蓝牙开关未打开'}</Text>


                    {this.state.connectedDevice ? (
                            <View>
                                <View>
                                    <Text>
                                        已连接蓝牙: {this.state.connectedDevice.name}
                                    </Text>
                                </View>
                            </View>
                        ) : <Text>还没有连接蓝牙!!</Text>
                    }
                    {this.state.deviceServices ? (
                            <View>
                                <Text>
                                    Supported Services:
                                </Text>
                                <View>
                                    {this.state.deviceServices && this.state.deviceServices.map((service) => {
                                        return (
                                            <Text>
                                                {service.uuid}
                                            </Text>
                                        )
                                    })}
                                </View>
                            </View>
                        ) : <Text>Discovered Services: {this.state.deviceServices.length}</Text>}
                    {this.state.serviceCharacteristics ? (
                            <View>
                                <Text>
                                    Supported Characteristics:
                                </Text>
                                <View>
                                    {this.state.serviceCharacteristics && this.state.serviceCharacteristics.map((characteristic) => {
                                        return (
                                            <Text>
                                                {characteristic.uuid}
                                            </Text>
                                        )
                                    })}
                                </View>
                            </View>
                        ) : <Text>Discovered Characteristics: {this.state.serviceCharacteristics.length}</Text>}
                </View>
                <View>
                    <Text>搜索到的设备：</Text>
                    {this.state.devices.map((device) => (
                        <View
                            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              height: 40,
            }}
                        >
                            <View>
                                <Text style={styles.instructions}>
                                    {device.name}
                                </Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => this.onDeviceSelect(device)}
                                style={{
                backgroundColor: 'gray',
              }}
                            >
                                <Text>
                                    Connect
                                </Text>
                            </TouchableOpacity>
                        </View>

                    ))}
                </View>

                <View>
                    <Text>
                        Read Value: {this.state.readValue}
                    </Text>
                </View>
            </ScrollView>
        );
    }


    scanAndConnect() {
        this.manager.startDeviceScan(null, null, (error, device) => {
            if (error) {
                return
            }
            if (device.id && device.name) {
                if (!find(this.state.devices, (prediscoveredDevice) => prediscoveredDevice.id === device.id)) {
                    this.setState({
                        devices: [
                            ...this.state.devices,
                            device,
                        ],
                    })
                }
            }
        });
    }

    onDeviceSelect = (device) => {
        this.setState({
            connectedDevice: device,
        });
        this.manager.stopDeviceScan();
    };

    componentDidUpdate = (prevProps, prevState) => {
        if (!isEqual(prevState.connectedDevice, this.state.connectedDevice)) {
            if (this.state.connectedDevice && this.state.connectedDevice.connect) {
                this.setState({
                    log: 'yolo!',
                })
                this.tryConnectToDevice(this.state.connectedDevice)
            }
        }
    }

    connectToService = (device, serviceUuid) => {

    }

    tryConnectToDevice = (device) => {
        if (device.connect) { // check if it is actual bluetooth device
            device.connect()
                .then((device) => {
                    this.setState({
                        log: `connected to device: ${device.name}`
                    })
                    return device.discoverAllServicesAndCharacteristics()
                })
                .then((device) => {
                    this.setState({
                        log: `discovered all services and characteristics for : ${device.name}`,
                    })
                    return device.services()
                })
                .then((services) => {
                    this.setState({
                        log: `resolved services() for : ${device.name}`,
                        deviceServices: services,
                    })
                    // const serviceToRead = find(services, (service) => service.uuid === SERVICE_UUID)
                    const serviceToRead = services[0]
                    return serviceToRead.characteristics()
                })
                .then((characteristics) => {
                    // const characteristicToRead = find(characteristics, (characteristic) => characteristic.uuid === CHAR_UUID)
                    const characteristicToRead = characteristics[0]
                    this.setState({
                        log: `resolved characteristics() for : ${device.name}`,
                        serviceCharacteristics: characteristics,
                    })
                    return characteristicToRead.monitor((error, characteristic) => {
                        if (error) {
                            return Promise.reject('Failed to monitor from characteristic');
                        }
                        this.setState({
                            readValue: characteristic.value,
                        })
                    })
                })
                .catch((error) => {
                    this.setState({
                        error: error,
                        log: error,
                    })
                });
        }
    }


}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default Push;
