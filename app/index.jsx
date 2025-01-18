import React from 'react';
import { StyleSheet, View, Text, TextInput, Pressable,FlatList,RefreshControl, ScrollView ,Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Index = () => {
    const[previnput,newinput] = React.useState('');
    const [tasks,setTask] = React.useState([]);
    const [refreshing , setRefreshing ]= React.useState(false);
function taskmaker (){
    if(previnput != ''){
        setTask([...tasks, previnput]);
    }
        newinput('');
}
function deletetask(index){
    setTask(tasks.filter((_, i)=>
        i != index
    ))
}


const onRefresh = () => {

    setRefreshing(true);

    setTimeout(() => {
        setRefreshing(false);
    }, 2000);
}
    return (
        <ScrollView contentContainerStyle={styles.container}  refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        } >

            <Text style={{ textAlign: 'center', fontSize: 40,fontWeight:700,marginTop:40 }}>Todo App</Text>
            <View style={{ width: '80%', marginTop: 10, flex: '1', flexDirection: 'row', gap: 10, justifyContent: 'center', }}>
                <TextInput placeholder='Enter your task...' value={previnput} style={{ borderWidth: 1, width: "70%", borderRadius: 5, paddingLeft: 10 }} onChangeText={(text)=>{
                    newinput(text)
                }} />

                <Pressable style={{ borderWidth: 1, borderColor: 'black', width: '30%', borderRadius: 5, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center'  }} onPress={taskmaker}>
                    <Text style={{ textAlign: 'center', color: '#fff' }}> Add </Text>
                </Pressable>
            </View>

            <FlatList 
            style={{width:'83%',marginTop:5}}
            data={tasks}
            renderItem={({item,index})=>(
                <View style={styles.flatlistinner} >
                <Text style={{color:'#fff'}}>{item}  </Text>
                <Pressable onPress={()=> deletetask(index)}  >
                    <Icon name='trash' size={20} color='white'></Icon>
                </Pressable>
               </View>
                
    )}
    keyExtractor={(item, index) => index.toString()}


            
            />


            {/* <Text>{tasks.filter()}</Text> */}

            
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    },
    flatlistinner:{
    width:'auto',
    // borderWidth:1,
    // borderColor:'red',
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'black',
      fontSize:20,
      paddingVertical:10,
      paddingHorizontal:10,
      borderRadius:5,marginTop:'20',
    
    }


})

export default Index;
