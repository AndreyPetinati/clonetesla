import React, {useState} from 'react';
import styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { View,Text, TouchableOpacity, ImageBackground,Image } from 'react-native';
import Menu from '../Menu/index';

export default function CarItem() {
 
 const [locked,setLocked] = useState(true)
 const clickLock = () => {
  if (locked) {
    setLocked(false);
  }else {
    setLocked(true);
  }
 }
  return (
    
        <View style={styles.carContainer}>
          
          <ImageBackground 
          source= {require('../../assets/background.png')} 
          style={styles.backgroundImage}/>
          
          <View style={styles.header}>
            
            
            
            <TouchableOpacity style={styles.header}>
              <FontAwesome5 style={styles.icon}size='24'name='cog'/>
            </TouchableOpacity>
            
            <Text style={styles.headerTitle}>Tesla App</Text>
            
            <TouchableOpacity style={styles.header}>
              <FontAwesome5 style={styles.icon} size='24'name='toolbox'/>
            </TouchableOpacity>


          </View>

          <View style={styles.batterySection}>
              <Image 
              source={require('../../assets/battery.png')}
              style={styles.batteryImage}/>
              <Text style={styles.batteryText}>150 mi</Text>
          </View>
            
            <View style={styles.status}>
              <Text style={{color:'white',fontSize:23,fontWeight:"bold"}}>Parked</Text>
            </View>

            
            <View style={styles.controls}>
              
              <TouchableOpacity>
                
                <View style={styles.controlsButton}>
                    <FontAwesome5 style={styles.icon}size='24'name='fan'/>
                </View>
              </TouchableOpacity>
              
              <TouchableOpacity>
                <View style={styles.controlsButton}>
                    <FontAwesome5 style={styles.icon}size='24'name='key'/>
                </View>
              </TouchableOpacity>
                
              <TouchableOpacity
              onPress= {clickLock}>
                <View style={styles.controlsButton}>
                    <FontAwesome5 style={styles.icon}size='24' name={locked ? 'lock' : 'unlock'} />
                </View>
              </TouchableOpacity>
                

              
              
                
            </View>
            <Menu/>

        </View>
    
  
  );
}
