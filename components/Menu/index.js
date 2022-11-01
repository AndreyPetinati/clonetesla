import React from 'react';
import { View,Text, TouchableOpacity, ImageBackground,Image,ScrollView } from 'react-native';
import styles from './styles';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import items from './items';
;

export default function Menu() {
 return (
   <ScrollView style={styles.menuItems}>
    {items.map(item =>(
        
            <TouchableOpacity key={item.id}>
                <View style={styles.menuRow}>
                    <FontAwesome5 name={item.name} style={styles.icon} size='24'/>
                        <View style={styles.menuTextBox}>
                            <Text style={styles.menuText}>{item.title}</Text>
                            {item.subTitle && (
                                <Text style={styles.subTitle}>{item.subTitle}</Text>
                            )}
                        </View>
                    <FontAwesome5 name='chevron-right' style={styles.icon} size='24'/>
                </View>
            </TouchableOpacity>
    
        
        
        ))}
    
    
       
          
               
          
           

        </ScrollView>
   
  );
}