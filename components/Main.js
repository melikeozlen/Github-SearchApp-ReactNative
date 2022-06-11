import React, {useState,useEffect} from 'react'
import { Text, View, TextInput, StyleSheet, Button, Image, Pressable  } from 'react-native'

const Main = () => {
  
    const [username, setUsername] = useState('melikeozlen')
    const [search, setSearch] = useState('')
    const [name, setName] = useState('')
    const [data, setData] = useState('')
    const [date, setDate] = useState('')
    const fetchMyUser = () => {
        fetch (`https://api.github.com/users/${username}`)
        .then (response => response.json())
        .then (data => {
            let create = new Date(data.created_at)
            setDate(create.toLocaleDateString());
            setData(data);
        })
    }
    useEffect (() => {
        fetchMyUser();
    }, [search])
    
    const handlePress = () => {
        setSearch(username.trim())
    }
  return (
    <> 

    <View>
        <TextInput style ={styles.input}
        placeholder = "Enter username"
        onChangeText = {(text) => setUsername(text)}
        value = {username}
        />
         <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.text}>search</Text>
        </Pressable>
        {
            data.login ?
            <View style={{alignItems:'center'}}>
                <View style={styles.container} >
                    <Image
                    source = {{uri: data ? data.avatar_url : "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"}}
                    style = {styles.image}
                    />
                    <View  style={styles.element}>
                         <Text style={{color:'white', fontSize:20, fontWeight:'bold',  fontFamily: 'SpaceMono-Regular', textTransform:'uppercase'}}>{data ? data.name : "NotFound"} </Text>
                        <Text style={{color:'hsla(212, 100%, 50%, 1.0)', marginTop:2}}>@{data.login} </Text>
                    </View> 
                </View>
                
               <View style={styles.container2}>
                
                <Text style={styles.Text}>Bio: {data.bio ? data.bio : "No bio"} </Text>
                <Text style={styles.Text}>Blog: {data.blog ? data.blog : "No blog Adress"} </Text>
                <Text style={styles.Text}>Company: {data.company ? data.company : "No company"} </Text>
                <Text style={styles.Text}>Email: {data.email ? data.email : "No email"} </Text>
                <Text style={styles.Text}>Followers: {data.followers}</Text>
                <Text style={styles.Text}>Following: {data.following}</Text>
                <Text style={styles.Text}>Join: {date}</Text>
                </View>
            </View> 
            :
                search ? 
                <Text style={{color:'white', textAlign:'center', fontWeight:'bold', marginTop:50}}>USER NOT FOUND...</Text> 
                :
                 <Text style={{color:'white', textAlign:'center', fontWeight:'bold', marginTop:50}}>Please enter a username</Text>
         
            
        }
    
    </View>
    </>
  )
}

export default Main

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#F5FCFF',
        marginTop: 44,
    },
    container2: {
        backgroundColor:'hsla(222, 41%, 20%, 1.0)',
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginTop: 150,
        borderRadius: 20,
        
    },
   Text: {
        color: 'white',
        fontSize: 15,
        fontFamily:'roboto-regular',
        marginTop: 5,
        
    },
    input: {
        borderColor:'blue',
        margin:5,
        borderRadius: 5,
        fontSize: 18,
        marginTop: 10,
        marginHorizontal: 10,
        color: 'white',
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor:'hsla(222, 41%, 20%, 1.0)'
    },
    image: {
        width:100,
        height:100,
        margin:15,
        borderRadius: 50,
    },
    element: {
        margin: 5,
        padding: 10,
        height: 50,
    },
    button: {
        width:70,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 10,
        elevation: 3,
        backgroundColor:'hsla(212, 100%, 50%, 1.0)',
        marginHorizontal: 300,
    
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        fontFamily: 'SpaceMono-Regular',
      },
})