import { View, Text, SafeAreaView, StatusBar, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import AppBar from '../Components/AppBar'
import Brand from '../Components/Brand'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { login, selectUser } from '../redux/AuthReducer'
import { useSelector, useDispatch } from 'react-redux'

const LoginScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const handleChange = (val) => {
        //handle any change here 
        if (val.length > 0) {
            setErrors({})
            setUsername(val)
        } else {
            setUsername(null)
            setErrors({ 'username': 'Username Should not be blank' })
            return;
        }
    }
    const handlepassword = val => {
        //handle the change in password
        if (val.length > 0) {
            setErrors({})
            setPassword(val)
        } else {
            setPassword(null)
            setErrors({ 'password': 'password should not be Blank' })
            return;
        }
    }
    const ValidForm = () => {
        //validate form
        if (username === null) {
            setErrors({ 'username': 'Username is required' })
            return;
        } else if (password === null) {
            setErrors({ 'password': 'Password is required' })
            return;
        } else {
            return true
        }
    }
    const Login = async() => {
        try {
            const response = await fetch(`${process.env.API_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: username,
                    password: password
                })
            })
            const login_response = await response.json()
            if(login_response.error){
                console.log(login_response.error.message)
                setErrors({ 'login': login_response.error.message})
            }else{setErrors({ 'success': 'Successfully Logged In'})
            dispatch(login(login_response))
            setUsername('')
            setPassword('')
            //nvigate to a new page 
            navigation.navigate("dashboard")
            }
        } catch (error) {
            console.log(error)
        }
    }
    const SubmitForm = () => {
        //submit the forms 
        if (ValidForm()) {
            Login()
        }
    }
    return (
        <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }} className="h-screen">
            <KeyboardAvoidingView behavior='padding'>
                <AppBar />
                <Brand />
                <View className="h-3/4 w-full flex items-center z-10">
                    <View className="w-[90%] mx-auto p-4 space-y-4">
                        <Text className="text-3xl font-bold underline text-center">
                            Login
                        </Text>
                        <Text>
                            Username {errors.username ? (<Text className="text-red-500 font-bold">{errors.username}</Text>) : null}{errors.login ? (<Text className="text-red-500 font-bold">{errors.login}</Text>) : null}{errors.success ? (<Text className="text-center text-green-500 font-bold">{errors.success}</Text>) : null}
                        </Text>
                        <TextInput className={` p-1 ${errors.username ? "border border-red-500" : "border"}`} placeholder='Enter the username here' defaultValue={username} onChangeText={username => handleChange(username)} keyboardType='email-address' />
                        <Text className="mt-1">
                            Password {errors.password ? (<Text className="text-red-500 font-bold">{errors.password}</Text>) : null}
                        </Text>
                        <TextInput className={` p-1 ${errors.password ? "border border-red-500" : "border"}`} placeholder='Enter the password here' defaultValue={password} onChangeText={password => handlepassword(password)} secureTextEntry={true} />
                        <View className="mt-3">
                            <TouchableOpacity className="bg-[#ff6600] mt-4 p-2 rounded-lg" onPress={SubmitForm}>
                                <Text className="text-center text-white text-xl font-bold">
                                    Login
                                </Text>
                            </TouchableOpacity>
                            <View className="flex flex-row justify-between items-center mt-4">
                                <TouchableOpacity>
                                    <Text>
                                        Not Registered? <Text className="font-bold">Register Here</Text>
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text className="font-bold">
                                        Forgot Password
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default LoginScreen