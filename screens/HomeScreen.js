import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, ScrollView, SafeAreaView, StatusBar } from 'react-native';

const HomeScreen = ({navigation}) => {
    const [search, onChangeSearch] = React.useState('');
    return (
        <View style={{flex: 1, backgroundColor:'#EDF6F9'}}>
            
            <SafeAreaView>
                <StatusBar barStyle="dark-content"/>
            </SafeAreaView>

            <View style = {[styles.container,{flex: '93%'}]}>
                <View style = {{flexDirection: 'row', flex: '7.5%',}}>
                    <Text style = {{fontSize: 40, alignSelf:'center'}}>New Kickbacks</Text>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Onboarding")}>
                        <Text style = {{backgroundColor: 'grey', height:'100%', color: 'blue'}}>Settngs</Text>
                    </TouchableWithoutFeedback>
                </View>

                <View style = {[styles.event, {flex: '7.5%', flexDirection:'row'}]}>
                    <TextInput 
                        style={{flex:1, padding: 5}} 
                        onChangeText={onChangeSearch} 
                        value={search}
                        placeholder='Search'    
                    />
                </View>
                <View style = {{flex: '85%'}}>
                    <ScrollView showsVerticalScrollIndicator ={false}>
                        <View style = {[styles.container, {flex:6, justifyContent: 'flex-start', width: 400,}]}>
                            <Text style = {{fontSize: 14, fontWeight: 'bold', alignSelf:'flex-start'}}>Upcoming Events</Text>
                            <TouchableWithoutFeedback onPress={() => alert('Go to Event 1')}>
                                <View style = {styles.event}>
                                    <View style = {{width:10}}></View>
                                    <View style ={{borderWidth:1, height: 70, width:70,
                                        borderColor:'black',borderRadius:35, justifyContent:'center', alignItems:'center'}}>
                                        <Text>Image here</Text>
                                    </View>
                                    <View style = {{width:10}}></View>
                                    <View style = {{width:260,}}>
                                        <Text style = {{fontWeight:'bold'}}>Event 1</Text>
                                        <Text>Description</Text>
                                        <Text>Date</Text>
                                        <Text style = {{fontSize: 10}}>Friends going</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={() => alert('Go to Event 2')}>
                                <View style = {styles.event}>
                                    <View style ={{flex:'22.5%',borderWidth:1}}>
                                        <Text>Image here</Text>
                                    </View>
                                    <View style = {{flex:'77.5%'}}>
                                        <Text style = {{fontWeight:'bold'}}>Event 2</Text>
                                        <Text>Description</Text>
                                        <Text>Date</Text>
                                        <Text style = {{fontSize: 10}}>Friends going</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>    
                            
                            <TouchableWithoutFeedback onPress={() => alert('Go to Event 3')}>
                                <View style = {styles.event}>
                                    <View style ={{flex:'22.5%',borderWidth:1}}>
                                        <Text>Image here</Text>
                                    </View>
                                    <View style = {{flex:'77.5%'}}>
                                        <Text style = {{fontWeight:'bold'}}>Event 3</Text>
                                        <Text>Description</Text>
                                        <Text>Date</Text>
                                        <Text style = {{fontSize: 10}}>Friends going</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        
                        <View style = {[styles.container,{flex:6, justifyContent: 'flex-start', width: 400}]}>
                            <Text style = {{fontSize: 14, fontWeight: 'bold', alignSelf:'flex-start'}}>Suggested Events</Text>
                            <View style = {{width: 400, alignItems:'center'}}>
                                
                                    <TouchableWithoutFeedback onPress={() => alert('Go to Event 4')}>
                                        <View style = {styles.event}>
                                            <View style ={{flex:'22.5%',borderWidth:1}}>
                                                <Text>Image here</Text>
                                            </View>
                                            <View style = {{flex:'77.5%'}}>
                                                <Text style = {{fontWeight:'bold'}}>Event 4</Text>
                                                <Text>Description</Text>
                                                <Text>Date</Text>
                                                <Text style = {{fontSize: 10}}>Friends going</Text>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>

                                    <TouchableWithoutFeedback onPress={() => alert('Go to Event 5')}>
                                        <View style = {styles.event}>
                                            <View style ={{flex:'22.5%',borderWidth:1}}>
                                                <Text>Image here</Text>
                                            </View>
                                            <View style = {{flex:'77.5%'}}>
                                                <Text style = {{fontWeight:'bold'}}>Event 5</Text>
                                                <Text>Description</Text>
                                                <Text>Date</Text>
                                                <Text style = {{fontSize: 10,}}>Friends going</Text>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>

                                    <TouchableWithoutFeedback onPress={() => alert('Go to Event 6')}>
                                        <View style = {styles.event}>
                                            <View style ={{flex:'22.5%',borderWidth:1}}>
                                                <Text>Image here</Text>
                                            </View>
                                            <View style = {{flex:'77.5%'}}>
                                                <Text style = {{fontWeight:'bold'}}>Event 6</Text>
                                                <Text>Description</Text>
                                                <Text>Date</Text>
                                                <Text style = {{fontSize: 10}}>Friends going</Text>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>

                                    <TouchableWithoutFeedback onPress={() => alert('Go to Event 7')}>
                                        <View style = {styles.event}>
                                            <View style ={{flex:'22.5%',borderWidth:1}}>
                                                <Text>Image here</Text>
                                            </View>
                                            <View style = {{flex:'77.5%'}}>
                                                <Text style = {{fontWeight:'bold'}}>Event 7</Text>
                                                <Text>Description</Text>
                                                <Text>Date</Text>
                                                <Text style = {{fontSize: 10}}>Friends going</Text>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>

                                    <TouchableWithoutFeedback onPress={() => alert('Go to Event 8')}>
                                        <View style = {styles.event}>
                                            <View style ={{flex:'22.5%',borderWidth:1}}>
                                                <Text>Image here</Text>
                                            </View>
                                            <View style = {{flex:'77.5%'}}>
                                                <Text style = {{fontWeight:'bold'}}>Event 8</Text>
                                                <Text>Description</Text>
                                                <Text>Date</Text>
                                                <Text style = {{fontSize: 10}}>Friends going</Text>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                
                                    <TouchableWithoutFeedback onPress={() => alert('Go to Event 9')}>
                                        <View style = {styles.event}>
                                            <View style ={{flex:'22.5%',borderWidth:1}}>
                                                <Text>Image here</Text>
                                            </View>
                                            <View style = {{flex:'77.5%'}}>
                                                <Text style = {{fontWeight:'bold'}}>Event 9</Text>
                                                <Text>Description</Text>
                                                <Text>Date</Text>
                                                <Text style = {{fontSize: 10}}>Friends going</Text>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
            
            

            <View style = {[styles.container, {flex: '7%', backgroundColor:'#023047', width:'100%', alignSelf:'center'}]}>
                <View style= {{flexDirection: 'row', justifyContent: 'space-evenly', alignItems:'center', width: 400,}}>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
                            <Text style = {{color:'white'}}>Home</Text>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => alert('Host')}>
                            <Text style = {{color:'white'}}>Host</Text>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => navigation.navigate("AddFriend")}>
                            <Text style = {{color:'white'}}>Add Friend</Text>
                        </TouchableWithoutFeedback>
                </View>
            </View>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        height: 40,
        width: 450,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center',
      },
    event: {
        height: 70,
        width: 350,
        margin: 15,
        borderWidth:0,
        flexDirection:'row',
        backgroundColor:'white',
        shadowOffset: {
            width: 5,
            height: 5,
          },
        shadowOpacity:0.1,
    },
  });