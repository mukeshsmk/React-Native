
import React, { Component } from 'react';
import { FlatList, TextInput, Linking, ScrollView, TouchableOpacity, Image, StyleSheet, Text, Button, View } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Techsupport extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, date: "9:50 am", type: 'out', message: "Lorem ipsum dolor sit amet" },
                { id: 1, date: "9:50 am", type: 'out', message: "Lorem ipsum dolor sit amet" },
                { id: 1, date: "9:50 am", type: 'out', message: "Lorem ipsum dolor sit amet" },
                { id: 1, date: "9:50 am", type: 'out', message: "Lorem ipsum dolor sit amet" },
                { id: 1, date: "9:50 am", type: 'out', message: "Lorem ipsum dolor sit amet" },
                { id: 1, date: "9:50 am", type: 'out', message: "Lorem ipsum dolor sit amet" },


            ],
            visibleModalId: null,
        };
    }

    renderDate = (date) => {
        return (
            <Text style={styles.time}>
                {date}
            </Text>
        );
    }


    renderModalContent = () => (
        <View style={styles.content}>
            <Text style={styles.contentTitle}>Hi 👋!</Text>
            <Button
                onPress={() => this.setState({ visibleModal: null })}
                title="Close"
            />
        </View>
    );

    handleOnScroll = event => {
        this.setState({
            scrollOffset: event.nativeEvent.contentOffset.y,
        });
    };

    handleScrollTo = p => {
        if (this.scrollViewRef) {
            this.scrollViewRef.scrollTo(p);
        }
    };

    render() {
        return (
            <View style={styles.container}>



                <View style={styles.feedback}>
                    <Text style={styles.name}>Hi Jayakarthikeyan 👆</Text>
                    <Text style={styles.feedbackText}>Ask us anythging or share your feedback</Text>

                </View>

                <View style={styles.Card}>
                    <Text style={styles.cardStart}>Start a conversation </Text>
                    <Text style={styles.cardText}>Typically replies in a few hours </Text>
                    <View style={styles.flexbox}>
                        <View>
                            <Image source={{ uri: "https://www.morpht.com/sites/morpht/files/styles/landscape/public/dalibor-matura_1.jpg" }}
                                style={styles.imageIcon} />
                        </View>
                        <View>
                            <Image source={{ uri: "http://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-101-e1485815933252.jpg" }}
                                style={styles.imageIcon} />
                        </View>
                        <View style={styles.BtnView}>
                            <TouchableOpacity style={styles.conversationBtn}>
                                <Icon name="paper-plane" style={styles.sendIcon}>
                                    <Text style={styles.Btntext} onPress={() => this.setState({ visibleModal: 'scrollable' })}>New conversation</Text>
                                </Icon>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Text style={styles.previousText}> See previous </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.footerView} >
                    <TouchableOpacity>
                        <Text style={styles.footerText} onPress={() => Linking.openURL('https://www.intercom.com/')}>
                            We run on Intercom
                            </Text>
                    </TouchableOpacity>
                </View>

                <Modal
                    isVisible={this.state.visibleModal === 'scrollable'}
                    onSwipeComplete={() => this.setState({ visibleModal: null })}
                    swipeDirection="down"
                    scrollTo={this.handleScrollTo}
                    scrollOffset={this.state.scrollOffset}
                    scrollOffsetMax={400 - 300}
                    style={styles.bottomModal}
                >
                    <View style={styles.scrollableModal}>
                        <ScrollView
                            ref={ref => (this.scrollViewRef = ref)}
                            onScroll={this.handleOnScroll}
                            scrollEventThrottle={16}
                        >
                            <View style={styles.scrollableModalContent1}>
                                <View style={styles.feedback}>
                                    <Text style={[styles.name, { marginleft: 50 }]}>EthOS Team  <Icon name="times-circle" style={styles.menuIcon}
                                        onPress={() => this.setState({ visibleModal: null })} /></Text>
                                    <Text style={styles.feedbackText}>Ask us anythging or share your feedback</Text>
                                    <View style={[styles.flexbox, { justifyContent: 'center', alignItems: 'center',marginBottom: 10 }]}>
                                        <View style={{ marginRight: 20 }}>
                                            <Image source={{ uri: "https://www.morpht.com/sites/morpht/files/styles/landscape/public/dalibor-matura_1.jpg" }}
                                                style={styles.imageIcon} />
                                        </View>
                                        <View style={{ marginRight: 70 }}>
                                            <Image source={{ uri: "http://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-101-e1485815933252.jpg" }}
                                                style={styles.imageIcon} />
                                        </View>
                                       
                                    </View>
                                    <View style= {{ flex: 1,marginLeft: 20}}>
                                            <TouchableOpacity>
                                                <Text style={{ color:'#fff' }}> Typically replies in a few hours</Text>
                                            </TouchableOpacity>
                                        </View>

                                </View>

                                {/* <Button
                                    onPress={() => this.setState({ visibleModal: null })}
                                    title="Scrollable"
                                /> */}
                            </View>
                            <View style={styles.scrollableModalContent2}>

                                <FlatList style={styles.list}
                                    data={this.state.data}
                                    keyExtractor={(item) => {
                                        return item.id;
                                    }}
                                    renderItem={(message) => {
                                        console.log(item);
                                        const item = message.item;
                                        let inMessage = item.type === 'in';
                                        let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
                                        return (
                                            <View style={{ flex: 1, width: '100%', height: '100%', }}>
                                                {!inMessage && this.renderDate(item.date)}
                                                <View style={[styles.item, itemStyle]}>

                                                    <Text style={styles.msg}>{item.message}</Text>

                                                </View>
                                                {inMessage && this.renderDate(item.date)}
                                            </View>
                                        )

                                    }} />

                            </View>
                        </ScrollView>
                    </View>
                </Modal>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    feedback: {
        width: '100%',
        height: 200,
        paddingLeft: '20%',
        backgroundColor: '#2f97e6',
    },
    name: {
        marginTop: 15,
        marginBottom: 15,
        fontSize: 28,
        color: '#ffffff'
    },
    feedbackText: {
        color: '#ffffff'
    },
    Card: {
        position: 'relative',
        bottom: '12%',
        width: '90%',
        padding: '5%',
        margin: '1%',
        backgroundColor: '#ffffff',
        borderRadius: 4,
        borderColor: '#aeaeaea1',
        borderWidth: 1

    },
    cardStart: {
        color: '#000000',
    },
    flexbox: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 60
    },
    imageIcon: {
        width: 50,
        height: 50,
        alignSelf: 'center',
        borderRadius: 360,
    },
    sendIcon: {
        color: '#000000',
    },
    BtnView: {
        marginLeft: '12%',
    },
    Btntext: {
        color: '#ffffff',
        fontSize: 14,
        paddingLeft: 10,
        paddingRight: 10,
    },
    conversationBtn: {
        width: '100%',
        paddingTop: 12,
        paddingBottom: 25,
        paddingLeft: 15,
        paddingRight: 15,
        color: '#ffffff',
        backgroundColor: '#2f97e6',
        borderRadius: 30,
    },
    previousText: {
        color: '#2f97e6',
    },
    footerView: {
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: '100%',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#f1f3f4',
    },
    footerText: {
        color: '#535252',
    },
    content: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    contentTitle: {
        fontSize: 20,
        marginBottom: 12,
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    scrollableModal: {
        height: '100%',
    },
    scrollableModalContent1: {
        backgroundColor: '#ffffff',

    },
    scrollableModalText1: {
        fontSize: 20,
        color: 'white',
    },
    scrollableModalContent2: {
        height: '100%',
        backgroundColor: '#ffffff',
    },
    scrollableModalText2: {
        fontSize: 20,
        color: 'white',
    },
    list: {
        paddingHorizontal: 17,
    },
    footer: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#ffffff',
        paddingHorizontal: 10,
        padding: 5,
        borderTopColor: '#e7e7e7',
        borderTopWidth: 1,
    },
    uploadIcon: {
        fontSize: 24,
        color: '#2ba1d0',
        margin: 10,
    },
    btnSend: {
        backgroundColor: "#00BFFF",
        width: 40,
        height: 40,
        borderRadius: 360,
        alignItems: 'center',
        justifyContent: 'center',
    },

    iconSend: {
        width: 30,
        height: 30,
        alignSelf: 'center',
    },
    inputContainer: {
        borderColor: '#a4a4a4',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        borderWidth: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginRight: 10,
    },
    inputs: {
        height: 40,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    balloon: {
        maxWidth: 250,
        padding: 15,
        borderRadius: 20,
    },
    itemIn: {
        alignSelf: 'flex-start'
    },
    itemOut: {
        alignSelf: 'flex-end'
    },
    time: {
        alignSelf: 'flex-end',
        margin: 15,
        fontSize: 12,
        color: "#808080",
    },
    msg: {
        color: '#fff',
    },
    item: {
        marginVertical: 14,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#9ea09fdb',

        borderRadius: 5,
        padding: 10,
    },
    menuIcon: {
        position: 'relative',
        bottom: 0,
        fontSize: 32,
        color: '#ffffff',
        marginRight: 5,
    }
});
