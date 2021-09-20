import * as React from 'react';
import {View, Text , StyleSheet, Image, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
// import images from '../assets/images';

Feather.loadFont();

export default function Home () {
    const renderCategoryItem =({item}) => {
        return(
            <View style={styles.categoryItemWrapper}>
                <Image source={item.image} style={styles.categoryItemImage}/>
                <Text style={styles.categoryItemTitle}>{item.title}</Text>
                <View style={styles.categorySelectWrapper}>
                    <Feather 
                    name="chevron-right" 
                    size={8}
                    style={styles.categorySelectIcon}
                    />
                </View>
            </View>
        );
    };
    return(
    <View style={styles.container}>
        {/* Header */}
        <SafeAreaView>
            <View style={styles.headerWrapper}>
                <Image 
                key={Date.now()}
                source={require('../assets/images/profile.png')} 
                style={styles.profileImage}/>
               


            <Feather name="menu" size={24} color={colors.textDark}/>
            </View>
        </SafeAreaView>

    {/* Titles */}
    <View style={styles.titlesWrapper}>
        <Text style={styles.titlesSubtitle}>Food</Text>
        <Text style={styles.titlesTitle}>Delivery</Text>
    </View>

    {/* Search */}
    
    <View style={styles.searchWrapper}>
        <Feather name="search" size={16} color={colors.textDark}/>
        <View style={styles.search}>
            <Text style={styles.searchText}>Search</Text>
        </View>
    </View>

    {/* Categories */}
    <View style={styles.categoriesWrapper}>
        <Text style={styles.categoriesTitle}>Categories</Text>
        <View style={styles.categoriesListWrapper}>
            <FlatList
                data={categoriesData}
                renderItem={renderCategoryItem}
                keyExtractor={item => item.id}
                horizontal={true}
             />
        </View>
        </View>
    </View> 
    )   
};

const styles = StyleSheet.create({
    container:{
        flex:1,
    },

    headerWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        paddingTop:20,
        alignItems:'center',
    
    },

    profileImage:{
        width:40,
        height:40,
        borderRadius:40,
    },

    titlesWrapper:{
        marginTop:30,
        paddingHorizontal:20,

    },
    titlesSubtitle:{
        fontFamily:'Raleway-Regular',
        fontSize:16,
        color:colors.textDark,

    },
    titlesTitle:{
        fontFamily:'Raleway-Bold',
        fontSize:32,
        color:colors.textDark,
        marginTop:5,
    },

    searchWrapper:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
        marginTop:30,
    },
    search:{
        flex:1,
        marginLeft:10,
        borderBottomColor: colors.textLight,
        borderBottomWidth:2,
    },

    searchText:{
        fontFamily:'Raleway-SemiBold',
        fontSize:14,
        marginBottom:5,
        color:colors.textLight,
    },

    categoriesWrapper:{
        marginTop:30,


    },
    categoriesTitle:{
        fontFamily:'Raleway-Bold',
        fontSize:16,
        paddingHorizontal:20,
    },
    categoriesListWrapper:{
        paddingTop:15,
        paddingBottom:20,

    },

    categoryItemWrapper:{
        backgroundColor:'#F5Ca48',
        marginRight:20,
        borderRadius:20,

    },
    categoryItemImage:{
        width:60,
        height:60,
        marginTop:25,
        alignSelf:'center',
        marginHorizontal:20,
    },
    categoryItemTitle:{
        textAlign:'center',
        fontFamily:'Raleway-SemiBold',
        fontSize:14,
        marginTop:10,

    },
    categorySelectWrapper:{
        alignSelf:'center',
        justifyContent:'center',
        marginTop:20,
        width:26,
        height:26,
        borderRadius:26,
        marginBottom:20,
    },
    categorySelectIcon:{},

});
