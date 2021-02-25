
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   astroidcontainer: {
       flex : 1,
       backgroundColor: 'grey',

   },
   astroidheader: {
       backgroundColor: '#E91E63',
       alignItems: 'center',
      
       borderBottomWidth: 10,
       borderBottomColor: '#ddd',
       height:150
    },
   astroidheaderText: {
       color: 'white',
       fontSize: 30,
       paddingTop: 70,
     
   },
   astroidtextInput: {
   
       alignSelf: 'stretch',
       color: '#fff',
       padding: 20,
       backgroundColor: '#252525',
       borderTopWidth: 2,
       borderTopColor: '#ededed',
    },
    astroidsubmit: {
        zIndex: 11,
        top:150,
        left:280,
        backgroundColor: '#E91E63',
        width: 100,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
   },
   randomastroidsubmit:{
    zIndex: 11,
    top:100,
    left:10,
    backgroundColor: '#E91E63',
    width: 200,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,  
   },
   randomastroidsubmitButtonText: {
    color: 'white',
    fontSize: 20,
},  
   astroidsubmitButtonText: {
       color: 'white',
       fontSize: 20,
  },  
  astroiddcontainer: {
   flex : 1,
   backgroundColor: 'grey',

   },
   astroiddheader: {
       backgroundColor: '#E91E63',
       alignItems: 'center',
   
       borderBottomWidth: 10,
       borderBottomColor: '#ddd',
       height: 150
   },
   astroiddheaderText: {
       color: 'white',
       fontSize: 30,
       paddingTop: 70,
   
   },
   astroiddweather: {
       position:'absolute',
       zIndex: 11,
       right: 150,
       bottom: 250,
       backgroundColor: '#E91E63',
       width: 150,
       height: 30,
       borderRadius: 10,
       alignItems: 'center',
       justifyContent: 'center',
       elevation: 10,
   },
   astroiddweatherReporttext: {
       color: 'white',
       fontSize: 15,
   },  
   astroiddtextastroiddetails:{
    
    fontSize: 20,
   },
   astroiddgetdetails: {
   position:'absolute',
   zIndex: 11,
   right: 350,
   bottom: 250,
   backgroundColor: '#E91E63',
   width: 150,
   height: 30,
   borderRadius: 10,
   alignItems: 'center',
   justifyContent: 'center',
   elevation: 10, 
   },
   astroiddgetdetailsText: {
   color: 'white',
   fontSize: 15
   },
   astroiddimagestyle:  {
   width: 200,
   height: 200
   },
   astroidwcontainer: {
       flex : 1,
       backgroundColor: 'grey',

   },
   astroidwheader: {
       backgroundColor: '#E91E63',
       alignItems: 'center',
   
       borderBottomWidth: 10,
       borderBottomColor: '#ddd',
       height: 150
   },
   astroidwheaderText: {
       color: 'white',
       fontSize: 30,
       paddingTop: 70,
   
   },
   astroidwtextastroiddetailsWeather:{

       fontSize: 20,
   },
   flagPic: {
       
      
       width: 300,
       height: 200
   },
   weather_icon: {
       width: 30,
       height: 20
   }
   
});
export default styles;