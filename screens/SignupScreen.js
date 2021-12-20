import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, Picker, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback} from 'react-native';

const SignupScreen = ({navigation}) => {
    const [first, onChangeFirst] = React.useState('');
    const [last, onChangeLast] = React.useState('');
    const [gender, setGender] = React.useState("other");
    const [email, onChangeEmail] = React.useState('');
    const [vEmail, onChangeVEmail] = React.useState('');
    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [vPassword, onChangeVPassword] = React.useState('');
    
    return (
        <View style={{flex:1}}>
            <View style = {{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-end', backgroundColor: 'black'}}>
                <Button
                    title="  Back"
                    onPress={() => navigation.navigate("Onboarding")} // needs to change to touchable and needs symbol
                />
            </View>
            <View style = {[styles.container, {flex: 12}]}>
                
                <Text style = {{fontSize: 40}}>Create Account</Text>
                <Button style ={styles.input}
                    title="Sign in with Google"
                    onPress={() => alert('sign in with google')}
                />
                <Button style ={styles.input}
                    title="Continue with Facebook"
                    onPress={() => alert('sign in with facebook')}
                />
                <Text style = {{fontSize: 25}}>Or</Text>
                <ScrollView>
                    <KeyboardAvoidingView style = {[styles.container, {flex: 5}]}>

                        <TextInput 
                            style={styles.input} 
                            onChangeText={onChangeFirst} 
                            value={first}
                            placeholder='First Name'
                        />

                        <TextInput 
                            style={styles.input} 
                            onChangeText={onChangeLast} 
                            value={last}
                            placeholder='Last Name'
                        />

                        <Text style = {{fontSize: 20}}>Birthday</Text> 
                    </KeyboardAvoidingView>

                        
                    <View style = {[styles.input, {flexDirection: 'row', borderWidth: 1,}]}>
                        <Text style = {{fontSize: 18}}>Gender</Text>
                        <Picker // Still needs work
                            selectedValue={gender}
                            style={{ height: 10, width: 150, alignSelf:'flex-end' }}
                            onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                        >
                            <Picker.Item label="Other" value="other" />
                            <Picker.Item label="Male" value="male" />
                            <Picker.Item label="Female" value="female" />
                        </Picker>
                    </View>

                    <KeyboardAvoidingView style = {styles.container}>
                        <TextInput 
                            style={styles.input} 
                            onChangeText={onChangeEmail} 
                            value={email}
                            placeholder='Email Address'
                        />
                        <TextInput 
                            style={styles.input} 
                            onChangeText={onChangeVEmail} 
                            value={vEmail}
                            placeholder='Verify Email Address'
                        />
                        <TextInput style=
                            {styles.input} 
                            onChangeText={onChangeUsername} 
                            value={username}
                            placeholder='Username'
                        />
                        <TextInput 
                            style={styles.input} 
                            onChangeText={onChangePassword} 
                            value={password}
                            placeholder='Password'
                            secureTextEntry
                        />
                        <TextInput 
                            style={styles.input} 
                            onChangeText={onChangeVPassword} 
                            value={vPassword}
                            placeholder='Verify Password'
                            secureTextEntry
                        />
                        
                        
                    
                    </KeyboardAvoidingView>
                    <TouchableWithoutFeedback onPress={() => alert('Create Account')}>
                    <View style = {{backgroundColor: 'black', width: 150, height:50, alignSelf: 
                        'center', alignItems:'center', justifyContent:'center'}}>
                        
                        <Text style= {{color: 'white', fontSize: 20 }}>Create Account</Text>
                    </View>
                    </TouchableWithoutFeedback>
                </ScrollView>
            </View>
        </View>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
       
      },
  });
