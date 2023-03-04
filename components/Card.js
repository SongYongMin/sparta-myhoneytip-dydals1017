import React from "react"
import {View,Text,Image,StyleSheet} from "react-native";

//비구조 할당 방식으로 넘긴 속성 데이터를 꺼내 사용함
export default function Card({content}) {
    return (<View style={styles.card}>
        <Image style={styles.cardImage} source={{uri:content.image}}/>
        <View style={styles.cardText}>
          <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
          <Text style={styles.cardDesc} numberOfLines={3}>{content.desc}</Text>
          <Text style={styles.cardDate}>{content.date}</Text>
        </View>
      </View>)
}

const styles = StyleSheet.create({

  card:{
    flex:1,
    //컨텐츠들을 가로로 나열
    //세로로 나열은 column <- 디폴트 값임 
    flexDirection:"row",
    margin:10,
    borderBottomWidth:0.5,
    borderBottomColor:"#eee",
    paddingBottom:10

  },
  cardImage: {
    height: 111,
    width: 111,
    borderRadius: 12,
    flex: 1,
    marginRight: 12,
  },
  cardText: {
    flex:2,
    flexDirection:"column",
    marginLeft:10,
  },
  cardTitle: {
    color: '#ffff33',
    fontSize: 18.3,
    fontWeight: 700,
  },
  cardDesc: {
    color: '#ffffff',
    fontSize: 14.7,
  },
  cardDate: {
    color: '#999999',
    fontSize: 12,
  }
})