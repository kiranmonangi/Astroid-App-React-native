import React,{useState,useEffect} from 'react';

import { Text, View, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import styles from '../styles/AstroidStyles';

const Astroiddetails= ({navigation}) =>{

      const AstroidId=navigation.getParam('astroid', 'no-astroid');
      console.log("AstroidId:   "+AstroidId);
      const [astroidName, setAstroidName] = useState(''); 
      const [url, setUrl] = useState(''); 
      const [hazard, setHazaad] = useState(false); 
      const[magnitude,setMagnitude]=useState('');
      const astroiddata = async () => {
          try {
            const response = await axios.get(
           
            `http://www.neowsapp.com/rest/v1/neo/${AstroidId}?page=1&size=20&api_key=vdcg53nChDSElLSA1Mtbs9RRYYGvZgSA8uShOyaC `
            );
            
              let res= response.data;
  
               setAstroidName(res.name);
               console.log("astroidName :" + astroidName);
               setUrl(res.nasa_jpl_url);
               console.log(url);
      
               console.log(res.is_potentially_hazardous_asteroid);
               setHazaad(res.is_potentially_hazardous_asteroid);
               console.log("hazard :" + hazard);
               setMagnitude(res.absolute_magnitude_h);
          } catch (error) {
            navigation.navigate('Home');
            alert("you have entered a invalid astroid.. Enter a valid astroid");
          }
        };

        useEffect(()=>{
          console.log("sec :" + hazard);
        },[setHazaad])

        
        return(
         <View style={styles.astroiddcontainer} onLayout={astroiddata}>
                   
                 <View style={styles.astroiddheader}>
                      <Text style={styles.astroiddheaderText}> {astroidName} </Text>
                  </View>
                <View>
    
                  <Text style={styles.astroiddtextastroiddetails}>Asteroidname :  {astroidName} </Text>
                  <Text></Text>

                  <Text style={styles.astroiddtextastroiddetails}>Nasa_Jpl_url :   {url}</Text>
                  <Text></Text>
                  {/* <Text style={styles.astroiddtextastroiddetails}> {hazard}</Text> */}
                  <Text style={styles.astroiddtextastroiddetails}> Absolute Magnitude : {magnitude}</Text>
                  <Text></Text>

                                  
                </View>
                <TouchableOpacity style={styles.randomastroidsubmit} onPress={()=> navigation.navigate('Home')}>
                        <Text style={styles.randomastroidsubmitButtonText}> home </Text>
                </TouchableOpacity>

      </View>
        );
    };

export default Astroiddetails;