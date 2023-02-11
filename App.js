import React from 'react';
import main from './assets/main.png';
import pizzaImg from './assets/pizza.png';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.화면}>
      <Text style={styles.제목}>나만의 꿀팁</Text>
      <Image style={styles.메인이미지} source={main} />
      <ScrollView style={styles.중간박스구역} horizontal indicatorStyle="white">
        <TouchableOpacity style={styles.중간박스1}><Text style={styles.중간박스글}>미   용</Text></TouchableOpacity>
        <TouchableOpacity style={styles.중간박스2}><Text style={styles.중간박스글}>재테크</Text></TouchableOpacity>
        <TouchableOpacity style={styles.중간박스3}><Text style={styles.중간박스글}>할   인</Text></TouchableOpacity>
        <TouchableOpacity style={styles.중간박스4}><Text style={styles.중간박스글}>바디프로필</Text></TouchableOpacity>
      </ScrollView>
      <View style={styles.카드구역}>
        <Image style={styles.카드이미지} source={pizzaImg} />
        <View style={styles.카드글상자}>
            <Text style={styles.카드제목}>먹다 남은 피자를 촉촉하게!</Text>
            <Text style={styles.카드상세} numberOfLines={3}>먹다 남은 피자는 수분이 날라가기 때문에 처음처럼 맛있게 먹을 수 없는데요. 이럴 경우 그릇에 물을 받아 전자레인지 안에서 1분 30초에서 2분 정도 함께 돌려주면 촉촉하게 먹을 수 있습니다. 물이 전자레인지 안에서 수증기를 일으키고, 피자에 촉촉함을 더해줍니다.</Text>
            <Text style={styles.카드날짜}>2020.09.09</Text>
          </View>
      </View>

    </ScrollView>

  )

}

const styles = StyleSheet.create({
  화면: {
    backgroundColor: '#fff',
  },
  제목: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 50,
    marginLeft: 20
  },
  메인이미지: {
    width: '90%',
    height: 200,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "center"
  },
  중간박스구역: {
    //backgroundColor: 'green', //범위 확인용 
    //borderWidth:2,
    //borderColor:'black',
    marginTop: 20,
    marginLeft: 20,
    
  },
  중간박스1: {                  //여러개 공통되는 다중 설정은 어떻게?
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: '#ff00ff',  //색상표 https://all4cs.tistory.com/50
    borderRadius: 15,             //색상표 스크립트 복붙어케 하지?
    margin: 7,                     //256색상표 http://www.n2n.pe.kr/lev-1/color.htm
    //flexDirection:"column",     //글자 상하 중간 맞추기, 하~~ 2시간 삽질
    //justifyContent:"center",
    //alignItems:"center",        //align 종류별 익히기, 박스 단위 던지 텍스트에 직접 정렿하던지....
    //alignContent:"center",    //Text는 안먹음... Content와 Items 차이 공부 필요
    //textAlign:"center"        //이건 어디 적용되는 겨?

  },
  중간박스2: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: '#6633ff',
    borderRadius: 15,
    margin: 7,
    //flexDirection:"column", //글자 상하 중간 맞추기, 하~~ 2시간 삽질
    //justifyContent:"center",
    //alignItems:"center",
  },
  중간박스3: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: '#006600',
    borderRadius: 15,
    margin: 7,
    //flexDirection:"column", //글자 상하 중간 맞추기, 하~~ 2시간 삽질
    //justifyContent:"center",
    //alignItems:"center",
  },
  중간박스4: {
    // flex: 1,
    width: 100,
    height: 50,
    //padding: 15,
    backgroundColor: '#0000cc',
    borderRadius: 15,
    margin: 7,
    flexDirection: "column", //글자 상하 중간 맞추기, 하~~ 2시간 삽질
    justifyContent: "center",
    //alignItems:"center",
  },

  중간박스글: {
    color: 'white',
    fontWeight:"700",
    //textAlignVertical:"center",  //왜 안될까?
    textAlign: "center",
    // alignContent:"center",
    // alignItems:"center",    
    // alignSelf:"center"
  },
  카드구역: {
    margin:20,
    display:"flex",
    flexDirection:"row",
    //borderColor:"'red'",
    //borderWidth:5,
  },

 카드이미지: {
    // backgroundColor:'red',  //영역확인용
    height:120,
    width:102,
    marginRight:9.3,
    borderRadius: 15,
    //borderColor:"'red'",
    borderWidth: 5,    
    flex:1,
  },
  카드글상자: {
    //backgroundColor:"#ccffcc",    //확인용 배경색
    //borderColor:"#000000",      //확인용 틀색상
    //borderWidth: 5,             //확인용 틀두께
    height:120,
    //marginBottom:20,
    flex:2.5,    
  },
  카드제목:{
    fontSize:21,
    color:"#000099",           //"blue" 보다 진한 청색
    fontWeight:"bold",

  },
  카드상세:{


  },
  카드날짜:{
    fontSize:9.3,
    color:"gray"

  },
});

