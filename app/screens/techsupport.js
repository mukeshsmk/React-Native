
import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, Button, View } from 'react-native';
import Modal from 'react-native-modal';

export default class Techsupport extends Component {
    state = {
        visibleModalId: null,
    };

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
              
                <Button
                    onPress={() => this.setState({ visibleModal: 'scrollable' })}
                    title="Scrollable"
                />
               
                <Modal
                    isVisible={this.state.visibleModal === 'scrollable'}
                    onSwipeComplete={() => this.setState({ visibleModal: null })}
                    swipeDirection="down"
                    scrollTo={this.handleScrollTo}
                    scrollOffset={this.state.scrollOffset}
                    scrollOffsetMax={400 - 300} // content height - ScrollView height
                    style={styles.bottomModal}
                >
                    <View style={styles.scrollableModal}>
                        <ScrollView
                            ref={ref => (this.scrollViewRef = ref)}
                            onScroll={this.handleOnScroll}
                            scrollEventThrottle={16}
                        >
                            <View style={styles.scrollableModalContent1}>
                                <Text style={styles.scrollableModalText1}>You can scroll me up! 👆</Text>
                                <Button
                                onPress={() => this.setState({ visibleModal: null })}
                                title="Scrollable"
                            />
                            </View>
                            <View style={styles.scrollableModalContent2}>
                                <Text style={styles.scrollableModalText2}>Same here as well! ☝</Text>
                                <Text style={styles.scrollableModalText2}>Same here as well! ☝</Text>
                                <Text style={styles.scrollableModalText2}>Same here as well! ☝</Text>

                                <Text style={styles.scrollableModalText2}>Same here as well! ☝</Text>
                                <Text style={styles.scrollableModalText2}>Same here as well! ☝</Text>
                                <Text style={styles.scrollableModalText2}>Same here as well! ☝</Text>
                                <Text style={styles.scrollableModalText2}>Same here as well! ☝</Text>
                                <Text style={styles.scrollableModalText2}>Same here as well! ☝</Text>
                                <Text style={styles.scrollableModalText2}>Same here as well! ☝</Text>
                                <Text style={styles.scrollableModalText2}>Same here as well! ☝</Text>
                                <Text style={styles.scrollableModalText2}>Same here as well! ☝</Text>
                                <Text style={styles.scrollableModalText2}>Same here as well! ☝</Text>

                                 <Text style={styles.scrollableModalText2}>Same here as well! ☝</Text>
                                 <Text style={styles.scrollableModalText2}>Same here as well! ☝</Text>
                                 <Text style={styles.scrollableModalText2}>Same here as well! ☝</Text>
                            </View>
                           
                            
                        </ScrollView>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
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
        height: 200,
        backgroundColor: '#87BBE0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollableModalText1: {
        fontSize: 20,
        color: 'white',
    },
    scrollableModalContent2: {
        height: '100%',
        backgroundColor: '#A9DCD3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollableModalText2: {
        fontSize: 20,
        color: 'white',
    },
});
